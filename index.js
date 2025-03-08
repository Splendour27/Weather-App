document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const backdrop = document.getElementById("backdrop");
    const body = document.body;

    // Toggle menu on button click
    menuBtn.addEventListener("click", () => {
        body.classList.toggle("menu-active");
    });

    // Close menu when backdrop is clicked
    backdrop.addEventListener("click", () => {
        body.classList.remove("menu-active");
    });
});

