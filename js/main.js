const swiper = new Swiper(".fit-tabs", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 65,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
        slideChange: function () {
          document.querySelector(".fit-buttons__item.active").classList.remove("active")
          document.getElementsByClassName("fit-buttons__item")[swiper.activeIndex].classList.add("active")
        },
    }
});

const swiperStudent = new Swiper(".students-swiper", {
    slidesPerView: 3,
    loop: true,
    centeredSlides: true,
    spaceBetween: 50,
    navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        220: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1401: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});
function fitButtonsAction(button, slide) {
    if (!button.classList.contains("active")) {
        document.querySelector(".fit-buttons__item.active").classList.remove("active")
        button.classList.add("active")
        swiper.slideTo(slide)
    }
}

const accordions = document.querySelectorAll(".accordeon-block")
accordions.forEach((el)=> {
    el.querySelector(".accordeon-head").addEventListener("click", (e)=>{
        // if (document.querySelector(".accordeon-block.active")) {
        //     document.querySelector(".accordeon-block.active").classList.remove("active")
        // }
        e.currentTarget.parentElement.classList.toggle("active")
        if (e.currentTarget.parentElement.classList.contains("active")) {
            e.currentTarget.nextElementSibling.style.maxHeight = +e.currentTarget.nextElementSibling.scrollHeight+20 + "px"
        } else {            
            e.currentTarget.nextElementSibling.style.maxHeight = "0px"
        }
    })
})

function openModal(id) {
    document.querySelector(`#${id}`).classList.add("active")
    document.body.classList.add("noscroll")
}

function closeModal(event) {
    if (event.target.classList.contains("modal-wrapper")) {
        document.querySelector('.modal-wrapper.active').classList.remove("active")
        document.body.classList.remove("noscroll")
    }
}

function swapSlideMobile(direction) {
    console.log(1);
    if (direction =="left") {
        swiper.slideTo(swiper.activeIndex+1)
    } else {
        swiper.slideTo(swiper.activeIndex-1)
    }
}