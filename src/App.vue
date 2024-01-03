<template>
  <main class="calculator-app">
    <standard-calculator style="flex: 2" />
    <log-dashboard style="flex: 1" />
  </main>
</template>

<script setup lang="ts">
import StandardCalculator from './components/StandardCalculator.vue'
import LogDashboard from './components/LogDashboard/index.vue'
</script>

<style scoped lang="scss">
.calculator-app {
  height: 100vh;
  display: flex;
}
</style>
