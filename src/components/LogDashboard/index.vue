<template>
  <section class="storage-view">
    <div class="tabs">
      <button
        class="tab"
        :class="{ 'tab-active': tabState === 'history' }"
        @click="tabState = 'history'"
      >
        기록
      </button>
      <button
        class="tab"
        :class="{ 'tab-active': tabState === 'memory' }"
        @click="tabState = 'memory'"
      >
        메모리
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const tabState = ref('history')
</script>

<style lang="scss" scoped>
.sidebar {
  padding: 20px;
}
.tabs {
  margin-bottom: 20px;
  .tab {
    border: none;
    position: relative;
    font-size: 16px;
    padding-bottom: 10px;
    &:not(:last-child) {
      margin-right: 8px;
    }
    &-active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 100%);
      width: 20px;
      height: 4px;
      background-color: $b1;
      border-radius: 4px;
      animation: 0.5s 1 alternate fade;
    }
  }
}
</style>
