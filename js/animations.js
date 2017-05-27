$(document).ready(function(){
  $('time.timeago').timeago();
  console.log('This works.')
  var charCount = 140;
  var charCountColor = $('#char-count').css('color');

  $('#char-count').html(charCount);
  $('.tweet-actions').hide();

  $('#tweet-controls').css('display', 'none');

  tweetActionsInit();

  $('.tweet-compose').on('focus', function() {
    $(this).css('height', '5em')
    $('#tweet-controls').css('display', 'block');
      });

  $('.tweet-compose').on('keyup', function() {
    var textEnteredLength = $(this).val().length;
    var count = charCount - textEnteredLength;
    $('#char-count').html(count);


    if (count <= 10) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', charCountColor);
    }

    if (count <= 0) {
      $('#tweet-submit').prop('disabled', true)
    } else {
      $('#tweet-submit').prop('disabled', false)
    }

  });

  $('#tweet-submit').on('click', function() {
    var text = $('.tweet-compose').val();
    var clonedTweet = $('.tweet').first().clone();
    clonedTweet.find('.username').html('@theguardian')
    clonedTweet.find('.fullname').html('The Guardian')
    clonedTweet.find('.avatar').attr('src', 'img/alagoon.jpg')
    clonedTweet.find('.tweet-text').html(text)
    clonedTweet.find('.num-retweets').html('0')
    clonedTweet.find('.num-favorites').html('0')
    clonedTweet.find('.time').html($.timeago(new Date()));

    $('#stream').prepend(clonedTweet);
    tweetActionsInit();
  });

  $('.stats').hide();
  $('.reply').hide();

  function tweetActionsInit() {
    $('.tweet').mouseenter(function() {
      $(this).find('.tweet-actions').show();
    });

    $('.tweet').mouseleave(function() {
      $(this).find('.tweet-actions').hide();
    });

    $('.tweet').on('click', function() {
      $(this).find('.stats').slideDown(500).removeClass('active');
      $(this).find('.reply').slideDown(500).removeClass('active');
      $('.stats.active').slideUp(500);
      $('.reply.active').slideUp(500);
      $(this).find('.stats').slideDown(500).addClass('active');
      $(this).find('.reply').slideDown(500).addClass('active');
    });
  }

});
