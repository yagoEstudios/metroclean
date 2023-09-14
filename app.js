import Timer from "./timer.js";

const tempoDisplay = document.querySelector('.tempo');
const decreaseTempoBtn = document.querySelector('.decreaseTempo');
const increaseTempoBtn = document.querySelector('.increaseTempo');
const tempoSlider = document.querySelector('.slider');
const startStopBtn = document.querySelector('.para');
const subtractBeats = document.querySelector('.substractBeats');
const addBeats = document.querySelector('.addBeats');
const measureCount = document.querySelector('.measureCount');
const boton = document.querySelector('.but');

const uno = new Audio ('uno.wav')
const otros = new Audio ('otros.wav')
const you = new Audio ('you.mp3')



function updateMetronome()
{
    tempoDisplay.textContent = bpm;
    tempoSlider.value = bpm;
    metronome.timeInterval = 60000 / bpm;
}

function validateBpm()
{
    if(bpm <= 20) {return};
    if(bpm >= 280) {return};

}

let bpm = 140;
let beatsPerMeasure = 4;
let count = 0;
let isRunning = false;


decreaseTempoBtn.addEventListener('click', () => {
    if(bpm <= 20) {return};
    bpm--;
    validateBpm();
    updateMetronome();
});

increaseTempoBtn.addEventListener('click', () => {
    if(bpm >= 280) {return};
    bpm++;
    validateBpm();
    updateMetronome();
});

tempoSlider.addEventListener('input', () => {

bpm = tempoSlider.value;
updateMetronome();


});

boton.addEventListener('click', () => {
    
    bpm = prompt("METE BPM")
    if(bpm <= 20) {return};
    if(bpm >= 280) {return};

    updateMetronome();
});


subtractBeats.addEventListener('click', () => {

    if(beatsPerMeasure <= 1) return;
    beatsPerMeasure--;
    measureCount.textContent = beatsPerMeasure;
    count=0;
    
    
});

addBeats.addEventListener('click', () => {
    if(beatsPerMeasure >= 12) return;
    beatsPerMeasure++;
    measureCount.textContent = beatsPerMeasure;
    count=0;
});


startStopBtn.addEventListener('click', () => {

count = 0;

if (!isRunning)
{
    metronome.start();
    isRunning = true;
    startStopBtn.textContent = '| |'
}else
{
    metronome.stop();
    isRunning = false;
    startStopBtn.textContent = '▶'
}


} );

function playClick() {

    if (count === beatsPerMeasure)
    {
            count = 0;
    }
    
    if (count === 0 )
    {
        uno.play();
        uno.currentTime = 0;
    }
    else
    {
        otros.play();
        otros.currentTime=0;
    }
    
    count++;
    
    
}

const metronome = new Timer(playClick, 60000/bpm,  {immediate: true});






