export type Operator = 'plus' | 'minus' | 'divide' | 'times'
export type NumberModifier = 'percent' | 'fraction' | 'square' | 'root' | 'sign' | 'point'
export type Manipulator = 'clear' | 'clearEntry' | 'delete'

export class Button {
  label: string
  type: 'number' | 'operator' | 'numberModifier' | 'manipulator' | 'flush'
  value?: any

  constructor(label: string, type: 'number' | 'operator' | 'numberModifier' | 'manipulator' | 'flush') {
    this.label = label
    this.type = type
  }
}

export class NumberButton extends Button {
  value: number

  constructor(label: string, value: number) {
    super(label, 'number')
    this.value = value
  }
}

export class OperatorButton extends Button {
  value: Operator

  constructor(label: string, value: Operator) {
    super(label, 'operator')
    this.value = value
  }
}

export class NumberModifierButton extends Button {
  value: NumberModifier

  constructor(label: string, value: NumberModifier) {
    super(label, 'numberModifier')
    this.value = value
  }
}

export class ManipulatorButton extends Button {
  value: Manipulator

  constructor(label: string, value: Manipulator) {
    super(label, 'manipulator')
    this.value = value
  }
}
