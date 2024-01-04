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
    <div class="content">
      <Transition name="slide-left" mode="out-in">
        <history-log :historys="[]" v-if="tabState === 'history'" class="content-item" />
      </Transition>
      <Transition name="slide-right" mode="in-out">
        <memory-log v-if="tabState === 'memory'" class="content-item" />
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import HistoryLog from './HistoryLog.vue'
import MemoryLog from './MemoryLog.vue'
const tabState = ref('history')
</script>

<style lang="scss" scoped>
.storage-view {
  padding: 8px 12px;
}
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

.content {
  position: relative;
  &-item {
    position: absolute;
    top: 0;
    left: 0;
  }
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.slide-right-enter-active,
.slide-left-enter-active {
  transition: all 0.5s ease-out;
}

.slide-right-leave-active,
.slide-left-leave-active {
  transition: all 0.1s ease-out;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

.slide-left-enter-from,
.slide-left-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
