let LightOn = document.querySelector(".Light-on");
let Light = document.getElementById("Light");
let LightOff = document.querySelector(".Light-off")

// First wqay to  on light 

// LightOn.addEventListener("click", () => {
//     Light.src = "images/Light on.jpg"
// })

// LightOff.addEventListener("click", () => {
//     Light.src = "images/Light off.jpg"
// })

// 2nd way to run light

LightOn.addEventListener("click", switchOn);

function switchOn () {
    Light.src = "images/Light on.jpg"
}

LightOff.addEventListener("click", switchOff)

function switchOff () {
    Light.src = "images/Light off.jpg"
}
