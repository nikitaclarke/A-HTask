// Hamburger JS Logic
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let navigationItems = document.querySelector('#navigation-items');

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const itemWidth = items[0].offsetWidth;

    function showItem(index) {
        carousel.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    function updateVisibility() {
        items.forEach((item, index) => {
            if (window.innerWidth <= 767) {
                item.style.display = index === currentIndex ? 'block' : 'none';
            } else {
                item.style.display = 'block';
            }
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        updateVisibility();
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateVisibility();
    }

    document.querySelector('.next-btn').addEventListener('click', nextItem);
    document.querySelector('.prev-btn').addEventListener('click', prevItem);

    setInterval(nextItem, 5000);

    // Initial setup
    updateVisibility();
});

// Update visibility on window resize
window.addEventListener('resize', function () {
    updateVisibility();
});