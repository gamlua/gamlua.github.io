import Swiper from 'swiper/bundle'

const ourTeam = () => {
  new Swiper('.elg-swiper__our-team', {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,

    autoplay: {
      delay: 4000, // 3000ms = 3 giây
      disableOnInteraction: false, // vẫn tiếp tục chạy sau khi người dùng tương tác
    },

    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 32,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    pagination: {
      el: '.elg-swiper__our-team-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.elg-swiper__our-team-button-next',
      prevEl: '.elg-swiper__our-team-button-prev',
    },
  })
}

export default ourTeam
