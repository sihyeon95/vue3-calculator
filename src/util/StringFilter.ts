import type { Expression } from "@/type/Expression";

export function expressionFilter(expression: Expression, separator: string = ' ') {
	return expression.join(separator).trim()
}