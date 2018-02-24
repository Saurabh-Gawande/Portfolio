$('.skill').click(function(){
  $('.gen.hide').addClass('hidden');
  $('.skill-section').removeClass('hidden');

var $body = $('.skill-section.gen');
  var $bubble = $('<div>');
  $bubble.addClass('bubble');
  $bubble.css({
      'top':  Math.random() * ($body[0].clientHeight - 100),
      'left': Math.random() * ($body[0].clientWidth - 100)
    });
    $('.skill-section').append($bubble);

 $body.on('click','.bubble', function(){
      $(this).addClass('is-popping');
    });
    
  $body.on('transitionend','.bubble', function(){
    $(this).remove();
  });
  })
