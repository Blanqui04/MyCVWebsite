
const sections = document.querySelectorAll('section');
const options = { threshold: 0.1 };
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, options);
sections.forEach(section => observer.observe(section));
const ctx = document.getElementById('aptitudsChart').getContext('2d');
const aptitudsChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['Comunicació', 'Dedicació', 'Treball en equip', 'Adaptabilitat', 'Creativitat'],
        datasets: [{
            label: 'Aptituds Personals',
            data: [75, 90, 85, 90, 60],
            backgroundColor: 'rgba(46, 139, 87, 0.2)',
            borderColor: '#2e8b57',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            r: {
                beginAtZero: true
            }
        },
        plugins: {
            tooltip: {
                enabled: true,
                backgroundColor: '#2e8b57',
                titleFont: { size: 16 },
                bodyFont: { size: 14 }
            }
        }
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        document.getElementById('responseMessage').textContent = 'Gràcies pel teu missatge, ' + name + '!';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Si us plau, completa tots els camps.';
    }
});
