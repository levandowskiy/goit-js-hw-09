const startBtn = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`); 
const body = document.body;
let timerId = null;

startBtn.addEventListener("click", () => {
    timerId = setInterval( () => {
        body.style.backgroundColor = getRandomHexColor();
        startBtn.setAttribute("disabled", "");
    } ,1000)
});
    
stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
    startBtn.removeAttribute("disabled");
})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
