// Welcome to the Chalkboard Printer!
const input = require('sync-input');

// These variables are already declared for you.
// Looks like we made a mistake and used 'var' instead of 'let'!
// Remember it's bad practice to use 'var', so let's change all of them to 'let'.
    let name = input("Enter name: ");
    let surname = input("Enter surname: ");
    let message = input("Enter message: ");
    let repeats = input("Enter number of repeats: ");

// Assign the correct values to the variables.

// Log the message to the console 5 times.
    for (let i=0; i< repeats; i++) {
        console.log(`This is ${name} ${surname} and ${message}`);
    }

// etc...

// We have also imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));