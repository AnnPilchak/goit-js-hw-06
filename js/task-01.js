const categories = document.getElementById('categories').children;
console.log("Number of categories: ", categories.length);

Array.from(categories).forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElements = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});