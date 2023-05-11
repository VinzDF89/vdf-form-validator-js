export default class VDFValidator {
    static "__#1@#onBeforeValidation": any[];
    static "__#1@#onValidated": any[];
    static "__#1@#onFailure": any[];
    static "__#1@#onCompletion": any[];
    static "__#1@#variables": {};
    static "__#1@#changed": any[];
    static run(e: any, options?: {}): Promise<{
        isValid: boolean;
        data: {};
    }>;
    static init(isClient?: boolean): void;
    static registerForm(form: any): void;
    static executeValidation(formOrFields: any): Promise<void>;
    static getVDFValidators(field: any): any;
    static validate(field: any, validator: any): Promise<any>;
    static resetError(field: any): void;
    static showErrors(data: any): void;
    static parseValidator(validator: any): {
        validatorName: any;
        params: any;
    };
    static defineFunction(name: any, fn: any): void;
    static defineVariable(name: any, value: any): void;
    static onBeforeValidation(fn: any): void;
    static resetOnBeforeValidation(): void;
    static onValidated(fn: any): void;
    static resetOnValidated(): void;
    static onFailure(fn: any): void;
    static resetOnFailure(): void;
    static onCompletion(fn: any): void;
    static resetOnCompletion(): void;
    static scrollToFirstErrorField(errors: any): void;
    static "__#1@#runEvent"(name: any, form: any, errors: any): void;
    static "__#1@#disableSubmitButtons"(form: any): void;
    static "__#1@#enableSubmitButtons"(form: any): void;
    static "__#1@#registerFormEvents"(form: any): void;
    static "__#1@#registerInputEvents"(form: any): void;
}
