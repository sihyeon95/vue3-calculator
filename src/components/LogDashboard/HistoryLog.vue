<template lang="html">
  <div class="history-log">
    <p v-if="historys.length === 0" style="text-align: left;">아직 기록이 없음</p>
    <TransitionGroup v-else name="slide">
      <div class="historys" v-for="(history, index) in historys" :key="index">
        <p
          class="expression text-g4"
          v-html="expressionFilter(history.expression, `    `) + ` = `"
        />
        <p class="statement text-bold">{{ history.result }}</p>
      </div>
    </TransitionGroup>
  </div>
</template>
<script lang="ts" setup>
import { History } from '@/type/Log'
import { expressionFilter } from '@/util/StringFilter'

interface Props {
  historys: History[]
}
defineProps<Props>()
</script>
<style lang="scss" scoped>
.history-log {
  text-align: right;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;

  .historys:not(:first-child) {
    margin-bottom: 40px;
  }

  .statement {
    font-size: 24px;
    margin-top: 10px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
