const navbar = document.getElementById("navbar");

window.onscroll = function () {
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};
