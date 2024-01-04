<template>
  <section class="calculator-view">
    <LeftNavigation :show="showNavigation" />
    <header class="header">
      <button
        class="menu-button"
        @mousedown="
          (e) => {
            const { target } = e
            if (target === null) {
              return
            }
            ;(target as Element).classList.add('menu-button-clicked')
          }
        "
        @mouseup="
          (e) => {
            releaseMenuButton(e)
            showNavigation = !showNavigation
          }
        "
        @mouseleave="releaseMenuButton"
        ref="menuButton"
      >
        <div class="line"></div>
      </button>
      <h1 class="text-bold">표준</h1>
    </header>
    <div class="calculator-expression">
      <p class="expression text-g4" v-html="expressionFilter(expression)" />
      <p class="statement">{{ statement === '' ? 0 : statement }}</p>
    </div>
    <div class="button-wrapper">
      <button
        v-for="(button, idx) in buttons"
        :key="idx"
        v-html="button.label"
        @click="() => pressButton(button)"
        :class="button.color"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { buttons } from '@/constant/Calculator'
import useHistory from '@/store/history'
import { expressionFilter } from '@/util/StringFilter'
import type { Button, Operator, Manipulator } from '@/type/Button'
import type { Expression } from '@/type/Expression'
import LeftNavigation from './LeftNavigation.vue'

const showNavigation = ref(false)

//TODO: statement 입력 동작 디테일 맞추기
const expression = ref<Expression>([''])
const statement = ref<string>('')
let result: number = 0
let operator: Operator | null = null
const { pushHistory } = useHistory()

function pressButton(button: Button) {
  switch (button.type) {
    case 'number':
      statement.value += button.value
      expression.value[expression.value.length - 1] += button.value
      break
    case 'operator':
      if (expression.value[0] === '') {
        return
      }
      if (expression.value.length === 3 && expression.value[2] === '') {
        operator = button.value
        expression.value[1] = button.label
        return
      } else if (expression.value.length === 3) {
        flush()
      }
      result = parseInt(statement.value)
      operator = button.value
      statement.value = ''
      expression.value.push(button.label, '')
      break
    case 'numberModifier':
      // exclude function
      break
    case 'manipulator':
      manipulate(button.value)
      break
    case 'flush':
      flush()
      break
  }
}

function flush() {
  if (operator === null || statement.value === '') {
    return
  }
  result = calculate(result, operator, parseInt(statement.value))
  pushHistory(expression.value, result)
  statement.value = result === 0 ? '' : result.toString()
  expression.value = [result === 0 ? '' : result.toString()]
  operator = null
}

function manipulate(manipulator: Manipulator) {
  switch (manipulator) {
    case 'clear':
      statement.value = ''
      expression.value = ['']
      operator = null
      result = 0
      break
    case 'clearEntry':
      statement.value = ''
      expression.value.pop()
      break
    case 'delete':
      statement.value = statement.value.slice(0, -1)
      expression.value[expression.value.length - 1] = expression.value[
        expression.value.length - 1
      ].slice(0, -1)
  }
}

function calculate(firstOperand: number, operator: Operator, secondOperand: number) {
  switch (operator) {
    case 'plus':
      return firstOperand + secondOperand
    case 'minus':
      return firstOperand - secondOperand
    case 'divide':
      return firstOperand / secondOperand
    case 'times':
      return firstOperand * secondOperand
  }
}

function releaseMenuButton(e: MouseEvent) {
  const { target } = e
  if (target === null) {
    return
  }

  ;(target as Element).classList.remove('menu-button-clicked')
}
</script>

<style lang="scss" scoped>
.calculator-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
}

.header {
  display: flex;
  align-items: center;

  *:not(:last-child) {
    margin-right: 16px;
  }

  .menu-button {
    border: none;
    padding: 10px;
    width: 24px;
    height: 24px;
    box-sizing: content-box;
    border-radius: 8px;
    position: relative;
    z-index: 3;

    &:hover {
      background-color: $g3;
    }
    .line {
      width: 100%;
      height: 2px;
      border: solid 1px black;
      position: relative;
      &:before {
        content: '';
        position: absolute;
        top: -7px;
        left: -1px;
        width: calc(100% + 2px);
        height: 2px;
        border: solid 1px black;
      }
      &::after {
        content: '';
        position: absolute;
        top: 5px;
        left: -1px;
        width: calc(100% + 2px);
        height: 2px;
        border: solid 1px black;
      }
    }

    &.menu-button-clicked > .line {
      transform: scaleX(0.5);
    }
  }
}

.calculator-expression {
  min-height: 100px;
  text-align: end;
  margin-bottom: 16px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  .statement {
    font-size: 72px;
    font-weight: bold;
  }
}

.button-wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  flex: 4;
  button {
    text-align: center;
    padding: 18px 20px;
    border-radius: 8px;
    border: solid 1px $g3;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.05);
    cursor: pointer;
    font-size: 24px;
    height: 100%;
    width: 100%;

    &.white {
      background-color: $w1;
      background-color: darken($w1, 1%);
    }
    &.gray,
    .numberManipulator {
      background-color: $g2;
      &:hover {
        background-color: darken($g2, 1%);
      }
    }
    &.blue {
      background-color: $b1;
      color: $b2;
      &:hover {
        background-color: lighten($b1, 1%);
      }
    }
  }
}
</style>
