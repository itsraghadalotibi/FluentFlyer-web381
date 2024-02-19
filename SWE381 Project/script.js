const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky" , window.scrollY > 80 )
});

const sr = ScrollReveal({
    origin: 'top',
    distance:'85px',
    duration: 2500,
    reset: true
})


sr.reveal ('.container-box',{delay:150});