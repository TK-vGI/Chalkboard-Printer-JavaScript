// Welcome to the Chalkboard Printer!
const input = require('sync-input');

let name, surname, message, repeats;
name = input('Enter name: ');
surname = input('Enter surname: ');
message = input('Enter message: ');
repeats = input('Enter number of repeats: ');

name = name.trim();
surname = surname.trim();
message = message.trim();
repeats = repeats.trim();

function printer(name,surname,message,repeats) {
    let count = 0;
    while (count < Number(repeats)) {
        console.log(`This is ${name} ${surname} and ${message}`);
        count++;
    }
}

printer(name, surname, message, repeats);
