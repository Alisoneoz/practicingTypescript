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


// besides boolean, number, string, array, unknown, any, void
//you can also have --> enum and tuple which you normally don't have in JS

    //Tuple --> allows to express an array with a fixed number of elements whose types are known, 
        //but don't need to be the same

        //For Example:

        type stringAndNumber = [ string, number]; // the first element is a string and the second element is a number

        // here in the above example, we've also created a special type that we can after use to declare explicit types

        //like in here, you can see what is that explicit type by hoverin on top of it:

        let x: stringAndNumber = ["Hello, michi", 7] // if you try assigning different value types it will give you an error

