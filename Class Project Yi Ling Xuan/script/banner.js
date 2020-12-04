var swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    speed: 3000,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
})