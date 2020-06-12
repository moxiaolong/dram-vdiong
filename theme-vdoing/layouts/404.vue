<template>
<!--  <div class="theme-container">-->
<!--    <div class="theme-vdoing-content">-->
<!--      <span>404</span>-->
<!--      <blockquote>{{ getMsg() }}</blockquote>-->
<!--      <router-link to="/">返回首页</router-link>-->
<!--    </div>-->
<!--  </div>-->
  <div>
    <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8" homePageUrl="https://dra-m.com/" homePageName="回到我的主页"></script>
  </div>
</template>

<script>
const msgs = [
  `这里什么都没有。`,
  `我是谁？我在哪？`,
  `这是一个Four-Oh-Four.`,
  `看来我们的链接坏掉了~`
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
