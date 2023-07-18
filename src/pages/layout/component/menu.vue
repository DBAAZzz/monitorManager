<script setup lang="ts">
import SidebarItem from './SidebarItem.vue'
import { computed, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { menuType } from './type'
const route = useRoute()

const activeMenu = computed(() => {
  const path = route.path
  let activePath = path
  return activePath
})

const childrenList = reactive<menuType[]>([
  {
    name: '用户中心',
    id: 1,
    path: '/user',
    childrenList: [
      {
        name: '用户列表',
        id: 2,
        path: '',
        childrenList: [
          {
            name: '测试',
            id: 3,
            path: '/home',
            childrenList: []
          }
        ]
      }
    ]
  },
  {
    name: '异常监控',
    id: 4,
    path: '/activaty',
    childrenList: [
      {
        name: 'issue 看板',
        id: 5,
        path: '/issueBoard',
        childrenList: []
      },
      {
        name: 'issue 列表',
        id: 6,
        path: '/issueList',
        childrenList: []
      },
      {
        name: 'api 请求错误列表',
        id: 7,
        path: '/apiError',
        childrenList: []
      },
      {
        name: '错误报告',
        id: 8,
        path: '/errorReport',
        childrenList: []
      }
    ]
  }
])
</script>

<template>
  <el-row class="menu">
    <el-col class="menu-col">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        text-color="#fff"
        mode="vertical"
        :unique-opened="true"
        :default-active="activeMenu"
        :collapse-transition="false"
        router
      >
        <sidebar-item v-for="(route, index) in childrenList" :key="index" :item="route" :base-path="route.path"> </sidebar-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
@charset "UTF-8";
.menu {
  width: 200px;
  height: 100%;
  flex-shrink: 0;
  background: #545c64;
  :deep(.el-menu) {
    border-right: none;
  }
  &-col {
    width: 100%;
  }
}
a {
  color: #fff;
  text-decoration: none;
}
.link {
  display: block;
  width: 100%;
}
</style>
