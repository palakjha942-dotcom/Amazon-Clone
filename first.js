// ==========================================
// HERO SLIDER JAVASCRIPT START
// ==========================================

// 1. सारे ज़रूरी एलिमेंट्स को सेलेक्ट करना
const heroSection = document.querySelector('.hero-section');
const prevBtn = document.querySelector('.control-prev');
const nextBtn = document.querySelector('.control-next');

// 2. आपकी तीनों इमेजेस की लिस्ट
const images = [
    'images/hero1.jpg',
    'images/hero2.jpg',
    'images/hero3.jpg'
];

// 3. ट्रैक रखना कि अभी कौन सी इमेज दिख रही है (0 मतलब पहली इमेज)
let currentIndex = 0;

// 4. इमेज बदलने का फंक्शन
function changeImage(index) {
    heroSection.style.backgroundImage = `url('${images[index]}')`;
}

// 5. Next (>) बटन के लिए इवेंट
nextBtn.addEventListener('click', (e) => {
    e.preventDefault(); // पेज को ऊपर रीलोड होने से रोकने के लिए
    
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0; // अगर आखिरी इमेज के बाद क्लिक करें, तो वापस पहली पर आ जाएं
    }
    changeImage(currentIndex);
});

// 6. Prev (<) बटन के लिए इवेंट
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // अगर पहली इमेज से पीछे जाएं, तो आखिरी पर पहुंच जाएं
    }
    changeImage(currentIndex);
});

// ==========================================
// HERO SLIDER JAVASCRIPT END
// ==========================================