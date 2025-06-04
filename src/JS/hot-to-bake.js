import Swiper from 'swiper';
import 'swiper/css';

let swiperInstance = null;

function initSwiper() {
    swiperInstance = new Swiper('[data-htb-swiper]', {
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

function destroySwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
}

export function handleResponsiveSwiper() {
    const breakpoint = 1200;
    const width = window.innerWidth;

    if (width < breakpoint && !swiperInstance) {
        initSwiper();
    } else if (width >= breakpoint && swiperInstance) {
        destroySwiper();
    }
}
handleResponsiveSwiper();