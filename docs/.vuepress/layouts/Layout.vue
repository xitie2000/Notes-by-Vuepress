<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/xitie2000/BlogSource@latest/js/APlayer.min.css">
      <div id="aplayer"></div>
      <component :is="'script'" type="text/javascript" src="https://cdn.jsdelivr.net/gh/xitie2000/BlogSource@latest/js/APlayer.min.js"></component>
<div id="sakana-box" style="
    position: fixed;
    right: 0;
    bottom: 0;
    transform-origin: 100% 100%;
"></div>
        <component :is="'script'" type="text/javascript" src="https://cdn.jsdelivr.net/gh/xitie2000/BlogSource@latest/js/sakana.js"></component>

        <component :is="'script'" type="text/javascript" src="https://cdn.jsdelivr.net/gh/xitie2000/BlogSource@latest/js/musicp.js"></component>
        <component :is="'script'"
        async
        onload="initSakanaWidget()"
        src="https://cdn.jsdelivr.net/npm/sakana-widget@2.3.2/lib/sakana.min.js"
        ></component>
  <ParentLayout>

  </ParentLayout>
</template>

<style lang="css">
.my-footer {
  text-align: center;
}
.sakana-box {
  position: fixed;
  right: 0;
  bottom: 0;
  transform-origin: 100% 100%; /* 从右下开始变换 */
}
</style>
