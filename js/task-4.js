let counterValue = Number(`${document.querySelector("#value").textContent}`);

const counterArea = document.querySelector("#value");

const incrementEl = document.querySelector(
  '#counter button[data-action="increment"]'
);
const decrementEl = document.querySelector(
  '#counter button[data-action="decrement"]'
);

const increment = incrementEl.addEventListener("click", onIncrement);
function onIncrement() {
  counterArea.textContent = counterValue += 1;
}

const decrement = decrementEl.addEventListener("click", onDecrement);
function onDecrement() {
  counterArea.textContent = counterValue -= 1;
}
