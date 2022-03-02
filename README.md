# VDF Form Validator JS
A JavaScript plugin to easily and quickly validate HTML forms

## Installation
All you need to start utilizing the VDF Form Validator JS plugin, is to import the file **dist/vdf-form-validator.js** in your HTML head section.

## Usage
### The logic behind the plugin
This plugin can work by adding specific classes to every form you want to manage with, and by adding specific classes to the input fields, to specify how these should be validated before submitting the form.
Every validation logic is handled by using JavaScript Promises, then you could also validate a field by making an asynchronous validation.

### Using classes
Every form you want to validate, must use the class **vform**.
For the input fields, you have to use certain classes depending on the desired type of validation needed.
Some of these classes, accept a parameter. The value of this parameter, can't contain a character different from an alphanumerical one.
The following are the pre-defined classes available:
- **vfield-required**: assures that a value for the field is provided;
- **vfield-email**: only empty value or a valid e-mail address is allowed
- **vfield-min-$1**: only empty value or a value with a minimum amount of $1 characters is allowed;
- **vfield-max-$1**: only empty value or a value with a maximum amount of $1 characters is allowed;
- **vfield-equalto-$1**: the field is valid only when its value is equal to the value of the field specified by the parameter ($1) that represents the name of the input field.

## Defining variables
If you need to pass a more complex parameter to a class, you can define and name it before you pass its name (preceded by #) as the parameter of the class. This is possible by using the function **VDFValidator.defineFunction()**, as you can see in the example in **index.html**.

## Custom validation logic functions
You can define your own custom validation logic by using **VDFValidator.defineFunction()**. This function accepts 2 paramters:
1. The name to use as class. For example, if you define a function with the name "password", then you can specify the class name "vfield-password" to the field you want it to be applied.
2. A function that contains the validation logic. The function must define 4 parameters: **field**, **params**, **resolve** and **reject** in order to work. 