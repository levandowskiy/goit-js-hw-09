
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import { Report } from 'notiflix/build/notiflix-report-aio';

const inputEl = document.querySelector("#datetime-picker");
const startBtn = document.querySelector(`button[data-start]`);
const daysEl = document.querySelector(`span[data-days]`);
const hoursEl = document.querySelector(`span[data-hours]`);
const minutesEl = document.querySelector(`span[data-minutes]`);
const secondsEl = document.querySelector(`span[data-seconds]`);

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      const isFutureTime = selectedDates[0] > new Date();

        if(isFutureTime){
          startBtn.removeAttribute("disabled");  
          return
        }
        Notiflix.Notify.failure("Please choose a date in the future");
        startBtn.setAttribute("disabled", "");  
    },
  };
  flatpickr(inputEl, options)


startBtn.addEventListener("click", () => {
  startBtn.setAttribute("disabled", "");
  inputEl.setAttribute("disabled", "")
    
  const countdownTimer = setInterval(() => {
    let timerTime = new Date(inputEl.value).getTime() - new Date();
    
    timerTime = timerTime - 1;
    
    updateMarkupTimer(timerTime);
    checkTimerCompletion(countdownTimer);
  }, 1000)
});

function updateMarkupTimer(timerTime) {
  daysEl.textContent = pad(convertMs(timerTime).days);
  hoursEl.textContent = pad(convertMs(timerTime).hours);
  minutesEl.textContent = pad(convertMs(timerTime).minutes);
  secondsEl.textContent = pad(convertMs(timerTime).seconds);
}

function checkTimerCompletion(countdownTimer) {
  const isCompleted = daysEl.textContent === "00" && hoursEl.textContent === "00" && minutesEl.textContent === "00" && secondsEl.textContent === "00";
  
  if(isCompleted){
      clearInterval(countdownTimer);
      Report.success(
        'Timer has finished its work',
        'You can choose a new date',
        'Okay',
        function() {
          location.reload(); 
        }
        );
    }
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}