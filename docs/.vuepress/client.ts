/*
 * @FilePath: client.ts
 * @Author: xitie2000
 * @Date: 2022-09-17 07:19:08
 * @Url: 
 */
import { defineClientConfig } from '@vuepress/client'
import Layout from './layouts/Layout.vue'

export default defineClientConfig({
  layouts: {
    Layout,
  },
})