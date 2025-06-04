import Swiper from 'swiper';
import 'swiper/css';

export function initHowToBakeSlider() {
    new Swiper('.bake--list.swiper', {
        speed: 1500,
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });
}