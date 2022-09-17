/*
 * @FilePath: config.ts
 * @Author: xitie2000
 * @Date: 2022-09-17 03:54:15
 * @Url: 
 */
import sidebar from "./sidebar";
import navbar from "./navbar";
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { meting } from 'vuepress-plugin-meting'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'My Notes',
    description: '自用笔记网站',
    head: [
        ['script', {}, `
            !function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"JjDPBvNXNcI9wXx4",ck:"JjDPBvNXNcI9wXx4",autoTrack:true,hashMode:true});
        `],
        ['link', { rel: 'icon', href: '/favicon.png' }],
    ],
    theme: defaultTheme({
        logo: 'logo.png',
        repo: 'xitie2000/Notes-by-Vuepress',
        sidebar,
        navbar,
        editLink: false,
        contributors: false,
        lastUpdated: false,
    }),
    plugins: [
        searchPlugin({
            // 配置项
        }),
    ]
})