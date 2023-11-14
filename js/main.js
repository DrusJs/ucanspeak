const swiper = new Swiper(".fit-tabs", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 65,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const swiperStudent = new Swiper(".students-swiper", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    spaceBetween: 60,
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
});

function fitButtonsAction(button, slide) {
    if (!button.classList.contains("active")) {
        document.querySelector(".fit-buttons__item.active").classList.remove("active")
        button.classList.add("active")
        swiper.slideTo(slide)
    }
}