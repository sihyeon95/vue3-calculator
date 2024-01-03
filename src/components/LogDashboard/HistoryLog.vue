<template lang="html">
  <div>
    <p v-if="historys.length === 0">아직 기록이 없음</p>
    <div v-else class="sidebar" v-for="(history, index) in historys" :key="index">
      <p class="expression">{{ history.expression }}</p>
      <p class="statement">{{ history.statement }}</p>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Viewer {
  expression: string
  statement: string
}
interface Props {
  historys: Viewer[]
}
defineProps<Props>()
</script>
<style lang="scss"></style>
