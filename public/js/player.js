$(()=>{
  $('.fa-heart').on('click', ()=>{
    $('.fa-heart').toggleClass('active')
  })
  $('.fa-star').on('click', ()=>{
    $('.fa-star').toggleClass('active')
  })
})

audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });