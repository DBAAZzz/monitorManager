import { defineStore } from 'pinia'
import { RouteRecordRaw } from 'vue-router'
import { asyncRoutes, staticRoutes } from '@/router/route'
import { filterAsyncRoutes } from '@/utils/handleRoutes'

export const useRouterStore = defineStore('routers', {
  state: () => ({
    count: 0,
    routes: <RouteRecordRaw[]>[]
  }),
  actions: {
    setCount(count: number): void {
      this.count = count
    },
    async setRoutes(permissions: Array<string>): Promise<RouteRecordRaw[]> {
      const finallyAsyncRoutes = filterAsyncRoutes([...asyncRoutes], permissions)
      this.routes = staticRoutes.concat(finallyAsyncRoutes)
      return this.routes
    }
  }
})
