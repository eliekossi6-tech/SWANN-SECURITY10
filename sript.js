// Menu mobile (burger)
const burger = document.querySelector('.burger');
const nav= document.querySelector('.nav-links');

burger.addEventListener('click' , () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});
// Animation au scroll pour les cartes de service
const observerOptions = {
    threshold: 0.2
};
const observer = new
IntersectionObserver((entries) => {
   entries.forEach(entry => {
    if (entry.isIntersecting){
        entry.target.opacity = "1";
        entry.target.style.tranform = "translateY(0)"
    }
   })
},observerOptions);
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = "0";
    card.style.tranform = "translateY(50px)";
    card.style.transition = "all 0.6s ease-out";
       observer.observe(card)
})
// Simulation d'envoi de formulaire
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Merci ! Votre démande a été envoyée.Un angent vous contactera sous 24h.");
})