const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".close-menu");

const menu = document.querySelector(".desktop-menu");

openMenu.addEventListener("click", addClass);
closeMenu.addEventListener("click", removeClass);

function addClass() {
    menu.classList.add("open")
}

function removeClass() {
    menu.classList.remove("open")
}