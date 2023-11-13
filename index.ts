console.log('hello')

// Implicit Types

let helloWorld = "Hello, World" // by hovering on top of the variable name, you'll see that TS already assigned the "string" type to this variable, based on its value

helloWorld = 5 //❌ in TS you cannot assign a different type to a variable because in practice it may lead to unexpected behaviour on your code

let ble; //variables without value have a type of "any"

ble = 0;

ble = "2" // and as it, it allows to mix the type... watchout...