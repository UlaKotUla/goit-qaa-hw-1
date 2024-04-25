const categories = document.querySelectorAll('#categories.item')
console.log('Numbers of categories: ' + categories.length)
categories.forEach(category => {
    const categoryName = category.querySelector('h2').textContent
    console.log(categoryName)
    category.querySelectorAll('li').length;
})