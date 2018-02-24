var $body = $('.gen');

$('html').on('keydown', function (e) {
  var $bubble;
  
  if(e.key == ' ') {
    console.log($body[0].clientHeight);
    $('.main').addClass('hidden');
    $bubble = $('<div>');
    $bubble.addClass('bubble');
    $bubble.css({
      'top':  Math.random() * ($body[0].clientHeight - 100),
      'left': Math.random() * ($body[0].clientWidth - 100)
    });
    $('.skill').append($bubble);
  }
});