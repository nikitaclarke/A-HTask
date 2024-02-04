// Hamburger JS Function
document.addEventListener('DOMContentLoaded', function () {
    let openHam = document.getElementById('openHam');
    let closeHam = document.getElementById('closeHam');
    let navigationItems = document.getElementById('navigation-items');
    let navbar = document.querySelector('.navigation-header');

    openHam.addEventListener('click', function () {
        navigationItems.classList.add('show-menu');
        closeHam.style.display = 'block';
        openHam.style.display = 'none';
        navbar.classList.add('mobile-nav');
    });

    closeHam.addEventListener('click', function () {
        navigationItems.classList.remove('show-menu');
        closeHam.style.display = 'none';
        openHam.style.display = 'block';
        navbar.classList.remove('mobile-nav');
    });

    // Slick Carousel
    $('.carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Update visibility on window resize
    window.addEventListener('resize', function () {
        $('.carousel').slick('refresh');
        if (window.innerWidth > 768) {
            navigationItems.classList.remove('show-menu');
            closeHam.style.display = 'none';
            openHam.style.display = 'block';
            navbar.classList.remove('mobile-nav');
        }
    });
});
