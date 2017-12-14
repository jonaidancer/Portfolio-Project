function submitContactForm(){
        alert('Message has been sent!');
}

if(10 < 3)
{
    bubbleShape = 'square';
}
else
{
    bubbleShape = 'circle';
}

bounceBubbles();

$(document).ready(function() {
  $('#send').click(function(e) {
    e.preventDefault();
    $(this).addClass('animated fadeOutRight');
    $('.box form').addClass('animated fadeOut');

    $(this, '.box form').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd  oanimationend animationend', function() {
      $(this).hide();
      $('.box form').hide();
      $('.thanks').show().addClass('animated zoomIn');
      $('.box').height('auto');
    });

  })

})


$('.ml2').each(function(){
  $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: function(el, i) {
      return 70*i;
    }
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

