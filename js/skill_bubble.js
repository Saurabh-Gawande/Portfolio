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

jQuery(document).ready(function($) {
  var sArray = ["css", "html", "javascript", "jquery", "bootstrap", "git", "ps", "react", "ajax", "redux"];

  var uniqueRandoms = [];
  var numRandoms = sArray.length;

  function makeUniqueRandom(arr) {
      // refill the array if needed
      if (!uniqueRandoms.length) {
          for (var i = 0; i < numRandoms; i++) {
              uniqueRandoms.push(i);
          }
      }
      var index = Math.floor(Math.random() * uniqueRandoms.length);
      var val = uniqueRandoms[index];

      // now remove that value from the array
      uniqueRandoms.splice(index, 1);

      return arr[val];

  }

  $('.skill').click(function() {

      $('.gen.hide').addClass('hidden');
      $('.skill-section').removeClass('hidden');
      setInterval(function() {

          var $body = $('.skill-section.gen');
          var $bubble = $('<img src="./images/skills/' + makeUniqueRandom(sArray) + '.png">');
          $bubble.addClass('bubble');
          $bubble.css({
              'top': Math.random() * ($body[0].clientHeight),
              'left': Math.random() * ($body[0].clientWidth)
          });


          $('.skill-section').append($bubble);

          $('.bubble').animate({
              'opacity': '-=0.7'
          }, 3000, function() {
              $(this).remove()
          });
      }, 500);
  });
});