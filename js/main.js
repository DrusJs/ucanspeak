const accordions = document.querySelectorAll(".accordeon-block")
accordions.forEach((el)=> {
    el.querySelector(".accordeon-head").addEventListener("click", (e)=>{
        let self = e.currentTarget;
        self.parentElement.classList.toggle("active")
        if (self.parentElement.classList.contains("active")) {
            self.nextElementSibling.style.maxHeight = +self.nextElementSibling.scrollHeight+20 + "px"
            self.nextElementSibling.style.padding = "0 50px 20px 10px";
            setTimeout(()=>{ self.nextElementSibling.style.maxHeight = "100%"}, 200)
        } else {                        
            self.nextElementSibling.style.maxHeight = +self.nextElementSibling.scrollHeight+20 + "px"
            setTimeout(()=>{ 
                self.nextElementSibling.style.maxHeight = "0";            
                self.nextElementSibling.style.padding = "0 50px 0 10px";
            }, 200)
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
let swipeCount = 0;
let slidesCount = Math.floor(document.querySelector(".swiper-scroll").scrollWidth/document.querySelector(".swiper-scroll").clientWidth)-1;
function swipeBlock(isLeft, elem) {
    if (isLeft) {
        swipeCount = +swipeCount>0?swipeCount-1:0;
    } else {        
        swipeCount = swipeCount<slidesCount?swipeCount+1:slidesCount;
    }
    elem.parentElement.firstElementChild.scrollTo({
        top: 0,
        left: (document.querySelector(".rate-cards").clientWidth+50)*swipeCount,
        behavior: "smooth",
      })
}

function fitButtonsAction(button, slide) {
    if (!button.classList.contains("active")) {
        document.querySelector(".fit-buttons__item.active").classList.remove("active")
        button.classList.add("active")
        swiper.slideTo(slide)
    }
}

