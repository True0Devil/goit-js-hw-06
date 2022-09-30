const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listRef = document.querySelector('#ingredients');

// console.log(listRef);

// ingredients.forEach(ingredient => {
//   const ingredientItemRef = document.createElement(`li`);
//   ingredientItemRef.classList.add(`item`);
//   ingredientItemRef.textContent = ingredient;
//   listRef.appendChild(ingredientItemRef);
// });

const markup = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.classList.add('item');
  ingredientItemRef.textContent = ingredient;

  return ingredientItemRef;
});

listRef.append(...markup);
