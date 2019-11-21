import 'air-datepicker/src/js/air-datepicker'
import 'air-datepicker/dist/css/datepicker.css'
import './window-datepicker.styl'

$('.date-dropdown-window-cards-ui').data('datepicker');

$('.date-dropdown-window-cards-ui').datepicker({
  startDate: new Date('2019-08-08'),
  inline: true,
  range: true,
  clearButton: true,
  applyButton: true,
  onRenderCell: function(date, cellType) {
    if (date.getDate() === 8) {
      return {
        classes: 'date-dropdown-window-cards-ui__current'
      }
    }
    if (date.getDate() === 19) {
      return {
        classes: 'date-dropdown-window-cards-ui__19'
      }
    }
    if (date.getDate() === 23) {
      return {
        classes: 'date-dropdown-window-cards-ui__23'
      }
    }
    if (date.getDate() === 20 || date.getDate() === 21 || date.getDate() === 22) {
      return {
        classes: 'date-dropdown-window-cards-ui__20-22'
      }
    }
  },
  onSelect: function(formattedDate, date, inst) {
    const [date1, date2] = formattedDate.split(",");
      $("#dateDropFrom").val(date1);
      $("#dateDropTo").val(date2);
  }
})