<template>
  <div class="search-input">
    <span class="label">{{ label }}：</span>
    <el-input
      v-model="InputValue"
      :placeholder="placeholder"
      @change="changeValue('change', $event)"
      @input="changeValue('input', $event)"
    ></el-input>
  </div>
</template>

<script lang="ts" setup>
import { isString } from '@vue/shared'
import { ref } from 'vue'

type funType = 'change' | 'input'

defineProps({
  label: {
    type: String,
    required: false,
    default: '标签页'
  },
  placeholder: {
    type: String,
    required: false,
    default: '请输入内容'
  },
  value: {
    type: String,
    default: ''
  }
})

const emit = defineEmits({
  inputFunc: (value: string) => isString(value),
  changeFunc: (value: string) => isString(value)
})

let InputValue = ref('')

let changeValue = (emitName: funType, value: any): void => {
  if (emitName == 'change') {
    emit('changeFunc', value)
  } else if (emitName == 'input') {
    emit('inputFunc', value)
  }
}
</script>

<style lang="scss" scoped>
@charset "UTF-8";
.search-input {
  display: inline-block;
  margin: 0 15px 15px 0;
  .label {
    font-size: 14px;
    color: #666;
  }
}
.el-input {
  width: auto;
}
.el-input__inner {
  width: auto;
}
</style>
