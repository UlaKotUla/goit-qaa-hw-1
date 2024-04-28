
const categories = document.querySelectorAll('#categories .item')
console.log('Number of categories: ' + categories.length)
categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    console.log(categoryName);

    const items = category.querySelectorAll('li');
    console.log('Number of items: ' + items.lenght);
})



