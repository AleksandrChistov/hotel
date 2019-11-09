import 'nouislider';
import 'nouislider/distribute/nouislider.css';

const slider = document.getElementById('range');

noUiSlider.create(slider, {
    start: [5000, 10000],
    connect: true,
    step: 100,
    range: {
        'min': 0,
        'max': 16000
    }
});

slider.noUiSlider.on('slide', function() { 
  let [val1, val2] = slider.noUiSlider.get();
  $(".range-slider__number").text(new Intl.NumberFormat('ru-RU').format(+val1) + 
  "₽ - " + new Intl.NumberFormat('ru-RU').format(+val2) + "₽");
});