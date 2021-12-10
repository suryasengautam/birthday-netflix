const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");

const checkNumberButton = document.querySelector("#check-number");
checkNumberButton.addEventListener("click",checkBirthDateIsLucky)
const outputBox = document.querySelector("#output-box")
function getvalues () {
    console.log(dateOfBirth.value)
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);

}
function compareValue(sum,luckyNumber){
    const outputBox = document.querySelector("#output-box")

    if (sum %luckyNumber == 0) {
        console.log("your birtyhday is lucky");

        outputBox.innerHTML = ("your birtyhday is lucky");

        

    } else {
        console.log("your birtyhday is lucky");

        outputBox.innerHTML = ("your birthday is not lucky");
    }
}
function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0
    
    for (let index = 0;index<dob.length;index++) {
        sum= sum + Number(dob.charAt(index))
    }
    
    compareValue(sum,Number(luckyNumber.value))


}

checkNumberButton.addEventListener("click",checkBirthDateIsLucky)