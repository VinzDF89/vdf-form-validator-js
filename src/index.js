import VDFValidator from './vdf-form-validator.js';

if (typeof window !== 'undefined') {
    console.log('VDFValidator is imported on browser');
    window.addEventListener('load', () => {
        console.log('VDFValidator is registering the forms');
        //Register all forms that have .vform class
        [...document.querySelectorAll('form.vform')].forEach(form => VDFValidator.registerForm(form));
    });
}

export default VDFValidator;