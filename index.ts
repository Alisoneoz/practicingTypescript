console.log('hello')

// Implicit Types

let helloWorld = "Hello, World" // by hovering on top of the variable name, you'll see that TS already assigned the "string" type to this variable, based on its value

helloWorld = 5 //❌ in TS you cannot assign a different type to a variable because in practice it may lead to unexpected behaviour on your code

let ble; //variables without value have a type of "any"

ble = 0;

ble = "2" // and as it, it allows to mix the type... watchout...


// Explicit types

let firstName: string = 'Estephany'; // to declare type, before the '=' add a colon ':' and then the type

let age: number = 111;

let blablito: string; // you can also do it for variables declared with empty value

blablito = 'hello, michi';

blablito = 5 // it will not allow you to assign different types to the variable


// IN CONCLUSION --> to specify te type --> add a colon and specify the type
