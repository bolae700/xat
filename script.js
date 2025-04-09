// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });

    // Add click animation
    document.querySelector('.chat-btn').addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => this.classList.remove('clicked'), 300);
    });

    // Dynamic status update
    const statusText = document.querySelector('.status-text');
    const statusMessages = [
        "❤️ Looking for true love ❤️",
        "🌟 Starry-eyed dreamer 🌟",
        "💔 Handle with care 💔",
        "🌹 Roses are red... 🌹"
    ];
    
    let currentStatus = 0;
    setInterval(() => {
        statusText.style.opacity = '0';
        setTimeout(() => {
            statusText.textContent = statusMessages[currentStatus];
            statusText.style.opacity = '1';
            currentStatus = (currentStatus + 1) % statusMessages.length;
        }, 500);
    }, 5000);
});
