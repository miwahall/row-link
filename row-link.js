$(function(){
	$('.row-link tr').children('td').not('.no-link').click(function() {
		window.location.href = $(this).find('a').attr('href');
	});
});