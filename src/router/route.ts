import { RouteRecordRaw } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Loading from '@/pages/loading.vue'

export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/pages/404.vue')
  }
]

export const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'layout',
    component: () => import(`@/pages/layout/index.vue`),
    redirect: { name: 'home' },
    children: [
      {
        path: '/home',
        name: 'home',
        component: defineAsyncComponent({
          loader: () => import(`@/pages/home/index.vue`),
          loadingComponent: Loading
        }),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/issueBoard',
        name: 'issueBoard',
        component: defineAsyncComponent({
          loader: () => import(`@/pages/issueBoard/index.vue`),
          loadingComponent: Loading
        }),
        meta: {
          title: 'issue 看板'
        }
      },
      {
        path: '/issueList',
        name: 'issueList',
        component: defineAsyncComponent({
          loader: () => import(`@/pages/issueList/index.vue`),
          loadingComponent: Loading
        }),
        meta: {
          title: 'issue 列表',
          permissions: ['editer']
        }
      },
      {
        path: '/apiError',
        name: 'apiError',
        component: defineAsyncComponent({
          loader: () => import(`@/pages/apiError/index.vue`),
          loadingComponent: Loading
        }),
        meta: {
          title: 'api 错误列表'
        }
      },
      {
        path: '/errorReport',
        name: 'errorReport',
        component: defineAsyncComponent({
          loader: () => import(`@/pages/errorReport/index.vue`),
          loadingComponent: Loading
        }),
        meta: {
          title: '错误报告'
        }
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]
