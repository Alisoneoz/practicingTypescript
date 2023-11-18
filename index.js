console.log('hello');
// Implicit Types
var helloWorld = "Hello, World"; // by hovering on top of the variable name, you'll see that TS already assigned the "string" type to this variable, based on its value
helloWorld = 5; //❌ in TS you cannot assign a different type to a variable because in practice it may lead to unexpected behaviour on your code
var ble; //variables without value have a type of "any"
ble = 0;
ble = "2"; // and as it, it allows to mix the type... watchout...
// Explicit types
var firstName = 'Estephany'; // to declare type, before the '=' add a colon ':' and then the type
var age = 111;
var blablito; // you can also do it for variables declared with empty value
blablito = 'hello, michi';
blablito = 5; // it will not allow you to assign different types to the variable
// here in the above example, we've also created a special type that we can after use to declare explicit types
//like in here, you can see what is that explicit type by hoverin on top of it:
var x = ["Hello, michi", 7]; // if you try assigning different value types it will give you an error
// Enums
// they follow a structure similar to the objects
var ConstantsForTheExample;
(function (ConstantsForTheExample) {
    ConstantsForTheExample[ConstantsForTheExample["Constant_1"] = 0] = "Constant_1";
    ConstantsForTheExample[ConstantsForTheExample["Constant_2"] = 1] = "Constant_2";
    ConstantsForTheExample[ConstantsForTheExample["Constant_3"] = 2] = "Constant_3";
    ConstantsForTheExample[ConstantsForTheExample["Constant_4"] = 3] = "Constant_4";
    ConstantsForTheExample[ConstantsForTheExample["Constant_5"] = 4] = "Constant_5";
    ConstantsForTheExample[ConstantsForTheExample["Constant_6"] = 5] = "Constant_6";
    ConstantsForTheExample[ConstantsForTheExample["Constant_7"] = 6] = "Constant_7";
})(ConstantsForTheExample || (ConstantsForTheExample = {}));
// as their values are self incrementing you use enums for case where you dont care about the actual value
// cases where you just want the value to be distint from others
// He menctioned redux and the type and the actions
