const button = document.getElementById("btn-start");
const pauseBtn = document.getElementById("btn-pause");
const resetBtn = document.getElementById("btn-reset");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds")

let interval;
let state = true;
let pause = false;
let totalSeconds = 25 * 60;


function updateTime() {
  totalSeconds--;

  let minutesLeft = Math.floor(totalSeconds/60);
  let secondsLeft = totalSeconds % 60;

  if(secondsLeft < 10) {
    seconds.textContent = '0' + secondsLeft;
  } else {
    seconds.textContent = secondsLeft;
  }
  minutes.textContent = `${minutesLeft}`

  if(minutesLeft === 0 && secondsLeft === 0) {
    clearInterval(interval);
    totalSeconds = 25*60;
  }

}

function appTimer() {
  if(state) {
    state = false;

    interval = setInterval(updateTime, 1000);
  } else if (pause) {
    pause = false;
    interval = setInterval(updateTime, 1000);
  }
  else {
    alert('Session has already started.')
  }
}

button.addEventListener('click', appTimer);

pauseBtn.addEventListener('click', () => {
  if(state == false){
    if(pause == false) {
        clearInterval(interval);
        pause = true;
    }
    else {
        interval = setInterval(updateTime, 1000)
        pause = false;
    } 
  } else {
    alert("Timer has not been started.")
  }
})

resetBtn.addEventListener('click', ()=> {
  clearInterval(interval);
  minutes.innerText = "25";
  seconds.innerText = "00";
  totalSeconds = 25*60;
  state = true;
});

console.log("started")