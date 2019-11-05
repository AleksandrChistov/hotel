import 'air-datepicker/src/js/air-datepicker'

$('.date-dropdown__input').on('mousedown', function(e) {
	e.preventDefault();
});

$('.date-dropdown__input').on('click', function(e) {
	$('.date-dropdown-window').fadeToggle("dropdown-window_display_none");
});