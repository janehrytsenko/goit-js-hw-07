const liEls = document.querySelectorAll(`.item`);
console.log(`В списке ${liEls.length} категории.`);

liEls.forEach((num) => {
  return (
    console.log(`Категория: ${num.querySelector(`h2`).textContent}`),
    console.log(`Количество элементов: ${num.querySelectorAll("li").length}`)
  );
});
