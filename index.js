//Initializing the variables
const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const disable = false;

//Event Listener for startBtn
startBtn.addEventListener('click', ()=> {
    document.addEventListener('keydown', handleKeyDownEvent);
    document.addEventListener('keyup', handleKeyUpEvent);
    startBtn.disabled = true;
    stopBtn.disabled = false;
})

//Event Listener for stopBtn
stopBtn.addEventListener('click', ()=> {
    document.removeEventListener('keydown', handleKeyDownEvent);
    document.removeEventListener('keyup', handleKeyUpEvent);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled = false;
    stopBtn.disabled = true;
})

//Function to handle key Down event
function handleKeyDownEvent(e){
    logDiv.textContent = `Key ${e.key} press down`;
    stateDiv.textContent = "Key is down";
}

//Function to handle key Up event
function handleKeyUpEvent(e){
    logDiv.textContent = `Key ${e.key} press up`;
    stateDiv.textContent = "Key is Up";
}