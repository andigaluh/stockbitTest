function findFirstStringInBracket(str) {
    let resultString = '';
    let stringMatchRegex = str.match(/\((.*?)\)/);

    if (stringMatchRegex) {
        resultString = stringMatchRegex[1];
    }

    return resultString;
}

console.log(findFirstStringInBracket('Here text with (some important info)'));

