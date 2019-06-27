// search toggle slide
$(document).ready(function() {
	$('.search-icon').click(function() {
		$('.search-box').slideToggle();
	})
	
	$('.close').click(function() {
		$('.search-box').slideToggle();
	})
});

// poll
$(document).ready(function() {
    $(".poll-container div a").click(function() {
        $(this).parent().animate({
           width: '+=15px'
        }, 500);

        $(this).prev().html(parseInt($(this).prev().html()) + 1);
        return false;
    });
});

//toggle button 
$(".toggle-text").click(function() { 
    if ($(this).text() == "Prikaži") { 
        $(this).text("Sakrij"); 
	} 
	else { 
        $(this).text("Prikaži"); 
    }; 
});


// initialize NanoGallery
// $(document).ready(function () {
// 	$("#bg-nanoGallery2").nanoGallery();
// });

// initialize WOW for element animation
new WOW().init();



// Validation - example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  // Fetch all the forms we want to apply custom Bootstrap validation styles to
	  var forms = document.getElementsByClassName('needs-validation');
	  // Loop over them and prevent submission
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();

