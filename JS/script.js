$(document).ready(function(){
	$('.countdown-section').backstretch([
      "images/backgrounds/1.jpg",
      "images/backgrounds/2.jpg",
      "images/backgrounds/3.jpg"
  ], {duration: 3000, fade: 750});

	$('#days').countdown('2016/10/10', function(event) {
   		$(this).html(event.strftime('%-D'));
 	});

	$('#hours').countdown('2020/10/10', function(event) {
   		$(this).html(event.strftime('%-H'));
 	});

	$('#minutes').countdown('2020/10/10', function(event) {
   		$(this).html(event.strftime('%-M'));
 	});

	$('#seconds').countdown('2020/10/10', function(event) {
   		$(this).html(event.strftime('%-S'));
 	});


});
	

