<template>
  <div class="search-input">
    <span class="label">{{ label }}：</span>
    <el-select v-model="InputValue" :placeholder="placeholder" @change="changeValue" :clearable="clearable">
      <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value"></el-option>
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { PropType, ref, watchEffect } from 'vue'
import { isString } from '@vue/shared'
import type { SelectOptions } from './type'
const props = defineProps({
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
  options: {
    type: Array as PropType<SelectOptions[]>,
    required: false,
    default: []
  },
  value: {
    type: String,
    default: ''
  },
  clearable: {
    type: Boolean,
    required: false,
    default: true
  }
})
const emit = defineEmits({
  changeFunc: (value: string) => isString(value)
})

let InputValue = ref<string | number>('')

let changeValue = (value: string): void => {
  emit('changeFunc', value)
}

watchEffect(() => {
  InputValue.value = props.value
})
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
