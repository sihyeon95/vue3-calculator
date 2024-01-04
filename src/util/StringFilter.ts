import type { Expression } from "@/type/Expression";

export function expressionFilter(expression: Expression) {
	return expression.join(' ').trim()
}