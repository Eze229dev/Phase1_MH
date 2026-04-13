// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#' && href !== '#about-section') {
            e.preventDefault();
            const targetElement = document.querySelector(href);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                // Close mobile menu if open
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        }
    });
});

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close menu when a link is clicked
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Get elements
const amountInput = document.getElementById('amountInput');
const amountSlider = document.getElementById('amountSlider');

// Update outputs
const traditionalFee = document.getElementById('traditionalFee');
const traditionalReceive = document.getElementById('traditionalReceive');
const dconnectFee = document.getElementById('dconnectFee');
const dconnectReceive = document.getElementById('dconnectReceive');
const youSave = document.getElementById('youSave');
const monthlySave = document.getElementById('monthlySave');
const yearlySave = document.getElementById('yearlySave');

// Sync input and slider
amountInput.addEventListener('input', (e) => {
    amountSlider.value = e.target.value;
    updateCalculator();
});

amountSlider.addEventListener('input', (e) => {
    amountInput.value = e.target.value;
    updateCalculator();
});

// Calculate and display results
function updateCalculator() {
    const amount = parseFloat(amountInput.value) || 0;
    
    // Traditional services (10% fee)
    const tradFee = amount * 0.10;
    const tradReceive = amount - tradFee;
    
    // DiasporaConnect (1% fee)
    const dcFee = amount * 0.01;
    const dcReceive = amount - dcFee;
    
    // Savings
    const savings = tradFee - dcFee;
    const monthlySavings = savings * 4;
    const yearlySavings = savings * 12;
    
    // Update DOM with EUR format
    traditionalFee.textContent = tradFee.toFixed(2) + ' €';
    traditionalReceive.textContent = tradReceive.toFixed(2) + ' €';
    dconnectFee.textContent = dcFee.toFixed(2) + ' €';
    dconnectReceive.textContent = dcReceive.toFixed(2) + ' €';
    youSave.textContent = savings.toFixed(2) + ' €';
    monthlySave.textContent = monthlySavings.toFixed(2) + ' €';
    yearlySave.textContent = yearlySavings.toFixed(2) + ' €';
}

// Initialize calculator
updateCalculator();

// Smooth scroll for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        // In a real scenario, this could navigate or show a modal
        console.log('Action triggered');
    });
});

// ==================== SCROLL REVEAL ANIMATIONS ====================
ScrollReveal().reveal('.fade-in-up', {
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom',
    interval: 200
});

// Feature cards animation
ScrollReveal().reveal('.feature-card', {
    duration: 600,
    distance: '30px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100
});

// Solution benefit cards
ScrollReveal().reveal('.bg-white.bg-opacity-10.backdrop-blur-sm.rounded-xl', {
    duration: 700,
    distance: '40px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 150
});

// Impact stats animation
ScrollReveal().reveal('.bg-white.rounded-xl.p-8.text-center', {
    duration: 600,
    distance: '30px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 100
});

// Step circles animation
ScrollReveal().reveal('.step-circle', {
    duration: 600,
    distance: '40px',
    easing: 'ease-out',
    origin: 'bottom',
    interval: 150,
    scale: 0.8
});

// Calculator section
ScrollReveal().reveal('.savings-highlight', {
    duration: 800,
    distance: '50px',
    easing: 'ease-in-out',
    origin: 'bottom'
});

// Buttons animation
ScrollReveal().reveal('button', {
    duration: 600,
    distance: '20px',
    easing: 'ease-out',
    origin: 'bottom'
});

// Headings animation
ScrollReveal().reveal('h2, h3', {
    duration: 600,
    distance: '30px',
    easing: 'ease-out',
    origin: 'top',
    delay: 100
});
