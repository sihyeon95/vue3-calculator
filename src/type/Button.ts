export type Operator = 'plus' | 'minus' | 'divide' | 'times'
export type NumberModifier = 'percent' | 'fraction' | 'square' | 'root' | 'sign' | 'point'
export type Manipulator = 'clear' | 'clearEntry' | 'delete'
type Color = 'white' | 'gray' | 'blue'
type ButtonType = 'number' | 'operator' | 'numberModifier' | 'manipulator' | 'flush'

export class Button {
  label: string
  type: ButtonType
  value?: any
  color: Color

  constructor(label: string, type: ButtonType, color: Color) {
    this.label = label
    this.type = type
    this.color = color
  }
}

export class NumberButton extends Button {
  value: number

  constructor(label: string, value: number, color: Color) {
    super(label, 'number', color)
    this.value = value
  }
}

export class OperatorButton extends Button {
  value: Operator

  constructor(label: string, value: Operator, color: Color) {
    super(label, 'operator', color)
    this.value = value
  }
}

export class NumberModifierButton extends Button {
  value: NumberModifier

  constructor(label: string, value: NumberModifier, color: Color) {
    super(label, 'numberModifier', color)
    this.value = value
  }
}

export class ManipulatorButton extends Button {
  value: Manipulator

  constructor(label: string, value: Manipulator, color: Color) {
    super(label, 'manipulator', color)
    this.value = value
  }
}
