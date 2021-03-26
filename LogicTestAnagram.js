const inputList = ['kita', 'atik', 'tika', 'aku', 'makan', 'kia', 'kua'];

function anagram(inputString = []) 
{
    const anagramList = {};

    if ((Array.isArray(inputString)) && (inputString.length > 0)) {
            
        inputString.forEach(element => {
            const wordSorted = element.split('').sort().join('');
            if (!anagramList[wordSorted]) {
                anagramList[wordSorted] = [element];
            } else {
                anagramList[wordSorted].push(element);
            }
        });

        return Object.values(anagramList);
        
    } else {
        return 'Incorrect Input';
    }
}

console.log(anagram(inputList));