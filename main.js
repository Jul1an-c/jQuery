'use strict';

console.log('\'Allo \'Allo!');

$('.description').prepend('<div class="triangle"></div>');

// example 1
$('.button1').click(function() {
	$('.example1').before('<h1>Bienvenido a :</h1>');
	$('.example1').after('<h4>Gracias Por Dar CLICK :)</h1>');
});


// example 2
$('.button2').dblclick(function() {
	$('.example2').before('<h1>Bienvenido a :</h1>');
	$('.example2').after('<h4>Gracias Por Dar Doble CLICK :)</h1>');
});

// example 3
$('.button3').click(function() {
	$('.example3').toggle();
});

//example 4
$('.button4').click(function(){
	$('.box1').fadeToggle();
	$('.box2').fadeToggle('slow');
	$('.box3').fadeToggle('fast');
});

//example 5
$('.button5').click(function(){
	$('.contents').slideToggle('slow');
});

//example 6
$('.button6').click(function(){
	$('.slide-box').animate({left:'250px'});
});

//example 7
$('.button7').click(function(){
	$('.example7').append('<br>Tu has escrito: ' + $('.test').val());
});

$('.button8').click(function(){
    $('.example8').datepicker({
      format: 'yyyy-mm-dd', // Formato de la fecha
      autoclose: true, // Cierra automáticamente el calendario al seleccionar una fecha
      container: '.entry', // Contenedor donde se mostrará el calendario
      orientation: 'auto', // Orientación automática del calendario
      todayHighlight: true, // Destaca la fecha actual
      showButtonPanel: true // Muestra el panel de botones
    }).on('changeDate', function(e) {
      var selectedDate = e.format('yyyy-mm-dd');
      alert('Fecha seleccionada: ' + selectedDate);
    });
  
    // Personaliza el estilo del contenedor del calendario para centrarlo
    $('.datepicker').css({
      'margin': 'auto'
    });
});



//example 9
$('.button9').click(function(){
	$('p').remove('.italic');
});

//example 10
$('.button10').click(function(){
	$('.tog-box').toggleClass('slide-box');
});

//example 11
$('.button11').click(function(){
	$('.css-box').css({'background-color':'yellow'});

});

//example 12
$('.button12').click(function(){
	$('.size-box').width(150).height(150);

});

//example 13
$('.button13').click(function(){
	$('.box5').siblings().css({'background-color':'green'});
});

//example 14
$('.button14').click(function(){
    var imageUrl = "https://cdn.akamai.steamstatic.com/steam/apps/22380/capsule_616x353.jpg?t=1665072891"; 
    showImageInContainer(imageUrl);
});

function showImageInContainer(imageUrl) {
    $('.example14').html('<img src="' + imageUrl + '" alt="Imagen" style="max-width: 100%; height: auto;">');
}

//example 15
$('.button15').click(function(){
	showNotification('HOLA ESTO ES UNA NOTIFICACIÓN, DE SALUDO');
});

function showNotification(message) {
	if ('Notification' in window) {
		Notification.requestPermission().then(function(permission) {
			if (permission === 'granted') {
				var notification = new Notification(message);
			}
		});
	} else {
		alert(message);
	}
}






