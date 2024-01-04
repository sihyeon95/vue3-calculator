import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Expression } from '@/type/Expression'
import type { History } from '@/type/Log'



const useHistoryStore = defineStore('history', () => {
  const historys = ref<History[]>([])

  function pushHistory(expression: Expression, result: number) {
    historys.value.push({ expression, result })
  }

  return {historys, pushHistory}
})

export default useHistoryStore
