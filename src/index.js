import VDFValidator from './vdf-form-validator.js';

window.addEventListener('load', () => {
    //Register all forms that have .vform class
    [...document.querySelectorAll('form.vform')].forEach(form => VDFValidator.registerForm(form));
});

export default VDFValidator = VDFValidator;