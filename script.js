const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-bar");
const navMenu = document.querySelector(".menu-nav");
const close = document.querySelector(".close");



menu.addEventListener("click", () => {
    navMenu.classList.add("show")
    navMenu.classList.remove("hide")
    
});

close.addEventListener("click", () => {
    navMenu.classList.add("hide")
    navMenu.classList.remove("show")
});




window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 100) {
        navbar.classList.add('changed')
        navbar.classList.remove('changed2')
    } else {
        navbar.classList.add('changed2')
        navbar.classList.remove('changed')
    }
})






const toScroll = (link, targetSection) => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetPosition = targetSection.offsetTop;

        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
}


document.addEventListener("DOMContentLoaded", function() {
    var homeLink = document.querySelector('a[href="#home"]');
    var hometargetSection = document.getElementById('home');

    var aboutLink = document.querySelector('a[href="#about"]');
    var abouttargetSection = document.getElementById('about');

    var activiteLink = document.querySelector('a[href="#activite"]');
    var activitetargetSection = document.getElementById('activite');

    var partenaireLink = document.querySelector('a[href="#partenaire"]');
    var partenairetargetSection = document.getElementById('partenaire');

    var responsablesLink = document.querySelector('a[href="#responsables"]');
    var responsablestargetSection = document.getElementById('responsables');


    toScroll(homeLink, hometargetSection);
    toScroll(aboutLink, abouttargetSection);
    toScroll(activiteLink, activitetargetSection);
    toScroll(partenaireLink, partenairetargetSection);
    toScroll(responsablesLink, responsablestargetSection);

});


const the_animation = document.querySelectorAll('.animation') //

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animation');
        }
    // else {
    //     entry.target.classList.remove('scroll-animation')
    // }
    })
},
{ threshold: 0.5
});


for (let i = 0; i < the_animation.length; i++) {
    const elements = the_animation[i];
    observer.observe(elements);
}
