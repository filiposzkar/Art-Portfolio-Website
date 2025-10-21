const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".grid img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");
const closeButton = document.querySelector(".close-button");
previews.forEach((preview) => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        const originalSrc = preview.getAttribute("data-original");  
        original.src = `./assets/${originalSrc}`;
        const altText = preview.alt;
        caption.textContent = altText;
    });
});

closeButton.addEventListener("click", () => {
    modal.classList.remove("open");
    original.classList.remove("open");
});

