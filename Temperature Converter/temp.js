let celsiusInput = document.querySelector('#celsius > input')
let fahrenheitInput = document.querySelector('#fahrenheit > input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
/* Celsius to Fahreheit */
 celsiusInput.addEventListener('input', function(){
    let ctemp = parseFloat(celsiusInput.value)
    let ftemp = (ctemp*(9/5)) + 32

    fahrenheitInput.value = roundNumber(ftemp)

 })
/* Fahreheit to Celsius */
 fahrenheitInput.addEventListener('input', function(){
    let ftemp = parseFloat(fahrenheitInput.value)
    let ctemp = (ftemp - 32) * (5/9)

    celsiusInput.value = roundNumber(ctemp)
    
 }) 

 btn.addEventListener('click', ()=>{
    celsiusInput.value = ""
    fahrenheitInput.value = ""
 })