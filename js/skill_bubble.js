// $('.skill').click(function(){

//   $('.gen.hide').addClass('hidden');
//   $('.skill-section').removeClass('hidden');

// var $body = $('.skill-section.gen');
//   var $bubble = $('<div>');
//   $bubble.addClass('bubble');
//   $bubble.css({
//       'top':  Math.random() * ($body[0].clientHeight),
//       'left': Math.random() * ($body[0].clientWidth)
//     });
//     $('.skill-section').append($bubble);

// // setTimeout(function(){
// // },2000)
// setTimeout(function(){
//   $body.on('click','.bubble', function(){
//       console.log(this);
//       $(this).addClass('is-popping');
//     });
//   },2000);
    
//   $body.on('transitionend','.bubble', function(){
//   $(this).remove();
//   });
//   })


jQuery(document).ready(function($){
  $('.skill').click(function(){

    $('.gen.hide').addClass('hidden');
      $('.skill-section').removeClass('hidden');
    setInterval(function(){
      var $body = $('.skill-section.gen');
  var $bubble = $('<div>');
  $bubble.addClass('bubble');
  $bubble.css({
      'top':  Math.random() * ($body[0].clientHeight),
      'left': Math.random() * ($body[0].clientWidth)
    });
    

    $('.skill-section').append($bubble);
       
      $('.bubble').animate({
          'opacity' : '-=0.7'
      }, 3000, function(){
          $(this).remove()
      }
      );
    },500);
  });
});
