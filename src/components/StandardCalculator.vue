<template>
  <section class="calculator-view">
    <div class="calculator-expression">
      <p class="expression" v-html="expression.join(' ').trim()" />
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
import type { Button, Operator, Manipulator } from '@/type/Button'
import type { Expression } from '@/type/Expression'

const expression = ref<Expression>([''])
const statement = ref<string>('')
let result: number = 0
let operator: Operator | null = null
const {pushHistory} = useHistory()

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
  pushHistory(expression.value, result);
  statement.value = result.toString()
  expression.value = [result.toString()]
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
</script>

<style lang="scss" scoped>
.calculator-view {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
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
