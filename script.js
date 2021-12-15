const aleEL = document.getElementById("ih");
const copyEL = document.getElementById("copy");
const lenEL = document.getElementById("len");
const upperEL = document.getElementById("upper");
const lowerEL = document.getElementById("lower");
const numberEL = document.getElementById("number");
const symbolEL = document.getElementById("symbol");
const generateEL = document.getElementById("generate");


const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "?/@#$%¨&*()_-+=|<>";


function getLowercase(){
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase(){
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber(){
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol(){
    return symbols[Math.floor(Math.random() * symbols.length)];

}

function generatePassword(){
    const len = lenEL.value;

    let password = "";

    if( upperEL.checked){
        password += getUppercase();
    }
    if( lowerEL.checked){
        password += getLowercase();
    }
    if( numberEL.checked){
        password += getNumber();
    }
    if( symbolEL.checked){
        password += getSymbol();
    }
   
    for(i = password.length; i < len; i++) {
        const x = generateX();
        password += x;
    }

    aleEL.innerText = password

}

function generateX(){
    const xs = [];

    if(upperEL.checked) {
        xs.push(getUppercase());
    }

    if(lowerEL.checked) {
        xs.push(getLowercase());
    }
    if(numberEL.checked) {
        xs.push(getNumber());
    }
    if(symbolEL.checked) {
        xs.push(getSymbol());
    }
    if(xs.length === 0) return "";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEL.addEventListener("click", generatePassword);

copyEL.addEventListener("click", () => {
    const textarea = document.createElement("textarea");
    const password = aleEL.innerText;

    if(!password){
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Texto copiado");
})