const list = document.querySelectorAll('.item');
console.log("Number of categories: ", list.length);

list.forEach(item => {
    const title = item.querySelector('h2');
    const li = item.querySelectorAll('li');
    console.log("Category: ", title.textContent);
    console.log("Elements: ", li.length);
});