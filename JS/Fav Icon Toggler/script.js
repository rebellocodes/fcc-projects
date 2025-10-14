const favicons = document.querySelectorAll(".favorite-icon")

favicons.forEach(favicon => {
    favicon.addEventListener('click', () => {
        if (!favicon.classList.contains("filled")) {
        favicon.innerHTML = "&#10084;"
        favicon.classList.add("filled")
    } else {
        favicon.innerHTML = "&#9825;"
        favicon.classList.remove("filled")
    }
    })
})