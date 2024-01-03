<template>
  <main class="calculator-app">
    <standard-calculator></standard-calculator>
  </main>
</template>

<script setup lang="ts">
import StandardCalculator from './components/StandardCalculator.vue'
</script>

<style scoped lang="scss">
.calculator-app {
  height: 100vh;
  padding: 8px 12px;
}
</style>
