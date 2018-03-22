
//Exercise 2
/**
 We have a file which has 10 million numbers put in randomly ranging from 0 to 99.
 Sort the array and write it to another file without keeping the whole array into memory or reading the whole file at once and putting it in memory.
 */

'use strict'

const fs = require('fs');

module.exports = () => {
    return {
            generateRandomNumbers: () => {
            try {
                var numbersList = [];

    fs.writeFile('random_number.txt', 'utf8', (err) => {
        if (err) throw err;
});

    while (numbersList.length < 99) {
        let randomNumber = Math.floor(Math.random() * 99) + 1;
        if (numbersList.indexOf(randomNumber) < 0) {
            numbersList.push(randomNumber + '\n');
        }
        fs.appendFileSync('random_number.txt', randomNumber + '\n');
    }

    // read file
    fs.readFile('input_random_number.txt', 'utf8', (err, data) {
        if (err) throw err;
        var numberCollection = [];
        fs.readFileSync('random_number.txt')
            .toString()
            .split('\n')
            .forEach(function(data) {
                numberCollection.push(data);
            });
        // write outputdata to the file
        fs.writeFile('output_number.txt', numberCollection.sort(), (err) => {
            if (err) throw err;
    });
    });
} catch (e) {
        console.log('error occured')
    }
}
};
}