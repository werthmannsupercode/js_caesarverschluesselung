let klartextalphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let alphabetGanz = klartextalphabet.slice(0);

let inputText = document.getElementById('inputText');
let inputKey = document.getElementById('inputKey');
let outputText = document.getElementById('outputText');

let encode = () => {

    // neues Array
    let arr = [];
    for (i = 0; i < Number(inputKey.value); i++) {
        let kApop = klartextalphabet.pop();
        // console.log(kApop);
        arr.push(kApop);
    }
    // console.log(arr);
    let arrNew = arr.reverse();
    // console.log(arrNew);
    // console.log(klartextalphabet);
    let geheimtextalphabet = arrNew.concat(klartextalphabet);
    // console.log(geheimtextalphabet);

    let arrInputText = inputText.value.split('');
    // console.log(arrInputText);

    for (i of arrInputText) {
        // console.log(i);
        let indexOfLetter = alphabetGanz.indexOf(i);
        // console.log(indexOfLetter);
        outputText.innerHTML += geheimtextalphabet[indexOfLetter].toUpperCase();
    }

}

let alphabet2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let alphaComplete = alphabet2.slice(0);

let inputText2 = document.getElementById('inputText2');
let inputKey2 = document.getElementById('inputKey2');
let outputText2 = document.getElementById('outputText2');

let decode = () => {
    let arrInputText2 = inputText2.value.split('');
    console.log(arrInputText2);

    // neues Array
    let arr = [];
    for (i = 0; i < Number(inputKey2.value); i++) {
        let kApop = alphabet2.pop();
        // console.log(kApop);
        arr.push(kApop);
    }
    // console.log(arr);
    let arrNew = arr.reverse();
    // console.log(arrNew);
    // console.log(klartextalphabet);
    let geheimtextalphabet2 = arrNew.concat(alphabet2);
    // console.log(geheimtextalphabet2);

    for (i of arrInputText2) {
        // console.log(i);
        let indexOfLetter2 = geheimtextalphabet2.indexOf(i);
        // console.log(indexOfLetter);
        outputText2.innerHTML += alphaComplete[indexOfLetter2].toLowerCase();
    }
}

