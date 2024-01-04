<template lang="html">
  <div class="history-log">
    <p v-if="historys.length === 0">아직 기록이 없음</p>
    <div v-else v-for="(history, index) in historys" :key="index">
      <p class="expression text-g4" v-html="expressionFilter(history.expression, `    `) + ` = `" />
      <p class="statement text-bold">{{ history.result }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {History} from '@/type/Log'
import {expressionFilter} from '@/util/StringFilter'

interface Props {
  historys: History[]
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.history-log {
  text-align: right;
  width: 100%;

  .statement {
    font-size: 24px;
  }
}
</style>
