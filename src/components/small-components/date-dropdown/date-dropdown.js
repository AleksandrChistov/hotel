import 'air-datepicker/src/js/air-datepicker'
import 'air-datepicker/dist/css/datepicker.css'
import './window/window.styl'
import './date-dropdown.styl'
import './media.styl'

$('.date-dropdown-window').data('datepicker');

$('.date-dropdown-window').datepicker({
  inline: true,
  range: true,
  clearButton: true,
  applyButton: true,
  onSelect: function(formattedDate, date, inst) {
    const [date1, date2] = formattedDate.split(",");
      $("#dateDropFrom").val(date1);
      $("#dateDropTo").val(date2);
  }
})

$('.date-dropdown__input').on('mousedown', function(e) {
	e.preventDefault();
});

$('.date-dropdown__input').on('click', function(e) {
	$('.date-dropdown-window').fadeToggle("dropdown-window_display_none");
});