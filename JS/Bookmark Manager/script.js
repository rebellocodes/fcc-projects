const mainSection = document.getElementById("main-section");
const formSection = document.getElementById("form-section");
const bookmarkSection = document.getElementById("bookmark-list-section")
const formCategoryName = document.querySelector("#form-section .category-name");
const bookmarkCategoryName = document.querySelector("#bookmark-list-section .category-name")
const categoryDropdown = document.getElementById("category-dropdown");
const addBookmarkBtn = document.getElementById("add-bookmark-button")
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form")
const nameField = document.getElementById("name");
const urlField = document.getElementById("url")
const viewCategoryBtn = document.getElementById("view-category-button");
const categoryList = document.getElementById("category-list")
const closeListBtn = document.getElementById("close-list-button")
const deleteBookmarkBtn = document.getElementById("delete-bookmark-button")

// get bookmarks array
const getBookmarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    //need to fix later
    
}


const displayOrCloseForm = () => {
    mainSection.classList.toggle("hidden");
    formSection.classList.toggle("hidden");
}


addBookmarkBtn.addEventListener('click', () => {
    formCategoryName.innerText = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    displayOrCloseForm();
})


closeFormBtn.addEventListener('click', () => {
    displayOrCloseForm();
})


const clearBookmarkForm = () => {
    nameField.value = "";
    urlField.value = ""
}


addBookmarkFormBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!nameField.value || !urlField.value) {
        alert("Please add a name or URL bro")
    } else {
        const bookmarks = getBookmarks();
        const bookmarkObj = {
                name: nameField.value,
                category: categoryDropdown.options[categoryDropdown.selectedIndex].value,
                url:urlField.value
            }
        
        bookmarks.push(bookmarkObj)
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
        clearBookmarkForm();
        displayOrCloseForm()
    }
})

const displayOrHideCategory = () => {
    mainSection.classList.toggle("hidden");
    bookmarkSection.classList.toggle("hidden")
}


const showBookmarkList = () => {
    const bookmarks = getBookmarks()
    let filteredArray = bookmarks.filter(book => book.category === categoryDropdown.options[categoryDropdown.selectedIndex].value)
    console.log(filteredArray)
    if (filteredArray.length === 0) {
        categoryList.innerHTML = `<p>No Bookmarks Found</p>`
        return
    } else {
        categoryList.innerHTML = "";
        for (const obj of filteredArray) {
            categoryList.innerHTML +=
            `
            <input type="radio" id ="${obj.name}" value="${obj.name}" name="bookmark">
                <label for="${obj.name}">
                    <a href="${obj.url}">${obj.name}</a>
                </label>
            `

        }
    }
}


viewCategoryBtn.addEventListener('click', () => {
    bookmarkCategoryName.innerText = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    showBookmarkList()
    displayOrHideCategory()

})


closeListBtn.addEventListener('click', displayOrHideCategory)



const deleteBookmark = () => {
    const bookmarks = getBookmarks();
    const checkedRadio = document.querySelector('input[name="bookmark"]:checked');
    const bookMarkToDelete = bookmarks.findIndex(book => book.name === checkedRadio.value && book.category === categoryDropdown.options[categoryDropdown.selectedIndex].value)
    bookmarks.splice(bookMarkToDelete, 1)
    localStorage.setItem("bookmarks",JSON.stringify(bookmarks))
    showBookmarkList()
}
deleteBookmarkBtn.addEventListener('click',deleteBookmark)
