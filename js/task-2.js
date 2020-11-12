const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsListEl = document.querySelector(`#ingredients`);

const ulElements = ingredients.map((ingredient) => {
  const liEl = document.createElement(`li`);
  liEl.textContent = ingredient;
  return liEl;
});

console.log(ulElements);

ingredientsListEl.append(...ulElements);
