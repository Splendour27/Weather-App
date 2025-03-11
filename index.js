document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const backdrop = document.getElementById("backdrop");
    const body = document.body;

    
    menuBtn.addEventListener("click", () => {
        body.classList.toggle("menu-active");
    });

    // 
    backdrop.addEventListener("click", () => {
        body.classList.remove("menu-active");
    });
});

