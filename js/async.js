const startButton = document.getElementById('start');
const endButton = document.getElementById('end');
const print = document.getElementById('print'); 

let intervalId = null;
let startTime = null;

function startLoop() {
if (intervalId) return; // Prevent double start
      startTime = Date.now();

      intervalId = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        print.innerText = `${elapsed} second${elapsed !== 1 ? "s" : ""} have passed`;
      }, 1000);

      startButton.disabled = true;
      endButton.disabled = false;
      print.innerText = "0 seconds have passed";
      console.log("Loop started");
    }

    function endLoop() {
      if (!intervalId) return;
      clearInterval(intervalId);
      intervalId = null;

      startButton.disabled = false;
      endButton.disabled = true;
      print.innerText = "Loop stopped";
      console.log("Loop ended");
    }

    startButton.addEventListener('click', startLoop);
    endButton.addEventListener('click', endLoop);

    
