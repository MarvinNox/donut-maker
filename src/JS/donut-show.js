import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initDonutShowcase() {
    new Swiper('.donut-showcase', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: false,
        scrollbar: false,
    });
}