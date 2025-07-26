let number = document.getElementById("number")
let numberValue = parseInt(number.value || '0');
const increase = document.getElementById("increaseBtn")
const rest = document.getElementById("restBtn")
const decrease = document.getElementById("decreaseBtn")

increase.addEventListener("click",() => {
    numberValue++;
    number.textContent = numberValue;
})

decrease.addEventListener("click",() => {
    numberValue--;
    number.textContent = numberValue;

})

rest.addEventListener("click",() => {
    numberValue = 0;
    number.textContent = numberValue;

})