class VDFValidator
{
    static #onBeforeValidation = [];
    static #onValidated = [];
    static #onFailure = [];
    static #onCompletion = [];

    static #variables = {};
    static #changed = [];

    static registerForm(form)
    {
        this.#registerFormEvents(form);
        this.#registerInputEvents(form);
    }

    static async executeValidation(formOrFields)
    {
        //Get all fields of the form that have .vfield-* class
        const isArray = Array.isArray(formOrFields);
        const fields = isArray ? formOrFields : [...formOrFields.querySelectorAll('[class*=vfield-]')];
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
        this.resetError(field);

        return new Promise((resolve, reject) => {
            const {validatorName, params} = VDFValidator.parseValidator(validator);

            if (typeof VDFValidatorFunctions[validatorName] === 'function') {
                VDFValidatorFunctions[validatorName](field, params, resolve, reject);
            } else {
                reject(`Undefined validator "${validatorName}"`);
            }
        });
    }

    static resetError(field)
    {
        field.style.removeProperty('border');
        const errorMsg = field.parentNode.querySelector('.verrormsg');
        if (errorMsg) {
            errorMsg.remove();
        }
    }

    static showErrors(data)
    {
        const errors = JSON.parse(data);
        for (const [fieldName, error] of Object.entries(errors)) {
            const field = document.querySelector(`[name=${fieldName}]`);

            if (field) {
                field.style.border = '1px solid red';
                
                const msg = field.getAttribute(`data-verror-${error[0].split('-')[0]}`) ?? field.getAttribute(`data-verror`);
                if (msg) {
                    const msgElement = document.createElement('span');
                    msgElement.className = 'verrormsg';
                    msgElement.style.color = 'red';
                    msgElement.innerHTML = msg;
                    field.parentNode.insertBefore(msgElement, field.nextSibling);
                } else {
                    let errorElement = field.form.querySelector(`.verror-${field.name}`);
                    if (!errorElement) {
                        const errorName = error[0].split('-')[0];
                        errorElement = field.form.querySelector(`.verror-${field.name}-${errorName}`);
                    }

                    if (errorElement) {
                        errorElement.style.display = 'inline';
                    }
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

    static onBeforeValidation(fn)
    {
        this.#onBeforeValidation.push(fn);
    }

    static onValidated(fn)
    {
        this.#onValidated.push(fn);
    }

    static onFailure(fn)
    {
        this.#onFailure.push(fn);
    }

    static onCompletion(fn)
    {
        this.#onCompletion.push(fn);
    }

    static #runEvent(name, form, errors)
    {
        const events = {
            onBeforeValidation: this.#onBeforeValidation,
            onValidated: this.#onValidated,
            onFailure: this.#onFailure,
            onCompletion: this.#onCompletion
        };
        
        if (events[name]) {
            events[name].map(item => item(form, errors));
        }
    }

    static resetEvent(name)
    {
        //TODO
    }

    static #registerFormEvents(form)
    {
        const formFn = (e) => {
            e.preventDefault();

            VDFValidator.#runEvent('onBeforeValidation', e.target);

            VDFValidator.executeValidation(e.target)
                .then(() => {
                    // form.removeEventListener('submit', fn);
                    // form.submit();
                    // form.addEventListener('submit', fn);
                    VDFValidator.#runEvent('onValidated', e.target);
                    alert('Form validated!');
                })
                .catch(error => {
                    console.log('Form validation failed!', error);
                    VDFValidator.showErrors(error.message);
                    VDFValidator.#runEvent('onFailure', e.target, error);
                })
                .finally(() => {
                    VDFValidator.#runEvent('onCompletion', e.target);
                });
        }
        form.addEventListener('submit', formFn);
    }

    static #registerInputEvents(form)
    {
        const inputChangeFn = (e) => {
            const f = e.target;
            if (!this.#changed.includes(f.name)) {
                this.#changed.push(f.name);
            }
        };
        const inputBlurFn = (e) => {
            if (!this.#changed.includes(e.target.name)) {
                return;
            }

            VDFValidator.executeValidation([e.target])
                .then(() => {
                    const index = this.#changed.findIndex(item => item === e.target.name);
                    if (index >= 0) {
                        this.#changed.splice(index, 1);
                    }
                })
                .catch(error => {
                    VDFValidator.showErrors(error.message);
                });
        };
        [...document.querySelectorAll('[class*=vfield-]')].map(input => input.addEventListener('change', inputChangeFn));
        [...document.querySelectorAll('[class*=vfield-]')].map(input => input.addEventListener('blur', inputBlurFn));
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