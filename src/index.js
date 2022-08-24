import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

export default class VDFValidator
{
    static #onBeforeValidation = [];
    static #onValidated = [];
    static #onFailure = [];
    static #onCompletion = [];

    static #variables = {};
    static #changed = [];

    static registerForm(form)
    {
        VDFValidator.#registerFormEvents(form);
        VDFValidator.#registerInputEvents(form);
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
                    console.log(`"${f.name}" not valid`);
                    if (!errors.hasOwnProperty(f.name)) {
                        errors[f.name] = [];
                    }
                    const { validatorName } = VDFValidator.parseValidator(v);
                    errors[f.name].push({[validatorName]: e});
                    break;
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
                const func = VDFValidatorFunctions[validatorName];
                // If the function doesn't declare the 4 parameters: field, params, resolve and reject
                // then it is not an asynchronous validation logic
                if (func.length < 4) {
                    const result = func(field, params);
                    if (result === true) {
                        resolve(true);
                    } else {
                        reject(result);
                    }
                // otherwise, it is, and it will be auto-resolved
                } else {
                    func(field, params, resolve, reject);
                }
            } else {
                reject(`Undefined validator "${validatorName}"`);
            }
        });
    }

    static resetError(field)
    {
        field.classList.remove('verror');
        field.style.removeProperty('border');
        let errorMsg = field.parentNode.querySelector('.verrormsg');
        if (errorMsg) {
            errorMsg.remove();
        }

        const fieldName = field.name.replace(/[^a-zA-Z]/, '');

        errorMsg = [...field.form.querySelectorAll(`[class*=verror-${fieldName}]`)];
        if (errorMsg.length) {
            errorMsg.map(item => item.style.display = 'none');
        }
    }

    static showErrors(data, formSubmitted)
    {
        const errors = JSON.parse(data);
        let focused = false;
        for (const [fieldName, error] of Object.entries(errors)) {
            const field = document.querySelector(`[name=${fieldName}]`);

            if (field) {
                field.classList.add('verror');
                field.style.borderColor = 'red';
                const validationName = Object.keys(error[0])[0];
                const customErrorMessage = error[0][validationName];
                
                const fieldName = field.name.replace(/[^a-zA-Z]/, '');
                let errorElement = field.form.querySelector(`.verror-${fieldName}`);
                if (!errorElement) {
                    errorElement = field.form.querySelector(`.verror-${fieldName}-${validationName}`);
                }
             
                const msg = field.getAttribute(`data-verror-${validationName}`) ?? field.getAttribute(`data-verror`) ?? customErrorMessage;
                if (msg && !errorElement) {
                    const msgElement = document.createElement('span');
                    msgElement.className = 'verrormsg';
                    msgElement.style.color = 'red';
                    msgElement.style.display = 'block';
                    msgElement.innerHTML = msg;

                    field.parentNode.appendChild(msgElement);
                } else if (errorElement) {
                    errorElement.style.display = 'inline';
                }

                if (!focused && formSubmitted) {
                    field.focus();
                    focused = true;
                }
            }
        }
    }

    static parseValidator(validator)
    {
        const tokens = validator.split('-');
        const validatorName = tokens.shift();
        const params = tokens.map(item => 
            /^#/.test(item) ? VDFValidator.#variables[item.substring(1)] : item
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
        VDFValidator.#variables[name] = value;
    }

    static onBeforeValidation(fn)
    {
        VDFValidator.#onBeforeValidation.push(fn);
    }

    static resetOnBeforeValidation()
    {
        VDFValidator.#onBeforeValidation = [];
    }

    static onValidated(fn)
    {
        VDFValidator.#onValidated.push(fn);
    }

    static resetOnValidated()
    {
        VDFValidator.#onValidated = [];
    }

    static onFailure(fn)
    {
        VDFValidator.#onFailure.push(fn);
    }

    static resetOnFailure()
    {
        VDFValidator.#onFailure = [];
    }

    static onCompletion(fn)
    {
        VDFValidator.#onCompletion.push(fn);
    }

    static resetOnCompletion()
    {
        VDFValidator.#onCompletion = [];
    }

    static scrollToFirstErrorField(errors)
    {
        errors = Object.keys(JSON.parse(errors));
        if (errors.length) {
            const field = document.querySelector(`[name=${errors[0]}]`);
            window.scrollTo({top: field.parentNode.offsetTop, behavior: 'smooth'});
        }
    }

    static #runEvent(name, form, errors)
    {
        const events = {
            onBeforeValidation: VDFValidator.#onBeforeValidation,
            onValidated: VDFValidator.#onValidated,
            onFailure: VDFValidator.#onFailure,
            onCompletion: VDFValidator.#onCompletion
        };
        
        if (events[name]) {
            events[name].map(item => item(form, errors));
        }
    }

    static #disableSubmitButtons(form)
    {
        [...form.querySelectorAll('input[type=submit], button')].map(item => item.setAttribute('disabled', true));
    }

    static #enableSubmitButtons(form)
    {
        [...form.querySelectorAll('input[type=submit], button')].map(item => item.removeAttribute('disabled'));
    }

    static #registerFormEvents(form)
    {
        const formFn = (e) => {
            e.preventDefault();

            VDFValidator.#disableSubmitButtons(form);
            VDFValidator.#runEvent('onBeforeValidation', e.target);

            VDFValidator.executeValidation(e.target)
                .then(() => {
                    console.log('VDFValidator: form validation succeeded!');
                    VDFValidator.#runEvent('onValidated', e.target);
                })
                .catch(error => {
                    console.log('VDFValidator: form validation failed!');
                    VDFValidator.showErrors(error.message, true);
                    VDFValidator.scrollToFirstErrorField(error.message);
                    VDFValidator.#runEvent('onFailure', e.target, error);
                })
                .finally(() => {
                    VDFValidator.#enableSubmitButtons(form);
                    VDFValidator.#runEvent('onCompletion', e.target);
                });
        }
        form.addEventListener('submit', formFn);
    }

    static #registerInputEvents(form)
    {
        const inputChangeFn = (e) => {
            const f = e.target;
            if (!VDFValidator.#changed.includes(f.name)) {
                VDFValidator.#changed.push(f.name);
            }
        };
        const inputBlurFn = (e) => {
            if (!VDFValidator.#changed.includes(e.target.name)) {
                return;
            }

            VDFValidator.executeValidation([e.target])
                .then(() => {
                    const index = VDFValidator.#changed.findIndex(item => item === e.target.name);
                    if (index >= 0) {
                        VDFValidator.#changed.splice(index, 1);
                    }
                })
                .catch(error => {
                    VDFValidator.showErrors(error.message, false);
                });
        };
        [...form.querySelectorAll('[class*=vfield-]')].map(input => input.addEventListener('change', inputChangeFn));
        [...form.querySelectorAll('[class*=vfield-]')].map(input => input.addEventListener('blur', inputBlurFn));
    }
}

class VDFValidatorFunctions
{
    static required(field, params, resolve, reject)
    {
        const value = field.value.trim();
        const isBox = field.type == 'checkbox' || field.type == 'radio';

        ((isBox && field.checked) || (!isBox && !!value)) ? resolve() : reject('Required field');
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

        (!length || length >= minLength) ? resolve() : reject(`Minimum of ${minLength} characters`);
    }

    static max(field, params, resolve, reject)
    {
        const length = field.value.trim().length;
        const maxLength = parseInt(params[0]);

        length <= maxLength ? resolve() : reject(`Maximum of ${maxLength} characters`);
    }

    static equalto(field, params, resolve, reject)
    {
        const value = field.value.trim();
        const target = field.form.querySelector(`[name=${params[0]}]`);
        if (target) {
            const targetValue = target.value.trim();

            if (value === targetValue) {
                resolve();
                return;
            } else {
                console.log(`Field value (${field.name}) not equal to the target's value (${target.name})`);
                reject('Value not valid');
                return;
            }
        }
        
        console.log(`Target field (${target.name}) is not defined`);
        reject('Value not valid');
    }
}

window.addEventListener('load', () => {
    //Register all forms that have .vform class
    [...document.querySelectorAll('form.vform')].forEach(form => VDFValidator.registerForm(form));
});