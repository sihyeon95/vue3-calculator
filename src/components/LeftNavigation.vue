<template>
  <teleport to="body">
    <transition name="slide">
      <section class="navigation" v-show="show" v-click-outside="() => emits('closeNavigation')">
        <div class="menus">
          <div class="menu-group">
            <h2>계산기</h2>
            <ul>
              <li class="active">표준</li>
              <li>공학용</li>
              <li>그래프</li>
              <li>프로그래머</li>
              <li>날짜 게산</li>
            </ul>
          </div>
          <div class="menu-group">
            <h2>변환기</h2>
            <ul>
              <li>통화 환율</li>
              <li>부피</li>
              <li>길이</li>
              <li>무게 및 질량</li>
              <li>온도</li>
              <li>에너지</li>
              <li>면적</li>
              <li>속도</li>
              <li>시간</li>
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

  .menu-group {
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
