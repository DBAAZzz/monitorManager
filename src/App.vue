<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
let locale = zhCn
</script>

<template>
  <el-config-provider :locale="locale" size="default">
    <router-view />
  </el-config-provider>
</template>

<style></style>
