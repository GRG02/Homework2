let width = document.getElementById("get-width")
let lenght = document.getElementById("get-lenght")

let btnCal = document.getElementById("btn-cal")
let btnCan = document.getElementById("btn-can")
let showArea = document.getElementById("show-area")

btnCal.addEventListener( "click" , function(){
    let showCal = parseFloat(width.value) * parseFloat(lenght.value)
    showArea.innerHTML = showCal
} )

btnCan.addEventListener( "click" , function(){
    width.value=""
    lenght.value=""
    showArea.innerHTML = "0.00"
})