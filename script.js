function verify() {
  document.getElementById("app").innerHTML = `
    <h2>Verification required</h2>
    <p>Select all capacitors:</p>

    <div class="captcha-grid">
      <button class="captcha-item" onclick="selectCaptcha(this, true)">
        <img src="images/capacitor.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, false)">
        <img src="images/resistor.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, false)">
        <img src="images/diode.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, false)">
        <img src="images/circuit.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, true)">
        <img src="images/capacitor-2.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, false)">
        <img src="images/chip.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, false)">
        <img src="images/transistor.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, true)">
        <img src="images/capacitor-3.png">
      </button>

      <button class="captcha-item" onclick="selectCaptcha(this, false)">
        <img src="images/inductor.png">
      </button>
    </div>

    <button class="verify-button" onclick="checkCaptcha()">Verify</button>
  `;
}

function selectCaptcha(button, isCorrect) {
  button.classList.toggle("selected");
  button.dataset.correct = isCorrect;
}

function checkCaptcha() {
  const selectedItems = document.querySelectorAll(".captcha-item.selected");

  if (selectedItems.length === 0) {
    alert("Select something first, birthday boy.");
    return;
  }

  const allCorrect = [...selectedItems].every(
    (item) => item.dataset.correct === "true"
  );

  const selectedThree = selectedItems.length === 3;

  if (allCorrect && selectedThree) {
    showHalloweenQuestion(); 
  } else {
    alert("Access denied. Incorrect component selected.");
  }
}

function showHalloweenQuestion() {
  document.getElementById("app").innerHTML = `
    <h2>Final verification</h2>
    <p>For Mythical Creature Halloween, you were dressed as:</p>

    <div class="answer-list">
      <button onclick="selectAnswer(this, false)">A cursed garden ornament</button>
      <button onclick="selectAnswer(this, false)">Barack Obama on a side quest</button>
      <button onclick="selectAnswer(this, false)">A budget Dracula</button>
      <button onclick="selectAnswer(this, true)">A Greek soldier turned to stone</button>
    </div>

    <button class="verify-button" onclick="checkAnswer()">Verify</button>
  `;
}

function selectAnswer(button, isCorrect) {
  document.querySelectorAll(".answer-list button").forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
  button.dataset.correct = isCorrect;
}

function checkAnswer() {
  const selected = document.querySelector(".answer-list button.selected");

  if (!selected) {
    alert("Pick an answer first.");
    return;
  }

  if (selected.dataset.correct === "true") {
    showFinalQuestion(); 
  } else {
    alert("Incorrect. Please consult the archives and try again.");
  }
}

function showFinalQuestion() {
  document.getElementById("app").innerHTML = `
    <h2>Final final verification</h2>
    <p>In an argument with your partner, who is usually right?</p>

    <div class="answer-list">
      <button onclick="selectFinalAnswer(this)">Malwina</button>
      <button onclick="selectFinalAnswer(this)">Malwina</button>
    </div>

    <button class="verify-button" onclick="checkFinalAnswer()">Verify</button>
  `;
}

function selectFinalAnswer(button) {
  document.querySelectorAll(".answer-list button").forEach(btn => {
    btn.classList.remove("selected");
  });

  button.classList.add("selected");
}

function checkFinalAnswer() {
  const selected = document.querySelector(".answer-list button.selected");

  if (!selected) {
    alert("Be careful here...");
    return;
  }

  showLoader(); 
}

function showLoader() {
  const audio = new Audio("sounds/success.wav");
  audio.volume = 0.4;
  audio.play();

  document.getElementById("app").innerHTML = `
    <div class="loader-screen">
      <h2>Access granted ✅</h2>
      <p class="loader-text">Loading birthday archive...</p>
      <div class="spinner"></div>
    </div>
  `;

  setTimeout(() => {
    playVideo();
  }, 1800);
}

function playVideo() {
  window.location.href = "https://youtu.be/gZheQOVR3T8";
}