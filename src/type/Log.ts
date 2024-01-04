import type { Expression } from '@/type/Expression'

export class History {
	expression: Expression
	result: number
  
	constructor(expression: Expression, result: number) {
	  this.expression = expression
	  this.result = result
	}
  }