var out = console.log.bind(document)

const click_mobile = document.querySelector(".nav-bar .nav-list .nav-list-item-mobile .menu")
const click_mobile_close = document.querySelector(".nav-bar .nav-list .nav-list-item-mobile .close")
const nav_mobile = document.querySelector(".nav-bar .nav-mobile")


click_mobile.addEventListener("click", () => {
    nav_mobile.style.display = "flex"
    click_mobile.style.display = "none"
    click_mobile_close.style.display = "inline"
})

click_mobile_close.addEventListener("click", () => {
    nav_mobile.style.display = "none"
    click_mobile.style.display = "inline"
    click_mobile_close.style.display = "none"
})