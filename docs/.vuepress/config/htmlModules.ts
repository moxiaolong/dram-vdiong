import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'

/** 插入自定义html模块 (可用于插入广告模块等)
 * {
 *   homeSidebarB: htmlString, 首页侧边栏底部
 *
 *   sidebarT: htmlString, 所有左侧边栏顶部
 *   sidebarB: htmlString, 所有左侧边栏底部
 *
 *   pageT: htmlString, 页面顶部
 *   pageB: htmlString, 页面底部
 *   pageTshowMode: string, 页面顶部-显示方式：未配置默认所有页面；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *   pageBshowMode: string, 页面底部-显示方式：未配置默认所有页面；'article' => 仅文章页①； 'custom' => 仅自定义页①
 *
 *   windowLB: htmlString, 全局窗口左下角②
 *   windowRB: htmlString, 全局窗口右下角②
 * }
 *
 * ①注：在.md文件front matter配置`article: false`的页面是自定义页，未配置的默认是文章页（首页除外）。
 * ②注：windowLB 和 windowRB：1.展示区块最大宽高200px*400px。2.请给自定义元素定一个不超过200px*400px的宽高。3.在屏幕宽度小于960px时无论如何都不会显示。
 */

// 底部 banner（文章页底部）— 暗紫 + 青绿神秘风，上下结构
const pageBanner =
  '<style>' +
    '.psy-banner{display:flex;flex-direction:column;align-items:stretch;box-sizing:border-box;width:100%;margin:28px 0 18px;padding:30px 36px 26px;border:1px solid #5a2dbd;border-radius:14px;background:linear-gradient(180deg,#3a1d6e 0%,#5a2dbd 60%,#6b2dbd 100%);text-decoration:none;color:#e8dcff;transition:border-color .25s ease,box-shadow .25s ease,transform .25s ease;}' +
    '.psy-banner:hover{border-color:#3ae8a6;box-shadow:0 8px 22px rgba(58,232,166,.28);transform:translateY(-2px);}' +
    '.psy-banner .psy-bn-h{font-size:24px;font-weight:800;color:#3ae8a6;padding:0 0 14px;margin-bottom:18px;border-bottom:1px solid rgba(58,232,166,.35);letter-spacing:1px;text-align:center;text-shadow:0 0 14px rgba(58,232,166,.4);}' +
    '.psy-banner .psy-bn-body{margin-bottom:20px;}' +
    '.psy-banner .psy-bn-lead{font-size:17px;font-weight:700;line-height:1.7;color:#3ae8a6;letter-spacing:.3px;text-align:center;text-shadow:0 0 10px rgba(58,232,166,.25);}' +
    '.psy-banner .psy-bn-sub{margin-top:10px;font-size:14px;line-height:1.75;color:#e8dcff;letter-spacing:.1px;text-align:center;opacity:.92;}' +
    '.psy-banner .psy-bn-cta{align-self:center;padding:12px 32px;font-size:14px;font-weight:700;color:#3a1d6e;background:#3ae8a6;border-radius:9px;letter-spacing:.8px;transition:background .25s ease,box-shadow .25s ease,transform .2s ease;}' +
    '.psy-banner:hover .psy-bn-cta{background:#2bd49a;box-shadow:0 4px 14px rgba(43,212,154,.55);transform:scale(1.04);}' +
    '@media (max-width:600px){' +
      '.psy-banner{padding:24px 20px 22px;}' +
      '.psy-banner .psy-bn-h{font-size:20px;}' +
      '.psy-banner .psy-bn-lead{font-size:15px;}' +
    '}' +
  '</style>' +
  '<a class="psy-banner" href="https://soulstation.club/psychoanalysis?entrance=dram" target="_blank" rel="noopener noreferrer">' +
    '<div class="psy-bn-h">精神分析专家团</div>' +
    '<div class="psy-bn-body">' +
      '<div class="psy-bn-lead">拉康晦涩难懂？和蒸馏的拉康人格细聊！</div>' +
      '<div class="psy-bn-sub">与弗洛伊德、荣格、拉康、齐泽克等多位精神分析专家人格深入对话，或群聊。</div>' +
    '</div>' +
    '<div class="psy-bn-cta">点击访问 →</div>' +
  '</a>'

const htmlModule: VdoingThemeConfig['htmlModules'] = {
  pageB: pageBanner,
  pageBshowMode: 'article',
}

export default htmlModule