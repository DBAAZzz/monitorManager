<script setup lang="ts">
const props = defineProps({
  item: {
    type: Object,
    required: true
  },
  isNest: {
    type: Boolean,
    default: false
  },
  basePath: {
    type: String,
    default: ''
  }
})

function hasChildren(children = []) {
  if (children.length == 0) return false
  return true
}
</script>

<template>
  <div>
    <template v-if="!hasChildren(item.childrenList)">
      <el-menu-item :index="item.path">
        <span>{{ item.name }}</span>
      </el-menu-item>
    </template>

    <el-sub-menu v-else :index="item.path" teleported>
      <template #title>
        <span :title="item.name">{{ item.name }}</span>
      </template>

      <sidebar-item
        v-for="childItem in item.childrenList"
        :key="childItem.path"
        :item="childItem"
        :base-path="childItem.path"
        :is-nest="true"
      />
    </el-sub-menu>
  </div>
</template>
