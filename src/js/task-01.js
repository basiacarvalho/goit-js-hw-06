const categories = document.querySelectorAll('.item');
const categoryCount = categories.length;
console.log(`Number of categories: ${categoryCount}`);

for (const category of categories) {
    const categoryName = category.querySelector("h2").innerText;
    console.log(`Category: ${categoryName}`);
    const elementsCount = category.querySelectorAll('li').length;
    console.log(`Elements: ${elementsCount}`);
}