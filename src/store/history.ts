import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Expression } from '@/type/Expression'
import type { History } from '@/type/Log'



const useHistoryStore = defineStore('history', () => {
  const historys = ref<History[]>([])

  function pushHistory(expression: Expression, result: number) {
    historys.value.push({ expression, result })
  }

  function removeAllHistory() {
    historys.value.splice(0, historys.value.length)
  }

  return {historys, pushHistory, removeAllHistory}
})

export default useHistoryStore
