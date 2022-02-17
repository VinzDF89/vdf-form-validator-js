class VDFValidator
{
    static onBeforeValidation;
    static onValidated;
    static onFailure;
    static onCompletion;

    static #variables = {};

    static async registerForm(form)
    {
        const fn = (e) => {
            e.preventDefault();

            VDFValidator.runEvent('onBeforeValidation', e.target);

            VDFValidator.validateForm(e.target)
                .then(() => {
                    // form.removeEventListener('submit', fn);
                    // form.submit();
                    // form.addEventListener('submit', fn);
                    VDFValidator.runEvent('onValidated', e.target);
                    alert('Form validated!');
                })
                .catch(error => {
                    console.log('Form validation failed!', error);
                    VDFValidator.showErrors(error.message);
                    VDFValidator.runEvent('onFailure', e.target, error);
                })
                .finally(() => {
                    VDFValidator.runEvent('onCompletion', e.target);
                });
        }

        form.addEventListener('submit', fn);
    }

    static async validateForm(form)
    {
        //Get all fields of the form that have .vfield-* class
        const fields = [...form.querySelectorAll('[class*=vfield-]')];
        const errors = {};
        for (const f of fields) {
            const validators = VDFValidator.getVDFValidators(f);
            for (const v of validators) {
                try {
                    await VDFValidator.validate(f, v);
                } catch (e) {
                    if (!errors.hasOwnProperty(f.name)) {
                        errors[f.name] = [];
                    }
                    errors[f.name].push(v);
                }
            }
        }

        if (Object.keys(errors).length) {
            throw new Error(JSON.stringify(errors));
        }
    }

    static getVDFValidators(field)
    {
        return field.className.split(' ')
            .filter(className => /^vfield-/.test(className))
            .map(className => className.replace('vfield-', ''));
    }

    static validate(field, validator)
    {
        return new Promise((resolve, reject) => {
            const {validatorName, params} = VDFValidator.parseValidator(validator);

            if (typeof VDFValidatorFunctions[validatorName] === 'function') {
                VDFValidatorFunctions[validatorName](field, params, resolve, reject);
            } else {
                reject(`Undefined validator "${validatorName}"`);
            }
        });
    }

    static showErrors(data)
    {
        const errors = JSON.parse(data);
        for (const [field, error] of Object.entries(errors)) {
            const input = document.querySelector(`[name=${field}]`);

            if (input) {
                input.style.border = '1px solid red';
                
                const msg = input.getAttribute(`data-verror-${error}`) ?? input.getAttribute(`data-verror`);
                if (msg) {
                    const msgElement = document.createElement('span');
                    msgElement.style.color = 'red';
                    msgElement.innerHTML = msg;
                    input.parentNode.insertBefore(msgElement, input.nextSibling);
                }
            }
        }
    }

    static parseValidator(validator)
    {
        const tokens = validator.split('-');
        const validatorName = tokens.shift();
        const params = tokens.map(item => 
            /^#/.test(item) ? this.#variables[item.substring(1)] : item
        );

        return {
            validatorName,
            params
        };
    }

    static defineFunction(name, fn)
    {
        VDFValidatorFunctions[name] = fn;
    }

    static defineVariable(name, value)
    {
        this.#variables[name] = value;
    }

    static runEvent(name, form, errors)
    {
        if (this[name]) {
            this[name](form, errors);
        }
    }
}

class VDFValidatorFunctions
{
    static required(field, params, resolve, reject)
    {
        const value = field.value.trim();

        !!value ? resolve() : reject(`Required value for "${field.name}" is missing`);
    }

    static email(field, params, resolve, reject)
    {
        const value = field.value.trim();

        if (!value.length || /^\S+@\S+$/.test(value)) {
            resolve();
        } else {
            reject('Invalid e-mail address');
        }
    }

    static min(field, params, resolve, reject)
    {
        const length = field.value.trim().length;
        const minLength = parseInt(params[0]);

        (!length || length >= minLength) ? resolve() : reject(`Required minimum characters of ${minLength}`);
    }

    static max(field, params, resolve, reject)
    {
        const length = field.value.trim().length;
        const maxLength = parseInt(params[0]);

        length <= maxLength ? resolve() : reject(`Required maximum characters of ${maxLength}`);
    }

    static equalto(field, params, resolve, reject)
    {
        const value = field.value.trim();
        const target = field.form.querySelector(`[name=${params[0]}]`).value.trim();

        if (!value.length || !target) {
            resolve();
        }

        value === target ? resolve() : reject(`Value (${value}) not equal to the target's value (${target})`);
    }
}

window.addEventListener('load', () => {
    //Register all forms that have .vform class
    [...document.querySelectorAll('form.vform')].forEach(form => VDFValidator.registerForm(form));
});