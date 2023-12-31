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

    // Enums
        // they follow a structure similar to the objects

    enum ConstantsForTheExample{ //if you dont specify anything, they will have a self-incrementing value starting from 0 --> so the first constant will have a value of 0, followed by 1 for the 2nd, then 2 for the 3rd etc...
        Constant_1,
        Constant_2,
        Constant_3,
        Constant_4,
        Constant_5,
        Constant_6,
        Constant_7,

    }

    // as their values are self incrementing you use enums for case where you dont care about the actual value
    // cases where you just want the value to be distint from others
        // He menctioned redux and the type and the actions
    
    
// Interfaces

// to create objects and specify the types of every property

interface TheInterface { //write it starting with a capital letter
    property1: string; //use semicolons instead of commas
    property2: number;
}

// is like creating a special type that works for objects
// take a look of how we¿ll use it in the example below.

const user: TheInterface ={
    property1:"The string",
    property2: 1,
} //if you add another property that doesn't match the interface of the type, TypeScript will warn you

//Composing Types --> Union

    // you can declare a type that can be one of many types
    // Useful case for Unions --> describing a set of strings and numbers that a value that is allowed to be
        // For example

        type WindowStates = "open" | "closed" | "minimized" // it cannot be other than this for a PC window

        // so if we were to declare a variable using this type you created...

        const windowState: WindowStates = "random value of a string different from the value I said before it could be";

        // He will tell you that is not assignable to type 'WindowStates', because it differs from what you said what the values could be

            // Another example

            type LockStates = "Locked" | "unlocked";

            type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9 ;

            const odd: OddNumbersUnderTen = 6; // this gives error

         // Unions also provide a way to handle different types

            //Example let's create a funtion that gives us the length, like of an array

            const getLength = (param: string | string[]) => { // with params you say which type can the parameters be.  syntax is like this typeofdata(string or number, etc)[] ---> for example -> number[]
                return param.length
            };

            getLength('test'); // 4 --> be cause it has 4 characters

            getLength(['test', 'test1']); // 2 --> be cause it has two elements
            