function swiperSlider() {
    const teamMain = document.querySelectorAll('[data-slider="data-slider"]');
    if (teamMain) {
        teamMain.forEach(slider => {
            let arrowLeft = slider.querySelector('.button-prev');
            let arrowRight = slider.querySelector('.button-next');

            let swiper = new Swiper(slider.querySelector('.about-restaurant-swiper'), {
                speed: 1000,

                slidesPerView: 1.315,
                spaceBetween: 25,
                loop: true,
                
                navigation: {
                    nextEl: arrowRight,
                    prevEl: arrowLeft
                }
            });
        });
    }
}
window.addEventListener('load', swiperSlider, false);