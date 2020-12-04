var swiper = new Swiper('.swiper-container-1', {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 3000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});