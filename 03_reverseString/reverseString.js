const reverseString = function(string) {
    let stringPosition = string.length-1
    let char='';
    while (stringPosition> -1){
        let character = string[stringPosition];
        char += character;
        stringPosition--;
    }
    return char;
    };

// Do not edit below this line
module.exports = reverseString;
