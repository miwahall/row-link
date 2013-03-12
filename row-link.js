$(function(){
	$('.row-link tr').children('td').not('.no-link').click(function() {
		window.location.href = $(this).parent('tr').find('a').attr('href');
	});
});