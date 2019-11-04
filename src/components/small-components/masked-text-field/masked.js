import IMask from 'imask';

const element = document.getElementById('masked-text-field');

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