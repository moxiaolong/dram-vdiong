#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build          # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'dra-m.com' >CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:moxiaolong/moxiaolong.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://moxiaolong:${GITHUB_TOKEN}@github.com/moxiaolong/moxiaolong.github.io.git
  git config --global user.name "moxiaolong"
  git config --global user.email "975425198@qq.com"
fi
git init
git add -A
git commit -m "${msg}"
echo "上传github开始"
git push -f $githubUrl master:master # 推送到github
echo "上传github完成"
# deploy to coding
if [ -z "$CODING_TOKEN" ]; then # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:moxiaolong/dram/dram.git
else
  codingUrl=https://JPzWHIuoAv:${CODING_TOKEN}@e.coding.net/moxiaolong/dram/dram.git
fi
echo "上传coding开始"
git push -f $codingUrl master # 推送到coding
echo "上传coding完成"

cd -
rm -rf docs/.vuepress/dist
