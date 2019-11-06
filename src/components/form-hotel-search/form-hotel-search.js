import 'air-datepicker'

$('.datepicker-here').datepicker({
  // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
  minDate: new Date()
})

// Доступ к экземпляру объекта
$('.datepicker-here').data('datepicker')