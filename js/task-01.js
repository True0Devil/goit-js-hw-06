const categoriesRef = document.querySelector(`#categories`);

const countElementsChildren = element => {
    console.log(`Number of categories : ${element.children.length}`);
}

countElementsChildren(categoriesRef);

// ======================================================================================= //

const categoriesItemRef = document.querySelectorAll(`.item`);
categoriesItemRef.forEach(category => {
    const list = category.lastElementChild;

    console.log(`Category : ${category.firstElementChild.textContent} `);
    console.log(`Elements: ${list.children.length}`);
});
