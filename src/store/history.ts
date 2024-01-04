import type { Expression } from '@/type/Expression'
import { defineStore } from 'pinia'
import { ref } from 'vue'

class History {
  expression: Expression
  result: number

  constructor(expression: Expression, result: number) {
    this.expression = expression
    this.result = result
  }
}

const useHistoryStore = defineStore('history', () => {
  const history = ref<History[]>([])

  function pushHistory(expression: Expression, result: number) {
    history.value.push({ expression, result })
  }

  return {history, pushHistory}
})

export default useHistoryStore
