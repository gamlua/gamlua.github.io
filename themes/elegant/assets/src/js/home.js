import Swiper from 'swiper/bundle'

const homePage = () => {
  new Swiper('.elg-banner', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.elg-banner .swiper-button-next',
      prevEl: '.elg-banner .swiper-button-prev',
    },
  })
}

export default homePage
