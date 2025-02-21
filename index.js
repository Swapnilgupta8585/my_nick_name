const seconds = document.querySelector(".seconds");
const nickName = document.querySelector(".nickName_span");
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");

main();

function main() {
  startButton.outerHTML = '<button class="button start">START</button>'; // Replace button
  stopButton.outerHTML = '<button class="button stop">STOP</button>'; // Replace button

  updateButtons(); // reinitialize buttons

  // Set initial state
  nickName.innerHTML = "";
  let counterInterval;
  let startTimeout;
  let count = 5;
  seconds.innerHTML = `${count} sec`;

  // Add event listeners
  startButton.addEventListener("click", start, false);
  stopButton.addEventListener("click", stop, false);

  function start() {
    startButton.outerHTML =
      '<button class="button start" style="display:none;">START</button>';
    startCounter();

    // Display nickname after 5 seconds
    startTimeout = setTimeout(() => {
      nickName.innerHTML = "SAPPO";
      stopButton.innerHTML = "Try Again";
    }, 5000);

    function startCounter() {
      counterInterval = setInterval(() => {
        if (count > 0) {
          count--;
          seconds.innerHTML = `${count} sec`;
        } else {
          clearInterval(counterInterval);
        }
      }, 1000);
    }
  }

  function stop() {
    clearTimeout(startTimeout); // Clear timeout
    clearInterval(counterInterval); // Clear interval
    nickName.innerHTML = ""; // Reset nickname
    count = 5; // Reset count
    seconds.innerHTML = `${count} sec`; // Reset seconds
    updateButtons(); // Ensure buttons are correctly reset
    startButton.style.display = "inline-block"; // Show start button
    stopButton.innerHTML = "STOP"; // Reset stop button text
    main();
  }
}

function updateButtons() {
  // reinitialize buttons after any DOM update
  startButton = document.querySelector(".start");
  stopButton = document.querySelector(".stop");
}
