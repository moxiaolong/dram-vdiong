/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import {resolve} from 'path'
import {defineConfig4CustomTheme, UserPlugins} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块

export default defineConfig4CustomTheme<VdoingThemeConfig>({
    theme: 'vdoing', // 使用npm包主题
    // theme: resolve(__dirname, '../../vdoing'), // 使用本地主题

    locales: {
        '/': {
            lang: 'zh-CN',
            title: "Dra-M",
            description: '一些技术(前端、后端、运维)相关的经验、随想、资源收藏，和一些哲学相关随想。',
        }
    },
    // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

    // 主题配置
    themeConfig: {
        // 导航配置
        nav: [
            {text: '首页', link: '/'},
            {
                text: '技术',
                link: '/code/'
            },
            {
                text: '冥思',
                link: '/idea/'
            },
            {
                text: '哲学',
                link: '/philosophia/'
            },

            {
                text: '收藏',
                link: '/favorites/'
            },
            {
                text: '索引',
                link: '/archives/',
                items: [
                    {text: '分类', link: '/categories/'},
                    {text: '标签', link: '/tags/'},
                    {text: '归档', link: '/archives/'}
                ]
            }
        ],
        sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
        logo: '/img/logo.webp', // 导航栏logo
        repo: 'moxiaolong', // 导航栏右侧生成Github链接
        searchMaxSuggestions: 10, // 搜索结果显示最大数
        lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
        docsDir: 'docs', // 编辑的文件夹
        editLinks: false, // 启用编辑
        editLinkText: '编辑',

        //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

        // category: false, // 是否打开分类功能，默认true
        // tag: false, // 是否打开标签功能，默认true
        // archive: false, // 是否打开归档功能，默认true
        // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

        // bodyBgImg: [
        //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
        //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
        //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
        // ], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时每隔15秒换一张。
        // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0.1~ 1.0, 默认0.5
        // titleBadge: false, // 文章标题前的图标是否显示，默认true
        titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
            '/img/dragon/1.webp',
            '/img/dragon/2.webp',
            '/img/dragon/3.webp',
            '/img/dragon/4.webp',
            '/img/dragon/5.webp',
            '/img/dragon/6.webp',
            '/img/dragon/7.webp',
            '/img/dragon/8.webp',
            '/img/dragon/9.webp',
            '/img/dragon/10.webp',
            '/img/dragon/11.webp',
            '/img/dragon/12.webp',
            '/img/dragon/13.webp',
            '/img/dragon/14.webp',
            '/img/dragon/15.webp',
            '/img/dragon/16.webp',
            '/img/dragon/17.webp',
            '/img/dragon/18.webp',
            '/img/dragon/19.webp',
            '/img/dragon/20.webp',
            '/img/dragon/21.webp',
            '/img/dragon/22.webp',
            '/img/dragon/23.webp',
            '/img/dragon/24.webp',
            '/img/dragon/25.webp',
            '/img/dragon/26.webp',
            '/img/dragon/27.webp'
        ],
        // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

        // updateBar: { // 最近更新栏
        //   showToArticle: false, // 显示到文章页底部，默认true
        //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
        // },
        // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
        // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
        // pageButton: false, // 是否显示快捷翻页按钮，默认true

        // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
        sidebar: 'structuring',

        // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
        author: { // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
            name: '莫小龙', // 必需
            link: 'https://dra-m.com/' // 可选的
        },

        // 博主信息 (显示在首页侧边栏)
        blogger: {
            avatar: 'https://q1.qlogo.cn/g?b=qq&nk=975425198&s=640',
            name: '莫小龙',
            slogan: '保持理智，相信未来。'
        },

        // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
        social: { // 社交图标，显示于博主信息栏和页脚栏
            // iconfontCssFile: '//at.alicdn.com/t/font_1879460_0lacnxoigx9.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
            icons: [
                {
                    iconClass: 'icon-github',
                    title: 'Star我',
                    link: 'https://github.com/moxiaolong'
                },

                {
                    iconClass: 'icon-erji',
                    title: '有品位的歌单',
                    link: 'http://music.163.com/playlist?id=8444337'
                }
            ]
        },

        // 页脚信息
        footer: { // 页脚信息
            createYear: 2019, // 博客创建年份
            copyrightInfo: 'Dra-M | <a href="https://beian.miit.gov.cn/" target="_blank" style="font-weight:normal">冀ICP备2021002204号</a> ', // 博客版权信息，支持a标签
        },

        // 自定义hmtl(广告)模块
        htmlModules
    },

    // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]

    head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
        ['link', {rel: 'icon', href: '/img/logo.webp'}], //favicons，资源放在public文件夹
        // ['link', {
        //     rel: 'stylesheet',
        //     href: '//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
        // }], //favicons，资源放在public文件夹

        ['meta', {name: 'keywords', content: '后端技术,DragonMo,Dra-M,莫小龙'}],
        // ['meta', {name: 'baidu-site-verification', content: '7F55weZDDc'}],// 百度统计博主验证
        ['meta', {name: 'theme-color', content: '#7b074b'}], // 移动浏览器主题颜色
        ['script', {
            'data-ad-client': 'ca-pub-8621788234752924',
            defer: true,
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8621788234752924',
            crossorigin: "anonymous"
        }] // 移动浏览器主题颜色

    ],


    // 插件配置
    plugins: <UserPlugins>[

        'vuepress-plugin-baidu-autopush', // 百度自动推送

        // [
        //     'vuepress-plugin-baidu-tongji', // 百度统计
        //     {
        //         hm: baiduCode,
        //     },
        // ],

        // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
        'fulltext-search',

        // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
        // 'thirdparty-search': {
        //   thirdparty: [
        //     {
        //       title: '在MDN中搜索',
        //       frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
        //       behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
        //     },
        //     {
        //       title: '在Runoob中搜索',
        //       frontUrl: 'https://www.runoob.com/?s=',
        //     },
        //     {
        //       title: '在Vue API中搜索',
        //       frontUrl: 'https://cn.vuejs.org/v2/api/#',
        //     },
        //     {
        //       title: '在Bing中搜索',
        //       frontUrl: 'https://cn.bing.com/search?q=',
        //     },
        //     {
        //       title: '通过百度搜索本站的',
        //       frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
        //     },
        //   ],
        // },

        [
            'one-click-copy', // 代码块复制按钮
            {
                copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
                copyMessage: '复制成功', // default is 'Copy successfully and then paste it for use.'
                duration: 1000, // prompt message display time.
                showInMobile: false, // whether to display on the mobile side, default: false.
            },
        ],

        [
            'demo-block', // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
            {
                settings: {
                    // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
                    // cssLib: ['http://xxx'], // 在线示例中的css依赖
                    // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
                    jsfiddle: false, // 是否显示 jsfiddle 链接
                    codepen: true, // 是否显示 codepen 链接
                    horizontal: false, // 是否展示为横向样式
                },
            },
        ],
        [
            'vuepress-plugin-zooming', // 放大图片
            {
                selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
                options: {
                    bgColor: 'rgba(0,0,0,0.6)',
                },
            },
        ],
        // [
        //     'vuepress-plugin-comment', // 评论
        //     {
        //         choosen: 'gitalk',
        //         options: {
        //             clientID: 'a6e1355287947096b88b',
        //             clientSecret: 'f0e77d070fabfcd5af95bebb82b2d574d7248d71',
        //             repo: 'blog-gitalk-comment', // GitHub 仓库
        //             owner: 'xugaoyi', // GitHub仓库所有者
        //             admin: ['xugaoyi'], // 对仓库有写权限的人
        //             // distractionFreeMode: true,
        //             pagerDirection: 'last', // 'first'正序 | 'last'倒序
        //             id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        //             title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        //             labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        //             body:
        //                 '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
        //         },
        //     },
        // ],
        [
            '@vuepress/last-updated', // "上次更新"时间格式
            {
                transformer: (timestamp, lang) => {
                    return new Date(timestamp).toLocaleDateString();
                }
            },
        ],
        [
            'sitemap',
            {
                hostname: 'https://dra-m.com'
            }
        ]
    ],

    markdown: {
        lineNumbers: true,
        extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'], // 提取标题到侧边栏的级别，默认['h2', 'h3']
    },

    // 监听文件变化并重新构建
    extraWatchFiles: [
        '.vuepress/config.ts',
        '.vuepress/config/htmlModules.ts',
    ]
})
