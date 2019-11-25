import '../small-components/text-field/text-field.styl'
import '../small-components/radio-buttons/radio.styl'
import '../small-components/toggle/toggle-block.styl'
import '../small-components/buttons/buttons.styl'
import './form-reg.styl'
import IMask from 'imask';

const element = document.getElementById('maskedTextFormReg');

IMask(element, {
  mask: Date,
  pattern: 'd.`m.`Y',
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      from: 1900,
      to: 2010,
    }
  },
});