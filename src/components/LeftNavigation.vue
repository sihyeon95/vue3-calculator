<template>
  <teleport to="body">
    <transition name="slide">
      <section class="navigation" v-show="show" v-click-outside="() => emits('closeNavigation')">
        <div class="menus">
          <div class="navigation-group" v-for="{ title, items } in menus" :key="title">
            <h2>{{ title }}</h2>
            <ul>
              <li :class="{ active: item === selectedMenu }" v-for="item in items" :key="item">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <button class="setting">설정</button>
      </section>
    </transition>
  </teleport>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const menus = [
  { title: '계산기', items: ['표준', '공학용', '그래프', '프로그래머', '날짜 계산'] },
  {
    title: '변환기',
    items: ['통화 환율', '부피', '길이', '무게 및 질량', '온도', '에너지', '면적', '속도', '시간']
  }
]

const selectedMenu = ref('표준')
defineProps<{ show: boolean }>()
const emits = defineEmits(['closeNavigation'])
</script>

<style scoped lang="scss">
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  background-color: #f8f9fa;
  padding: 70px 0px 0px;
  box-sizing: border-box;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);

  &-group {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }

  .menus {
    overflow-y: auto;
    height: calc(100% - 78px);
  }

  .menu-item {
    font-size: 16px;
    padding: 10px 20px;
    width: 100%;
    height: 40px;
    display: block;
    cursor: pointer;
    &:hover {
      background-color: $g3;
    }
  }

  h2 {
    font-size: 14px;
    padding: 0 20px;
    margin-bottom: 12px;
  }

  li {
    @extend .menu-item;
    &:not(:last-child) {
      margin-bottom: 4px;
    }
    &.active {
      background-color: $g3;
      position: relative;
      &::before {
        content: '';
        display: block;
        widows: 2px;
        height: 40%;
        border: 2px solid $b1;
        border-radius: 4px;
        position: absolute;
        left: 5px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  hr {
    opacity: 0.2;
    margin: 12px 0;
  }

  .setting {
    @extend .menu-item;
    border: none;
    text-align: left;
    margin-bottom: 12px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
