# VDF Form Validator JS
A JavaScript plugin to easily and quickly validate HTML forms

## Installation

### 1. Browser import
All you need to start utilizing the VDF Form Validator JS plugin, is to import the file **dist/vdf-form-validator.js** in your HTML head section.  
It is possible to define one or more callback functions that will be triggered once the form is submitted and the validation is successful:

    VDFValidator.onValidated(function(form) {
        alert('This form has been successfully validated!');
    });


Additional callback functions can be defined by simply call again the "onValidated" method.  
That's it! This is all you need to do in order to utilize the VDFValidator plugin if you want to import the compiled JS file in the head section of your document.

### 2. JS dependency import

If you want to utilize the plugin as a JS dependency, useful for example when it has to be imported in projects based on reactive frameworks like Vue, then these are the steps to follow:

    import VDFValidator from './src/vdf-form-validator.js';


then manually call the following method to initialize the plugin:

    VDFValidator.init();


If you are using a framework like Nuxt, and you have also the SSR to handle, then you can avoid the initialization of the plugin on the server by providing a parameter that will stop the execution of the method if its value is falsy. For example:

    VDFValidator.init(process.client);


**Note**: it would be better to call this method when the entire page has been loaded.

Now, in the callback that you call once the form has been submitted, you can execute the validation of the form by simply calling the "run" method and passing it the form DOM object as parameter, for example:

    const result = await VDFValidator.run(e.target);


"result" will contain an object with the details of the validation result, with the following properties:

- **data**: an object containing the list of fields that failed the validation and the name of the respective validator. This will be an empty object in case the validation is successful
- **isValid**: booleans true or false, depending on whether the validation has been successful or not

## Usage
### The logic behind the plugin
This plugin can work by adding specific classes to every form you want to manage with, and by adding specific classes to the input fields, to specify how these should be validated before submitting the form.
Every validation logic is handled by using JavaScript Promises under the hood, therefore you could also validate a field by making an asynchronous request.
The plugin also guarantees an high compatibility with old browsers thanks to the build made with Babel.

### Using classes
Every form you want to validate, must use the class **vform**.
For the input fields, you have to use certain classes depending on the desired type of validation needed.
Some of these classes, accept a parameter. The value of this parameter, can't contain a character different from an alphanumerical one.
The following are the pre-defined classes available:
- **vfield-required**: assures that a value for the field is provided, or it must be checked in case of checkbox or radiobox;
- **vfield-email**: only empty value or a valid e-mail address is allowed
- **vfield-min-$1**: only empty value or a value with a minimum amount of $1 characters is allowed;
- **vfield-max-$1**: only empty value or a value with a maximum amount of $1 characters is allowed;
- **vfield-equalto-$1**: the field is valid only when its value is equal to the value of the field specified by the parameter ($1) which represents the name of the input field.

## Defining variables
If you need to pass a more complex value as parameter to a class, you can define a variable and name it before you pass its name (preceded by #) as the parameter of the class. This is possible by using the **VDFValidator.defineVariable()** function.
For example, you can define a variable in this way:

    VDFValidator.defineVariable('complexValue', 'This is a complex value example to pass as parameter')


and then add the following class to the input:

    <input type="text" name="customValidationWithComplexParameter" class="vfield-customValidation-#complexValue">

## Custom validation logic functions
You can define your own custom validation logic by using **VDFValidator.defineFunction()**. This function accepts 2 parameters:
1. The name to use as class. For example, if you define a function with the name "password", then you can specify the class name "vfield-password" to the field you want it to be applied.
2. A function that contains the validation logic. If you want to do an asynchronous validation, the function must declare 4 parameters: **field**, **params**, **resolve** and **reject** in order to work.
- **field**: the HTML input field's DOM object;
- **params**: an array containing all passed parameters (yes, you can pass multiple parameters by using **-** as separator);
- **resolve**: the function to call if the validation passes
- **reject**: the function to call if the validation doesn't pass (if a string is passed as argument, then it will be used as custom error message). 

Important: when calling resolve or reject, always add a "return" statement to ensure that the execution of the code will stop!

otherwise, the function must just declare the first 2 parameters, and since in this case it is not an asynchronous validation, the function must return a boolean value, **true** if the validation passes, or **false** if it fails (instead of the **false** boolean value, you could also return a string that will be used as custom error message).

## Error messages' handling
Basically there are 3 different types of error messages' handlings: the compact mode, the custom mode and the in-function mode.

### Compact error messages
This is the simplest way to define error messages for each field and possibly for each registered validation.
If you want to specify a unique error message for any of the validation attached to the field, you can simply add the attribute **data-verror** and the error message as the value.
If you want to specify a different error message for each validation, you can do it by specifying an attribute whose name starts with **data-verror-** and followed by the name of the validation.
For example:
- data-verror-required="This field is required!"
- data-verror-min="The value provided is not long enough!"

With the compact error messages, a span element is added just before the field input's parent node, with the class "verrormsg" and an inline style property to set the color of the text to red.

### Custom error messages
If you need a custom structure for the error messages, you can define a div (or a different kind of element) for each field, or for each validation, and put inside it everything you need.
The element must have a class starting with **verror-** followed by the name of the field, and then optionally a dash and the name of the validation.  
For example:

This first example, shows how to specify an error message for every validation that will fail for the input field named "password".

    <div class="verror-password invalid-feedback">
        Please insert a valid password!
    </div>

This second one instead, shows how to provide an error message for a specific validation that fail. In this case the validation is "min" for the input field named "password".

    <div class="verror-password-min invalid-feedback">
        The password is too short!
    </div>

**Note**: every element containing the custom error message, should be hidden by manually setting the CSS property display to none. In the 2 examples above, this is done by the class "invalid-feedback" from the Bootstrap CSS framework.
Making a select tag as required, be sure that at least one option element has an explicit value attribute set to empty string.

### In-function error messages
If custom validation functions are defined, they could return a custom error message by simply returning a string instead of the "false" boolean value (in case of synchronous validations) or by calling reject() and passing it a string as argument (in case of asynchronous validations).

### Multiple error modes

If more than one mode is provided for a single field, then this is the priority that will be followed:

Custom error messages > Compact error messages > In-function error messages

## Examples for custom validations

### Synchronous custom validation example: password validation

    VDFValidator.defineFunction('password', function(field, params) {
        const value = field.value.trim();
        const minLength = params[0] ?? 6;
        const regex = new RegExp(`(?=.*[a-zA-Z]+)(?=.*[0-9]+)(?=.*[!$#-])[a-zA-Z0-9!$#-]{${minLength},}`);

        if (!value.length || !regex.test(value)) {
            return false; // or you could alternatively return a string to be used as error message
        }

        return true;
    });

As synchronous custom validation, the function must return a boolean value: true for success or false for failure.

### Asynchronous custom validation example: username's existence checking

    VDFValidator.defineFunction('check-username', function(field, params, resolve, reject) {
        const userName = params[0] ?? '';
        if (!userName.length) {
            reject();
        }

        axios.get('restapi.example.com/user/check-name', {
            userName: userName
        })
        .then(function (response) {
            resolve();
        })
        .catch(function (error) {
            reject(); // you could send a string as argument that will be used as error message
        });
    });

As asynchronous custom validation, the function declares two additional parameters, resolve and reject, to be called (as functions) to respectively end the validation with success or with failure.

## Event callback functions

You can register one or more callback functions for one or more events:

- **onBeforeValidation**
- **onValidated**
- **onFailure**
- **onCompletion**

For all of them, you can pass a parameter that will represent the form involved in the validation process.
Additional callback functions for the same event, can be defined by simply call the function again.
For example, this is how to register a callback function in case the validation is not successful:

    VDFValidator.onFailure(function(form) {
        alert('Something went wrong!');
    });


For each of the events, you can remove all the defined callback functions for a specific event, by calling the following methods:

- **resetOnBeforeValidation**
- **resetOnValidated**
- **resetOnFailure**
- **resetOnCompletion**