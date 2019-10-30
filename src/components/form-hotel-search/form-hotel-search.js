import 'air-datepicker'
import 'air-datepicker/dist/css/datepicker.css'

$('.datepicker-here').datepicker({
  // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
  minDate: new Date()
})

// Доступ к экземпляру объекта
$('.datepicker-here').data('datepicker')