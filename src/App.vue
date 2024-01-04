<template>
  <main class="calculator-app">
    <standard-calculator style="flex: 5" />
    <log-dashboard style="flex: 2" />
  </main>
</template>

<script setup lang="ts">
import StandardCalculator from './components/StandardCalculator.vue'
import LogDashboard from './components/LogDashboard/index.vue'
</script>

<style lang="scss">
.calculator-app {
  height: 100vh;
  display: flex;
}
</style>
