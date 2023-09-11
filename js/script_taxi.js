let waitTime = document.getElementById("get-wait")
let distant = document.getElementById("get-distant")

let btnCal = document.getElementById("btn-cal")
let btnCan = document.getElementById("btn-can")
let showPrice = document.getElementById("show-price")

btnCal.addEventListener("click", function () {
    let calDistant = parseInt(distant.value)
    if (calDistant <= 1) {
        let distantPrice = 35
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    } else if (calDistant <= 10) {
        let distantPrice = 35 + ((calDistant - 1) * 5.50)
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    } else if (calDistant <= 20) {
        let distantPrice = 35 + (9 * 5.50) + ((calDistant - 10) * 6.50)
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    } else if (calDistant <= 40) {
        let distantPrice = 35 + (9 * 5.50) + (10 * 6.50) + ((calDistant - 20) * 7.50)
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    } else if (calDistant <= 60) {
        let distantPrice = 35 + (9 * 5.50) + (10 * 6.50) + (20 * 7.50) + ((calDistant - 40) * 8.00)
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    } else if (calDistant <= 80) {
        let distantPrice = 35 + (9 * 5.50) + (10 * 6.50) + (20 * 7.50) + (20 * 8.00) + ((calDistant - 60) * 9.00)
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    } else if (calDistant > 80) {
        let distantPrice = 35 + (9 * 5.50) + (10 * 6.50) + (20 * 7.50) + (20 * 8.00) + (20 * 9.00) + ((calDistant - 80) * 10.50)
        showPrice.innerHTML = distantPrice + (parseInt(waitTime.value) * 2)
    }
})

btnCan.addEventListener( "click" , function(){
    waitTime.value=""
    distant.value=""
    showPrice.innerHTML = "0"
})