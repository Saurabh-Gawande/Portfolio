var moveForce = 20; // max popup movement in pixels
var rotateForce = 10; // max popup rotation in deg

$('.description').mousemove(function(e) {
    var docX = $(document).width();
    var docY = $(document).height();
    
    // var moveX = (e.pageX - docX/2) / (docX/2) * -moveForce;
    // var moveY = (e.pageY - docY/2) / (docY/2) * -moveForce;
    
    var rotateY = (e.pageX / docX * rotateForce*2) - rotateForce;
    var rotateX = ((e.pageY / docY * rotateForce*2) - rotateForce);
    
    $('.description')
        // .css('left', moveX+'px')
        // .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});

$('.description').mouseleave(function(e) {
  var rotateY =0;
    var rotateX = 0;
    $('.description')
        // .css('left', moveX+'px')
        // .css('top', moveY+'px')
        .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)');
});
