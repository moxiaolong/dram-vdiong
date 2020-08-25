<template>
  <div class="theme-container">
    <div class="theme-vdoing-content">
      <span>404</span>
      <blockquote>{{ getMsg() }}</blockquote>
      <router-link to="/">返回首页</router-link>
    </div>
  </div>
<!--  <div>-->
<!--    <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="https://dra-m.com/" homePageName="回到我的主页"></script>-->
<!--  </div>-->
</template>

<script>
const msgs = [
  `这里什么都没有。`,
  `这是一个Four-Oh-Four.`,
  `人生的路就像穿越沙漠。七情六欲总像风沙一样让我们迷失方向。`,
  `你似乎来到了没有知识存在的荒原…`,
  `从前有座山，山里有座庙，庙里有个页面，现在找不到…`
]

export default {
  methods: {
    getMsg () {
      return msgs[Math.floor(Math.random() * msgs.length)]
    }
  }
}
</script>

<style lang="stylus" scoped>
.theme-vdoing-content
  margin 3rem auto
  padding 1.5rem
  span
    font-size 6rem
    color $accentColor
</style>
