- [ ] 数据抓出来
- [ ] 路由功能
- [ ] `fetch`功能
- [ ] 自动刷新列表功能
- [ ] 回顶部功能
- [ ] 排序
- [ ] `api`接口整理
- [x] reducer实现
- [x] 展开全文实现
- [ ] 展开和不展开合并成一个组件 
- [ ] 评论数据


- 👉一
    1. 微信
    2. 微博
    3. 邮箱
    4. github
    5. 打赏

- 👉二 `类别`
     
- 👉三 `标签云`

- 👉四 `推荐文章`
  
        最多七个推荐文章
- 页脚
        
    1. 备案信息
    2. 认识计时器
    3. 权限
# **API**  

||POST|DELETE|PUT|GET|
|:-|:-:|:-:|:-:|:-:|
|文章|√|√|√|√|
|类别|√||√|√|
|标签|√||√|√|
|标签链接|√|√|√|√|
|评论|√||√|√|
|推荐文章|√||√|√|
|博客简介|√|||√|
|备案信息|||||


# 数据结构
## 文章数据相关
### 文章
    id 自增长主键
    createTime 
    modidyTime
    public 
    type
    link

    title
    description
    imgs
    text
    author

    views
    likes
    style
    forwards

### 类别
    id
    name
    description

### 标签
    id
    name
    description

### 评论
    id
    author
    text
    createTime
    type
    article
    style 

### 标签链接
    label
    article 
    likes

## 外观相关
### 博客简介
        id
        expiryDate
        effectiveDate
        
        name
        link
        email
        github
        wechat
        weibo
        tips1
        tips2
        tips3
        description

### 推荐文章
    id
    expiryDate
    effectiveDate

    article

### 备案信息
    forRecord
    link

# react抽象类型
### 一个文章列表
```ts

```

# 路由解析
## 首页
    
- `/index` `/home` 直接跳转到`/`
- 显示的元素是文章列表
- 

## 文章详情
- `/article/:id`

## 时间先功能
- `/timeline`

## api 接口
- `/api`

## 公众号
- `/wechat`

## 关于
- `/about`



