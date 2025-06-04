import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export function initDonutShowcase() {
    new Swiper('[data-donut-swiper]', {
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 60,
        navigation: {
            nextEl: '[data-swipe-prev]',
            prevEl: '[data-swipe-next]',
        },
    });
}