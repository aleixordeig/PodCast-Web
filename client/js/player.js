$(()=>{
  $('.fa-heart').on('click', ()=>{
    $('.fa-heart').toggleClass('active')
  })
  $('.fa-star').on('click', ()=>{
    $('.fa-star').toggleClass('active')
  })
  $('.fa-star.right').on('click', ()=>{
    $('.fa-star.right').toggleClass('active')
  })
})