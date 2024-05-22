#!/bin/bash

# 提示用户输入提交消息
read -p "Enter your commit message: " commit_message

# 如果提交消息为空，则提示错误并退出
if [ -z "$commit_message" ]; then
  echo "Error: Commit message cannot be empty."
  exit 1
fi

# 添加所有更改
git add .

# 提交更改
git commit -m "$commit_message"

# 推送到远程仓库
git push

echo "success"
