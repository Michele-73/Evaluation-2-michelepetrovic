const score0El = document.getElementById ('score_0');
const score1El = document.getElementById ('score_1');
const diceEl = document.querySelector('.dice');

//btns
const btnRoll = document.querySelector('.btn_roll');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener('click', function() {
    diceEl.classList.remove("hidden");
})
