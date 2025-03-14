document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav").classList.add("active");
});

document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".nav").classList.remove("active");
});
