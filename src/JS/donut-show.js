import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initDonutShowcase() {
    new Swiper('.donut-showcase', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 60,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}