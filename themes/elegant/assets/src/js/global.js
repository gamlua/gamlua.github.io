const global = () => {
  // Xử lý nut search
  $('.elg-offcanvas__search-input input[name="q"]').on('input', function () {
    if ($(this).val() !== '') {
      $(this).next('.elg-offcanvas__search-input-eraser').removeClass('d-none')
    } else {
      $(this).next('.elg-offcanvas__search-input-eraser').addClass('d-none')
    }
  })

  $('.elg-offcanvas__search-input-eraser').click(function () {
    $(this).prev('input[name="q"]').val('')
    $(this).addClass('d-none')
  })

  // Back to top
  function handleBackToTopClass() {
    const scrollY = $(window).scrollTop()

    if (scrollY >= 600) {
      $('.elg-btn__back-to-top').removeClass('d-none')
    } else {
      $('.elg-btn__back-to-top').addClass('d-none')
    }
  }

  // Gọi khi cuộn
  $(window).on('scroll', handleBackToTopClass)

  // Gọi ngay khi load trang
  $(document).ready(handleBackToTopClass)

  $('.elg-btn__back-to-top').on('click', function (e) {
    e.preventDefault()
    $('html, body').animate({ scrollTop: 0 }, 300) // 300ms = 0.3s
  })
}

export default global
