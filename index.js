const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const specialSymbols = ["~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"]
let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let passLength = document.getElementById("length-input")
let numToggle = document.getElementById("num-toggle")
let symbolsToggle = document.getElementById("symbols-toggle")
let copyMassage = document.getElementById("copy-message")

function randomNum(massiveLength) {
    return Math.floor(Math.random() * massiveLength);
}

function passwordConstruct(number, symbol) {
    let password = ""
    if (!number && !symbol){
        password += characters[randomNum(characters.length)]
    } else if(number && !symbol){
        let numOrSymbol = Math.floor(Math.random() * 2) + 1
        if (numOrSymbol === 1){
            password += characters[randomNum(characters.length)]
        } else if(numOrSymbol === 2){
            password += numbers[randomNum(numbers.length)]
        }
    } else if(!number && symbol){
        let numOrSymbol = Math.floor(Math.random() * 2) + 1
        if (numOrSymbol === 1){
            password += characters[randomNum(characters.length)]
        } else if(numOrSymbol === 2){
            password += specialSymbols[randomNum(specialSymbols.length)]
        }
    } else if(number && symbol){
        let numOrSymbol = Math.floor(Math.random() * 3) + 1
        if (numOrSymbol === 1){
            password += characters[randomNum(characters.length)]
        } else if(numOrSymbol === 2){
            password += numbers[randomNum(numbers.length)]
        } else {
            password += specialSymbols[randomNum(specialSymbols.length)]
        }
    }
    return password
}

function generatePassword() {
    let password = ""
    let passwordLength = passLength.value
    let nToggle = numToggle.checked
    let sToggle = symbolsToggle.checked
    for (let i = 0; i < passwordLength; i++) {
        password += passwordConstruct(nToggle, sToggle)
    }
    return password
}

function showPassword() {
    password1El.innerText = generatePassword();
    password2El.innerText = generatePassword();
    password3El.innerText = generatePassword();
}

function massagePop(massage){
    copyMassage.innerText = massage
}

function clearPop(){
    copyMassage.innerText = ""
}

function copyPassword(buttonNum){
    let btnText = document.getElementById(buttonNum).innerText
    navigator.clipboard.writeText(btnText)
    clearPop()
    if (btnText !== ""){
        massagePop("Secure password copied!")
    } else {
        massagePop("You didn't generate a password!")
    }
    setTimeout(clearPop, 1000);
}