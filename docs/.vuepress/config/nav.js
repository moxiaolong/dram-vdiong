module.exports = [
  {text: '首页', link: '/'},
  {
    text: '技术',
    link: '/code/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    // items: [
    //   {text: '前端文章', items: [
    //     {text: 'JavaScript', link: '/pages/8143cc480faf9a11/'}, // 注意link结尾有斜杠和没有斜杠的区别
    //     {text: 'Vue', link: '/pages/802a1ca6f7b71c59/'},
    //   ]},
    //   {text: '学习笔记', items:[
    //     {text: '《JavaScript教程》笔记', link: '/note/javascript/'},
    //     {text: '《ES6 教程》笔记', link: '/note/es6/'},
    //     {text: '《Vue》笔记', link: '/note/vue/'},
    //     {text: '《TypeScript 从零实现 axios》', link: '/note/typescript-axios/'},
    //     {text: '小程序笔记', link: '/note/wx-miniprogram/'},
    //   ]}
    // ]
  },
  {
    text: '冥思',
    link: '/idea/',
    // items: [
    //   {text: 'HTML', link: '/pages/8309a5b876fc95e3/'},
    //   {text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
    // ]
  },

  // {
    // text: '其他',
    // link: '/other/',
    // items: [
    //   {text: '学习', link: '/pages/a8692ab3bdcb4588/'},
    //   {text: '面试', link: '/pages/aea6571b7a8bae86/'},
    //   {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
    //   {text: '友情链接', link: '/friends/'},
    // ]
  // },
  // {text: '关于', link: '/about/'},
  {
    text: '收藏',
    link: '/favorites/',
    // items: [
    //   {text: '网站', link: '/pages/url/'},
    //   {text: '资源', link: '/pages/resource/'}
    // ]
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]