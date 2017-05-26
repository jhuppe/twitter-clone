$(document).ready(function(){
  $('#tweet-controls').hide(function() {
    $('.tweet-compose').on('click', function() {
      $('#tweet-controls').show(function(){
        $('.tweet-compose').animate({height: '+=2.5em'}, 'fast')
      });
    })
  });
});
