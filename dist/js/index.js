// Initializing the lightGallery library
const lightGalleryInt = () => {
    lightGallery(document.getElementById('gallery-container'));
}
lightGalleryInt();


// Initializing the scrollspy library
const scrollspyLibraryInit = () => {
    const nav = document.getElementById("nav")
    const scrollspy = new VanillaScrollspy(nav, 1000, 'easeInOutQuint');
    scrollspy.init();
}
scrollspyLibraryInit();


// Toggling nav
const navToggle = () => {
    document.querySelector(".hamburger-menu").addEventListener("click", () => {
        document.querySelector(".nav").classList.toggle("nav-phone");
    });
}
navToggle();



// Remove nav when link clicked
document.querySelectorAll(".nav__link").forEach(el => {
    el.addEventListener("click", () => {
        document.querySelector(".nav").classList.remove("nav-phone");
    });
});

