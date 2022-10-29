/*
 * @FilePath: sidebar.ts
 * @Author: xitie2000
 * @Date: 2022-09-17 04:22:31
 * @Url: 
 */
import {SidebarConfig} from "@vuepress/theme-default/lib/shared/nav";

export default [
    {
        text: '关于本站',
        link: '/',
    },
    {
        text: '高级分布式系统',
        collapsible: true,
        children: ['/高级分布式系统/1-绪论', '/高级分布式系统/2-进程线程及客户服务器'],
    },
] as SidebarConfig;