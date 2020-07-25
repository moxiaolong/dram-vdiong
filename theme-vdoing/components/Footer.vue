<template>
    <div class="footer">
        <div class="icons" v-if="social && social.icons">
            <a
                    :href="item.link"
                    :title="item.title"
                    :class="['iconfont', item.iconClass]"
                    v-for="(item, index) in social.icons"
                    :key="index"
                    target="_blank"
            >
            </a>
        </div>

        <a-player :options="options"/>

        <script src="../../live2d/autoload.js"></script>
        <!--Vdoing主题遵循MIT协议，完全开源且免费。如果您对主题的修改并不大，希望您保留主题的链接。-->
        Theme by <a href="https://github.com/xugaoyi/vuepress-theme-vdoing" target="_blank" title="本站主题">Vdoing</a>
        <template v-if="footer">
            | Copyright © {{ footer.createYear }}-{{ new Date().getFullYear() }}
            <span v-html="footer.copyrightInfo"></span>
        </template>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                options: {
                    fixed: true,
                    theme: "#7b074b",
                    lrcType: 3,
                    order: "random",
                    audio: [
                        {
                            name: '热河2015现场版',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhtMnpDbVR1RFdDVXN2TXc/ZT1iT2RjY3M=.mp3',
                            cover: '../../music/热河.jpg',
                        },
                        {
                            name: '和你在一起',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhmeF9BSkNjSDFRZ3JPZFE/ZT0yeVRTd2c=.m4a',
                            cover: '../../music/工体东路没有人.jpg',
                        },
                        {
                            name: '鸵鸟&天空之城&我们不能失去信仰(iO版)',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODgyX1lNbjJWYWNCaGo1SkE/ZT1RdmtqVGY=.mp3',
                            cover: '../../music/李志.jpg',
                        },
                        {
                            name: '这个世界会好吗 (相信未来版)',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODgzUVJhWVgzTFI4VllxY0E/ZT1Bb0hScnI=.flac',
                            cover: '../../music/李志.jpg',
                        },

                        {
                            name: '杭州&我们不能失去信仰',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODg1Tjh0azlFWTU2WS1Tb0E/ZT1lWmVDTWg=.flac',
                            cover: '../../music/李志.jpg',
                        },
                        {
                            name: '暧昧',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhjMFBMSWhNQldQaHRJRGc/ZT0xMlloZ2U=.m4a',
                            cover: '../../music/工体东路没有人.jpg',
                        }, {
                            name: '定西(2014i／O版)',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhraFpuaVJINFZYbnlxdWc/ZT1yTHpZajA=.mp3',
                            cover: '../../music/李志.jpg',
                        }, {
                            name: '山阴路的夏天',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhlbzZiT3BobEdtYjh4TWc/ZT0ybHRDV3E=.mp3',
                            cover: '../../music/李志.jpg',
                        },
                        {
                            name: '卡夫卡',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhoM3p5XzVWd0xuS3lfM3c/ZT05NlVhVWg=.m4a',
                            cover: '../../music/工体东路没有人.jpg',
                        },

                        {
                            name: '下雨&董卓瑶&忽然(IO版).mp3',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODg0THRiTnIyQUJPWFVRZHc/ZT1WNDM4ano=.mp3',
                            cover: '../../music/李志.jpg',
                        },
                        {
                            name: '被禁忌的游戏',
                            artist: '南京市民李先生',
                            url: 'https://onedrive.gimhoy.com/1drv/aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBc2w4OEN4aU5uZ3BqODhnRTQzcHR2Q0NBNWhabFE/ZT1HdENXSEU=.m4a',
                            cover: '../../music/工体东路没有人.jpg',
                        }

                    ]
                }
            }
        },

        computed: {
            social() {
                return this.$themeConfig.social
            }
            ,
            footer() {
                return this.$themeConfig.footer
            }
        }
    }
</script>

<style lang='stylus'>
    // $mobileSidebarWidth = $sidebarWidth * 0.82

    .footer
        padding 5rem 1.5rem 2.5rem
        text-align center
        color #666
        box-sizing border-box
        font-size .85rem
        transition all .2s ease

        .icons
            margin-bottom 12px

            .iconfont
                padding 0 10px
                font-size 1.3rem

        a
            color inherit

            &:hover
                color $accentColor

    @media (min-width: ($MQMobile + 1px))
        .sidebar-open .footer
            width auto
            padding-left ($sidebarWidth + 1.5rem)

    @media (min-width 1520px)
        .have-rightmenu .footer
            padding-right ($rightMenuWidth + 1.5rem)

    .no-sidebar .footer
        width auto
        padding-left 1.5rem

</style>
