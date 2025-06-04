import Swiper from 'swiper';
import 'swiper/css';

let swiperInstance = null;

export function initHowToBakeSlider() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1200 && !swiperInstance) {
    swiperInstance = new Swiper('.htw-swiper', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,
    });
  } else if (screenWidth >= 1200 && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener('load', initHowToBakeSlider);
window.addEventListener('resize', initHowToBakeSlider);
