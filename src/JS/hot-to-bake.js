import Swiper from 'swiper';
import 'swiper/css';

export function initHowToBakeSlider() {
    new Swiper('[data-htb-swiper]', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
    });
}