let temp = document.getElementById("input-text")

let btnCal = document.getElementById("btn-cal")
let btnCan = document.getElementById("btn-can")
let showTemp = document.getElementById("show-temp")
let showUnit = document.getElementById("show-unit")

btnCal.addEventListener( "click" , function(){
    if (document.getElementById("CtoF").checked) {
        let Fah = (parseFloat(temp.value) * 9 / 5) + 32
        showTemp.innerHTML = Fah
        showUnit.innerHTML = "ฟาเรนไฮท์"
    }
    
    if (document.getElementById("FtoC").checked) {
        let Cel = (parseFloat(temp.value) - 32) * 5 / 9
        showTemp.innerHTML = Cel
        showUnit.innerHTML = "เซลเซียส"
    }
} )

btnCan.addEventListener( "click" , function(){
    temp.value=""
    showTemp.innerHTML = "0.00"
})