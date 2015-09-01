$(document).ready(function() {
	  $('.sf-logo').fadeIn(3500, function() {
    $(this).fadeOut(1000, function() {
      $('.brought-by').fadeIn(1500, function() {
        $(this).fadeOut(1000, function() {
          $('.jquery-logo').fadeIn(1500, function() {
            $(this).fadeOut(1500, function() {
              $('.how-to').fadeIn(1000);
            });
          })
        })
      })
    })
  })
	
	  $('.ryu').mouseenter(function() {
	    $('.ryu-still').hide();
	    $('.ryu-ready').show();
	  })
	
	  .mouseleave(function() {
	    $('.ryu-ready').hide();
	    $('.ryu-still').show();
	  })
	
	  .mousedown(function() {
	    playHadouken();
	      $('.ryu-ready').hide();
	      $('.ryu-throwing').show();
	      $('.hadouken').finish().show()
	    .animate(
	      {'left': '1020px'},
	      500,
	      function() {
	        $(this).hide();
	        $(this).css('left', '520px');
	      }
	    );
	  })
	  
	  .mouseup(function() {
	  	$('.ryu-throwing').hide();
	  	$('.ryu-ready').show();
	  });
	
	  $('body').keydown(function(event) {
	      if (event.which == 88) {
	        $('.ryu-ready').hide();
	        $('.ryu-still').hide();
	        $('.ryu-throwing').hide();
	        $('.hadouken').hide();
	        $('.ryu-cool').show();
	      }
	    });
	
	    $('body').keyup(function(event) {
	        $('.ryu-still').show();
	        $('.ryu-cool').hide();
	    });
	
	  
	  function playHadouken () {
	  	$('#hadouken-sound')[0].volume = 0.5;
	  	$('#hadouken-sound')[0].load();
	  	$('#hadouken-sound')[0].play();
	  }
	
  

	
	
	});
  
	
	