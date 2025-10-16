const galleryItem = document.querySelectorAll(".gallery-item");
const lightboxOverlay = document.querySelector(".lightbox")
const closeBtn = document.getElementById("close-btn");
let lightboxImg = document.getElementById("lightbox-image")

galleryItem.forEach(item => {
    item.addEventListener('click', () => {
        const attributeString = item.getAttribute("src")
        const finalString = attributeString.replace("-thumbnail", "")
        lightboxImg.setAttribute("src",finalString)
        lightboxOverlay.style.display = "flex";

    })
})
closeBtn.addEventListener('click', () => {
    lightboxOverlay.style.display = "none"
})

lightboxOverlay.addEventListener('click', () => {
    lightboxOverlay.style.display = "none"
})