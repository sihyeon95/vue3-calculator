import { Button } from '@/type/Button'

export const buttons: Button[] = [
  { label: '%', type: 'numberModifier', value: 'percent', color: 'gray' },
  { label: 'CE', type: 'manipulator', value: 'clearEntry', color: 'gray' },
  { label: 'C', type: 'manipulator', value: 'clear', color: 'gray' },
  { label: '&#x232B;', type: 'manipulator', value: 'delete', color: 'gray' },
  { label: '⅟x', type: 'numberModifier', value: 'fraction', color: 'gray' },
  { label: 'x<sup>2</sup>', type: 'numberModifier', value: 'square', color: 'gray' },
  {
    label: '<sup>2</sup>&radic;<span style="text-decoration:overline;">&nbsp;x&nbsp;</span>',
    type: 'numberModifier',
    value: 'root', color: 'gray'
  },
  { label: '&divide;', type: 'operator', value: 'divide', color: 'gray' },
  { label: '7', type: 'number', value: 7, color: 'white' },
  { label: '8', type: 'number', value: 8, color: 'white' },
  { label: '9', type: 'number', value: 9 , color: 'white'},
  { label: '&times;', type: 'operator', value: 'times', color: 'gray' },
  { label: '4', type: 'number', value: 4 , color: 'white'},
  { label: '5', type: 'number', value: 5 , color: 'white'},
  { label: '6', type: 'number', value: 6 , color: 'white'},
  { label: '-', type: 'operator', value: 'minus', color: 'gray' },
  { label: '1', type: 'number', value: 1, color: 'white' },
  { label: '2', type: 'number', value: 2, color: 'white' },
  { label: '3', type: 'number', value: 3, color: 'white' },
  { label: '+', type: 'operator', value: 'plus', color: 'gray' },
  { label: '&plusmn;', type: 'numberModifier', value: 'sign', color: 'white' },
  { label: '0', type: 'number', value: 0, color: 'white' },
  { label: '.', type: 'numberModifier', value: 'point', color: 'white' },
  { label: '=', type: 'flush', color: 'blue'}
]
