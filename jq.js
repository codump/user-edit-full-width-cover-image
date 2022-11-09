// script //
$(window).load(function() {
	var getCoverPos = $('#coverRange').val(); 
	var val = ($('#coverRange').val() - $('#coverRange').attr('min')) / ($('#coverRange').attr('max') - $('#coverRange').attr('min'));
	$('#coverRange').css('background-image',
	  '-webkit-gradient(linear, left top, right top, '
	  + 'color-stop(' + val + ', #0bba28), '
	  + 'color-stop(' + val + ', #262626)'
	  + ')'
	);
});
// script //


$(document).ready(function(){

	// script //
	$('#covUrl').keydown(function(event){
		if(event.keyCode == 13) {
	  		event.preventDefault();
	  		$('#covUrl').trigger('change');
		}
  	});
  	$('#covUrl').on('change', function() {
		var getScr = $(this).val();
		if(getScr == '') {
	  		getScr = 'https://c.pxhere.com/photos/30/93/coding_code_programming_programming_language_source_code-89334.jpg!d';
		}
		$('#CoverImg').attr("src",getScr);
  	});

	$('#coverRange').on('input', function() {
		var getCoverPos = $(this).val(); 
		var val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
		$(this).css('background-image',
		  '-webkit-gradient(linear, left top, right top, '
		  + 'color-stop(' + val + ', #0bba28), '
		  + 'color-stop(' + val + ', #262626)'
		  + ')'
		);
		document.querySelector('#CoverImg').style.objectPosition = `50% ${getCoverPos}%`;
	});
	// script //

	// demo //
	$('#ex').on('click', function() {
		$('#covUrl').val('https://images.rawpixel.com/image_1000/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHgxMzY2MDU3LWltYWdlLWt3dnh4eDV4LmpwZw.jpg');
		$('#covUrl').trigger('change');
	});
	// demo //

});
