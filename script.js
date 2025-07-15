document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            document.querySelector(".navbar-collapse").classList.remove("show");
        });
    });
});


