import 'air-datepicker/src/js/air-datepicker'
import 'air-datepicker/dist/css/datepicker.css'

$('.filter-date-window').data('datepicker');

$('.filter-date-window').datepicker({
  inline: true,
  range: true,
  clearButton: true,
  applyButton2: true,
  language: {
    monthsShort: ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек']
  },
  dateFormat: 'd M',
  onSelect: function(formattedDate, date, inst) {
    const [date1, date2] = formattedDate.split(",");
    if (date2) {
      $("#filterDate").val(`${date1} - ${date2}`);
    } else {
      $("#filterDate").val(date1);
    }
  }
})

$('.filter-date__input').on('mousedown', function(e) {
	e.preventDefault();
});

$('.filter-date__input').on('click', function(e) {
	$('.filter-date-window').fadeToggle("dropdown-window_display_none");
});