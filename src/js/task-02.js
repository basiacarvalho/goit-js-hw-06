const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = [];

for (const ingredient of ingredients) {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  ingredientsList.push(listItem);
}

const ingredientsElements = document.querySelector('#ingredients');
ingredientsElements.append(...ingredientsList);
