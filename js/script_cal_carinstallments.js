let nam = document.getElementById("input-name")
let last = document.getElementById("input-last")

let price = document.getElementById("input-price")
let down = document.getElementById("input-down")

let btnCal = document.getElementById("btn-cal")
let btnCan = document.getElementById("btn-can")

let interest = document.getElementById("input-interest")

let sp1 = document.getElementById("sp1")
let sp2 = document.getElementById("sp2")
let sp3 = document.getElementById("sp3")
let sp4 = document.getElementById("sp4")
let sp5 = document.getElementById("sp5")

btnCal.addEventListener( "click" , function(){
    sp1.innerHTML = nam.value + " " + last.value

    if (document.getElementById("btn1").checked) {
        sp2.innerHTML = "Honda"
    }
    if (document.getElementById("btn2").checked) {
        sp2.innerHTML = "Toyota"
    }
    if (document.getElementById("btn3").checked) {
        sp2.innerHTML = "MG"
    }
    if (document.getElementById("btn4").checked) {
        sp2.innerHTML = "Mazda"
    }
    if (document.getElementById("btn5").checked) {
        sp2.innerHTML = "ISUZU"
    }
    if (document.getElementById("btn6").checked) {
        sp2.innerHTML = "Nissan"
    }

    let downPrice = parseFloat(price.value) / parseFloat(down.value)
    sp3.innerHTML = downPrice

    let finance = parseFloat(price.value) - downPrice
    sp4.innerHTML = finance

    let times = document.getElementById("times")
    let yearSelected = times.value

    let insm = finance * (parseFloat(interest.value) / 100) * yearSelected
    let totalPrice = finance + insm
    let insmMonth = totalPrice / (yearSelected * 12)
    sp5.innerHTML = insmMonth
} )

btnCan.addEventListener( "click" , function(){
    nam.value=""
    last.value=""
    price.value=""
    down.value=""
    interest.value=""
    sp1.innerHTML = "XXXXX"
    sp2.innerHTML = "XXXXX"
    sp3.innerHTML = "XXXXX"
    sp4.innerHTML = "XXXXX"
    sp5.innerHTML = "XXXXX"
})