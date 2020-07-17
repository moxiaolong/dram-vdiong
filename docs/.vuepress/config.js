const nav = require('./config/nav.js');

module.exports = {
    title: "Dra-M",
    description: '一些技术，一些随想，一些资源收藏。', // 描述,以 <meta> 标签渲染到页面html中
    // base: '/vuepress-theme-vdoing/', // '/<github仓库名>/'， 默认'/'
    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        // ['script', {src: '/live2d/autoload.js'}],
        ['link', {rel: 'icon', href: '/img/logo.png'}], //favicons，资源放在public文件夹
        ['link', {rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'}], //favicons，资源放在public文件夹

        ['meta', {name: 'keywords', content: '后端技术,DragonMo,Dra-M,莫小龙'}],
        ['meta', {name: 'baidu-site-verification', content: '7F55weZDDc'}],// 百度统计博主验证
        ['meta', {name: 'theme-color', content: '#7b074b'}], // 移动浏览器主题颜色

        // 不蒜子访问量统计 (主题暂未使用到)
        // ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', async: 'async'}]

    ],
    markdown: {
        lineNumbers: true // 代码行号
    },

    // theme: 'vdoing', // 使用依赖包主题
    theme: require.resolve('../../theme-vdoing'), // 使用本地主题

    themeConfig: { // 主题配置
        nav,
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.png', // 导航栏logo
        repo: 'moxiaolong', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 更新的时间，及前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: false, // 启用编辑
        editLinkText: '编辑',

        // 以下配置是Vdoing主题改动的和新增的配置
        // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
        // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
        // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'
        // bodyBgImg: [
        //   '/img/house1.jpg',
        //   '/img/house2.jpg'
        // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
            '/img/dragon/1.png',
            '/img/dragon/2.png',
            '/img/dragon/3.png',
            '/img/dragon/4.png',
            '/img/dragon/5.png',
            '/img/dragon/6.png',
            '/img/dragon/7.png',
            '/img/dragon/8.png',
            '/img/dragon/9.png',
            '/img/dragon/10.png',
            '/img/dragon/11.png',
            '/img/dragon/12.png',
            '/img/dragon/13.png',
            '/img/dragon/14.png',
            '/img/dragon/15.png',
            '/img/dragon/16.png',
            '/img/dragon/17.png',
            '/img/dragon/18.png',
            '/img/dragon/19.png',
            '/img/dragon/20.png',
            '/img/dragon/21.png',
            '/img/dragon/22.png',
            '/img/dragon/23.png',
            '/img/dragon/24.png',
            '/img/dragon/25.png',
            '/img/dragon/26.png',
            '/img/dragon/27.png'
        ],

        sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

        // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
        // updateBar: { // 最近更新栏
        //   showToArticle: true, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },

        author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
            name: '莫小龙', // 必需
            link: 'https://dra-m.com/' // 可选的
        },
        blogger: { // 博主信息，显示在首页侧边栏
            avatar: 'https://q1.qlogo.cn/g?b=qq&nk=975425198&s=640',
            name: '莫小龙',
            slogan: '保持理智，相信未来。'
        },
        social: { // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1879460_0lacnxoigx9.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-github',
                    title: 'Star我',
                    link: 'https://github.com/moxiaolong'
                },

                {
                    iconClass: 'icon-music',
                    title: '有品位的歌单',
                    link: 'http://music.163.com/playlist?id=8444337'
                }
            ]
        },
        footer: { // 页脚信息
            createYear: 2019, // 博客创建年份
            copyrightInfo: '莫小龙', // 博客版权信息，支持a标签
        }
    },
    plugins: [ // 插件

        // ['vuepress-plugin-nprogress'],
        [
            'reading-progress'
            // {fixed: "bottom"}
        ],


        [
            require.resolve('../../vuepress-plugin-copyright'),
            {
                authorName: "Dra-M.com",
                noCopy: false, // the selected text will be uncopiable
                minLength: 100, // if its length is greater than 100
            },
        ],

        // [require('./plugins/love-me'), { // 鼠标点击爱心特效
        //   color: '#11a8cd', // 爱心颜色，默认随机色
        //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
        // }],

        ['thirdparty-search', { // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
            thirdparty: [ // 可选，默认 []
                {
                    title: '在Google搜索本站的',
                    frontUrl: 'https://www.google.com/search?q=opera+site%3Adra-m.com+'
                },
                {
                    title: '通过百度搜索本站的',
                    frontUrl: 'https://www.baidu.com/s?wd=site%3A%20dra-m.com%20'
                }
            ]
        }],

        'vuepress-plugin-baidu-autopush', // 百度自动推送

        ['one-click-copy', { // 代码块复制按钮
            copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
            copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
            duration: 1000, // prompt message display time.
            showInMobile: false // whether to display on the mobile side, default: false.
        }],
        ['demo-block', { // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            settings: {
                // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                // cssLib: ['http://xxx'], // 在线示例中的css依赖
                // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                jsfiddle: false, // 是否显示 jsfiddle 链接
                codepen: true, // 是否显示 codepen 链接
                horizontal: false // 是否展示为横向样式
            }
        }],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)'
                },
            },
        ],
        [
            'vuepress-plugin-baidu-tongji', // 百度统计
            {
                hm: 'a337e2eccf897d11d69e4e070df5a88f'
            }
        ],
        [
            'vuepress-plugin-comment', // 评论
            // {
            //   choosen: 'valine',
            //   options: {
            //     el: '#valine-vuepress-comment',
            //     appId: 'Your own appId',
            //     appKey: 'Your own appKey'
            //   }
            // }
            {
                choosen: 'gitalk',
                options: {
                    clientID: '83aaa6294c1c2c30b218',
                    clientSecret: '66a55feb8aaf1577eacbf94282e2d48e21e469ef',
                    repo: 'Dra-M-utterance', // GitHub 仓库
                    owner: 'moxiaolong', // GitHub仓库所有者
                    admin: ['moxiaolong'], // 对仓库有写权限的人
                    // distractionFreeMode: true,
                    pagerDirection: 'last', // 'first'正序 | 'last'倒序
                    id: "<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>", //  页面的唯一标识,长度不能超过50
                    title: "「评论」<%- frontmatter.title %>", // GitHub issue 的标题
                    labels: ["Gitalk", "Comment"], // GitHub issue 的标签
                    body: "页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>" // GitHub issue 的内容
                }
            }
        ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    const moment = require('moment') // https://momentjs.com/
                    return moment(timestamp).format('YYYY/MM/DD, H:MM:SS');
                }
            }
        ]
    ],
    // configureWebpack: {
    //   //webpack别名 如![Image from alias](~@alias/image.png)
    //   resolve: {
    //     alias: {
    //       '@alias': 'path/to/some/dir'
    //     }
    //   }
    // }
}
