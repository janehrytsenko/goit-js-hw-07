const input = {
  internal: document.querySelector("#name-input"),
  external: document.querySelector("#name-output"),
};

input.internal.addEventListener("input", onInputChange);

function onInputChange(event) {
  input.external.textContent =
    input.internal.value !== "" ? event.currentTarget.value : "незнакомец";
}
