import { Button } from '@/type/Button'

export const buttons: Button[] = [
  { label: '%', type: 'numberModifier', value: 'percent' },
  { label: 'CE', type: 'manipulator', value: 'clearEntry' },
  { label: 'C', type: 'manipulator', value: 'clear' },
  { label: '&#x232B;', type: 'manipulator', value: 'delete' },
  { label: '⅟x', type: 'numberModifier', value: 'fraction' },
  { label: 'x<sup>2</sup>', type: 'numberModifier', value: 'square' },
  {
    label: '<sup>2</sup>&radic;<span style="text-decoration:overline;">&nbsp;x&nbsp;</span>',
    type: 'numberModifier',
    value: 'root'
  },
  { label: '&divide;', type: 'operator', value: 'divide' },
  { label: '7', type: 'number', value: 7 },
  { label: '8', type: 'number', value: 8 },
  { label: '9', type: 'number', value: 9 },
  { label: '&times;', type: 'operator', value: 'times' },
  { label: '4', type: 'number', value: 4 },
  { label: '5', type: 'number', value: 5 },
  { label: '6', type: 'number', value: 6 },
  { label: '-', type: 'operator', value: 'minus' },
  { label: '1', type: 'number', value: 1 },
  { label: '2', type: 'number', value: 2 },
  { label: '3', type: 'number', value: 3 },
  { label: '+', type: 'operator', value: 'plus' },
  { label: '&plusmn;', type: 'numberModifier', value: 'sign' },
  { label: '0', type: 'number', value: 0 },
  { label: '.', type: 'numberModifier', value: 'point' },
  { label: '=', type: 'flush' }
]
