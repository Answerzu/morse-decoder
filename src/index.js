const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let exprMy = [];
    exprMy = expr.match(/.{1,10}/g)
    exprMy = exprMy.join(' ');
    let temp = exprMy.replace(/10/g, ".");
    temp = temp.replace(/11/g, "-");
    temp = temp.replace(/00/g, "");
    temp = temp.replace(/\*\*\*\*\*\*\*\*\*\*/g, " ");
    console.log(temp);

    let message = [];

    temp.split('  ').map(function(word) {
        word.split(' ').map(function(letter) {
            message.push(MORSE_TABLE[letter]);
        });
        message.push(' ');
    });
    message = message.join('');
    message = message.substring(0, message.length - 1);
    return message;
}

module.exports = {
    decode
}