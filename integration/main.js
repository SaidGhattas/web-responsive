let burgerMenuBtn = document.querySelector(".burger-menu-button");

burgerMenuBtn.addEventListener("click", () => {
    /* On click on the menu button, toggle the visibility state of the menu */
    let burgerMenu = document.querySelector(".burger-menu");
    burgerMenu.classList.toggle("active");
    let burgerMenuButton = document.querySelector(".burger-menu-button");
    burgerMenuButton.classList.toggle("active");
})