<template>
  <section class="calculator-view">
    <div class="calculator-expression">
      <p class="expression">{{ expression }}</p>
      <p class="statement">{{ statement }}</p>
    </div>
    <div class="button-wrapper">
      <button
        v-for="({ label, type, value }, idx) in buttons"
        :key="idx"
        v-html="label"
        @click="() => pressButton(type, value)"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Button {
  label: string
  type: 'number' | 'operator'
  value?: number
}

const expression = ref('')
const statement = ref('0')

const buttons: Button[] = [
  { label: '%', type: 'operator' },
  { label: 'CE', type: 'operator' },
  { label: 'C', type: 'operator' },
  { label: '&#x232B;', type: 'operator' },
  { label: '⅟x', type: 'operator' },
  { label: 'x<sup>2</sup>', type: 'operator' },
  {
    label: '<sup>2</sup>&radic;<span style="text-decoration:overline;">&nbsp;x&nbsp;</span>',
    type: 'operator'
  },
  { label: '&divide;', type: 'operator' },
  { label: '7', type: 'number', value: 7 },
  { label: '8', type: 'number', value: 8 },
  { label: '9', type: 'number', value: 9 },
  { label: '&times;', type: 'operator' },
  { label: '4', type: 'number', value: 4 },
  { label: '5', type: 'number', value: 5 },
  { label: '6', type: 'number', value: 6 },
  { label: '-', type: 'operator' },
  { label: '1', type: 'number', value: 1 },
  { label: '2', type: 'number', value: 2 },
  { label: '3', type: 'number', value: 3 },
  { label: '+', type: 'operator' },
  { label: '&plusmn;', type: 'operator' },
  { label: '0', type: 'number' },
  { label: '.', type: 'number' },
  { label: '=', type: 'operator' }
]

function pressButton(type: 'number' | 'operator', value?: number) {
  console.log(type, value)
}
</script>

<style lang="scss">
.calculator-view {
  height: 100%;
  display: flex;
  flex-direction: column;
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
  flex: 2;
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
  }
}
</style>
