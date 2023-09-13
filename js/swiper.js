const swiperMv = new Swiper ('.swiper-mv', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    slidesPerView: 1,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    speed: 3000,
});