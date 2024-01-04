export default class Statement {
	integer: string
	decimal: string
	sign: boolean
	mode: 'integer' | 'decimal'
  
	constructor(
	  integer: string = '',
	  decimal: string = '',
	  sign: boolean = true,
	  mode: 'integer' | 'decimal' = 'integer'
	) {
	  this.integer = integer
	  this.decimal = decimal
	  this.sign = sign
	  this.mode = mode
	}
	addDigit(digit: string) {
	  if (this.mode === 'integer') {
		this.integer = this.integer === '0' && digit === '0' ? '0' : this.integer + digit
	  } else {
		this.decimal += digit
	  }
	}
	removeDigit() {
	  if (this.mode === 'integer') {
		this.integer = this.integer.slice(0, -1)
	  } else if (this.decimal.length === 0) {
		this.mode = 'integer'
		this.integer = this.integer.slice(0, -1)
	  } else {
		  this.decimal = this.decimal.slice(0, -1)
	  }
	}
	setDecimalMode() {
	  this.mode = 'decimal'
	}
	toggleSign() {
	  this.sign = !this.sign
	}
	convertPercentage() {
	  if (this.mode === 'decimal') {
		this.decimal = `00${this.integer}`
		return
	  }
  
	  this.integer = '0'
	  this.mode = 'decimal'
	}
	toString() {
	  if (this.integer === '' || this.integer === '0') {
		return '0'
	  }
	  return (
		`${this.sign ? '' : '-'}${this.integer}` + (this.mode === 'decimal' && this.decimal !== '' ? `.${this.decimal}` : '')
	  )
	}
	deepCopy(): Statement {
	  return new Statement(this.integer, this.decimal, this.sign, this.mode)
	}
  }
  