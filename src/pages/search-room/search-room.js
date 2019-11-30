import '../../components/main/main.js'

import '../../components/header/header.js'

import '../../components/small-components/filter-date-dropdown/filter-date.js'
import '../../components/small-components/filter-date-dropdown/filter-date.styl'

import '../../components/small-components/dropdown/dropdown.js'

import '../../components/small-components/range-slider/range-slider.js'
import '../../components/small-components/range-slider/range-slider.styl'

import '../../components/small-components/checkbox-buttons/checkbox-buttons.styl'

import '../../components/small-components/rich-checkbox-buttons/rich-checkbox.styl'

import '../../components/small-components/expandable-checkbox-list/checkbox-list.js'
import '../../components/small-components/expandable-checkbox-list/checkbox-list.styl'

import '../../components/slider-room/slider-room.js'

import '../../components/small-components/pagination/pagination.styl'

import '../../components/footer/footer.styl'

import './search-room.styl'

import './media.styl'

$('.filter-btn').on('click', function(e) {
  $('.filter').toggleClass('filter_active');
  $('.filter__shadow').fadeToggle();
})

$('.filter__shadow').on('click', function(e) {
  $(this).fadeToggle();
  $('.filter').toggleClass('filter_active');
})

$('.filter-btn_lg').on('click', function(e) {
  $('.filter__shadow').fadeToggle();
  $('.filter').toggleClass('filter_active');
})