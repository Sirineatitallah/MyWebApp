// Animation sur survol des menaces
const threats = document.querySelectorAll('.threat-item');

threats.forEach(threat => {
    threat.addEventListener('mouseenter', () => {
        threat.style.transform = 'scale(1.05)';
    });

    threat.addEventListener('mouseleave', () => {
        threat.style.transform = 'scale(1)';
    });
});

// Changer le texte de la section d'introduction après un certain délai
setTimeout(() => {
    const introText = document.querySelector('#intro p');
    introText.textContent = "La cybersécurité est un domaine vital pour protéger vos informations. Apprenez à sécuriser vos données aujourd'hui!";
    introText.classList.add('highlight');
}, 5000); // Changer après 5 secondes
