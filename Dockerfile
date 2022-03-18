# Dockerfile
FROM node:16

RUN mkdir -p /home/server/app
WORKDIR /home/server/app
COPY package.json /home/server/app/package.json

# 安装
RUN npm set registry https://registry.npm.taobao.org
RUN npm i

# 拷贝项目代码
COPY . /home/server/app

# 设置时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

# 对外暴露可访问的端口
EXPOSE 7001

# 启动
CMD npm run start-container
