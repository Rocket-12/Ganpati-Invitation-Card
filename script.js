// Ganpati Invitation Interactive Features

document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    
    setTimeout(() => {
        container.style.transition = 'opacity 0.8s ease-in';
        container.style.opacity = '1';
    }, 100);

    // Add click effects to Ganesh image
    const ganeshImg = document.querySelector('.ganesh-img');
    if (ganeshImg) {
        ganeshImg.addEventListener('click', function() {
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
            
            // Add sparkle effect
            createSparkleEffect(this);
        });
    }

    // Add hover effects to contact numbers
    const contactElements = document.querySelectorAll('.contact');
    contactElements.forEach(contact => {
        contact.addEventListener('mouseenter', function() {
            this.style.color = '#d84315';
            this.style.transform = 'scale(1.05)';
        });
        
        contact.addEventListener('mouseleave', function() {
            this.style.color = '#5d4037';
            this.style.transform = 'scale(1)';
        });
    });

    // Add smooth scroll for internal links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add print functionality
    const printButton = createPrintButton();
    document.body.appendChild(printButton);

    // Add share functionality
    const shareButton = createShareButton();
    document.body.appendChild(shareButton);

    // Add countdown timer for the event
    const eventDate = new Date('2025-08-27T18:00:00');
    createCountdownTimer(eventDate);

    // Add responsive menu for mobile
    handleResponsiveLayout();
});

// Sparkle effect function
function createSparkleEffect(element) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.position = 'absolute';
    sparkle.style.fontSize = '20px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 1s ease-out forwards';
    
    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + rect.width / 2) + 'px';
    sparkle.style.top = (rect.top + rect.height / 2) + 'px';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

// Print button creation
function createPrintButton() {
    const button = document.createElement('button');
    button.innerHTML = '🖨️ प्रिंट करा';
    button.className = 'print-btn';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #ff9800;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', () => {
        window.print();
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 6px 12px rgba(0,0,0,0.3)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    });
    
    return button;
}

// Share button creation
function createShareButton() {
    const button = document.createElement('button');
    button.innerHTML = '📤 शेअर करा';
    button.className = 'share-btn';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: #4caf50;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        cursor: pointer;
        font-size: 16px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: all 0.3s ease;
    `;
    
    button.addEventListener('click', async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'गणपती आमंत्रण पत्रिका',
                    text: 'आपल्या लाडक्या बाप्पाच्या दर्शनासाठी आमंत्रण',
                    url: window.location.href
                });
            } catch (err) {
                console.log('Error sharing:', err);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                alert('लिंक कॉपी झाली!');
            });
        }
    });
    
    return button;
}

// Countdown timer
function createCountdownTimer(eventDate) {
    const countdownContainer = document.createElement('div');
    countdownContainer.className = 'countdown-timer';
    countdownContainer.style.cssText = `
        background: linear-gradient(135deg, #ff9800, #f57c00);
        color: white;
        padding: 15px;
        border-radius: 10px;
        text-align: center;
        margin: 20px 0;
        font-size: 1.1em;
    `;
    
    const countdownText = document.createElement('p');
    countdownText.innerHTML = 'बाप्पाच्या आगमनासाठी उरलेले दिवस: <span id="countdown">लोड होत आहे...</span>';
    
    countdownContainer.appendChild(countdownText);
    
    const content = document.querySelector('.invitation-content');
    content.insertBefore(countdownContainer, content.firstChild);
    
    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;
        
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            
            document.getElementById('countdown').textContent = `${days} दिवस ${hours} तास ${minutes} मिनिटेI have successfully created the `styles.css` file for the Ganpati invitation project. Now, I will create a JavaScript file to handle any potential interactivity or future enhancements.

<create_file>
<path>script.js</path>
<content>// JavaScript for future enhancements or interactivity
document.addEventListener('DOMContentLoaded', function() {
    console.log('Ganpati invitation loaded successfully!');
    // Additional interactivity can be added here
});
