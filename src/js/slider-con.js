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
                },

                breakpoints: {
                    414: {
                        slidesPerView: 1.315,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }
            });

            let swiperRestaurant = new Swiper(slider.querySelector('.restaurant-swiper'), {
                speed: 1000,

                slidesPerView: 1.315,
                spaceBetween: 20,
                loop: true,
                
                navigation: {
                    nextEl: arrowRight,
                    prevEl: arrowLeft
                },

                breakpoints: {
                    414: {
                        slidesPerView: 1.315,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2.29,
                        spaceBetween: 34
                    },
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    }
                }
            });
        });
    }
}
window.addEventListener('load', swiperSlider, false);