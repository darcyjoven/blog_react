/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-15 14:16:52
 * @FilePath: /blog_react_js/src/demodata.js
 * @Descripti第一
 */

/**
 * 文章
 */
const article1 = {
    id: 1,
    createTime: new Date(),
    modidyTime: new Date(),
    link: "1st",
    title: "这是我的第一篇文章!",
    description:
"## 这是一个示范文章，不包含代码\
## 这是一个标题\
- 这是列表\
- 列表2\
1. 有序列表\
2. 列表2\
> 这是新列表\
> 列表",
    imgs: "https://upload-images.jianshu.io/upload_images/20081468-2bfffb0d6729cb25.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/591/format/webp",
    autor: "darcy",
    views: 2,
    forwards: 3,
    comments: 2,
    expanded: false,
}
const article2 = {
    id: 2,
    createTime: new Date(),
    modidyTime: new Date(),
    link: "2st",
    title: "这是我的第二篇文章!",
    description: 
"## 这是一个示范文章，不包含代码\
## 这是一个标题\
- 这是列表\
- 列表2\
1. 有序列表\
2. 列表2\
> 这是新列表\
> 列表\
![](https://upload-images.jianshu.io/upload_images/20081468-2bfffb0d6729cb25.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/591/format/webp)",
    imgs: "https://upload-images.jianshu.io/upload_images/20081468-a45e8701fd35db9f.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/762/format/webp",
    autor: "darcy",
    views: 2,
    forwards: 3,
    comments: 2,
    expanded: false,
}
export const StoreDemo = {
    article: [article1,article2]
}


/**
 * 文章
 */
 
/**
 * 文章内容
 */
const articleText=[{id:1,text:`### ssa 
### as d
- a
- b
- c
1. as
2. asd
3. as 
> asas
> aasd
![](https://upload-images.jianshu.io/upload_images/20081468-2bfffb0d6729cb25.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/591/format/webp)`
},{
        id:2,
        text:`### ssa 
### as d
- a
- b
- c
1. as
2. asd
3. as 
> asas
> aasd

![](https://upload-images.jianshu.io/upload_images/20081468-2bfffb0d6729cb25.jpg)`
    },
]
/**
 * 评论内容
 */
const commentRoom=[{
    articleid:1,
    comments:[{
        id:1,
        email:"darc@g.com",
        head:"https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text:"我是一级评论",
        time:"2020/01/25",
        super:0,
    },{
        id:2,
        email:"darc@g.com",
        head:"https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text:"我也是1级评论",
        time:"2020/01/26",
        super:0,
    },{
        id:3,
        email:"darc@g.com",
        head:"https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text:"我是2级评论",
        time:"2020/01/27",
        super:2,
    },{
        id:4,
        email:"darc@g.com",
        head:"https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text:"我也是2级评论",
        time:"2020/01/28",
        super:2,
    },
    ],
},{
    articleid:2,
    comments:[{
        id:1,
        email:"darc@g.com",
        head:"https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text:"我是唯一的二级评论",
        time:"2020/01/25",
        super:1,
    }
    ],
} 
]
/**
 * 头部菜单
 */
const headMenus = [
    {
        content: "首页",
        link: "#",
        id: 1,
    },
    {
        content: "会员",
        link: "#",
        id: 2,
    },
    {
        content: "发现",
        link: "#",
        id: 3,
    },
    {
        content: "等你来答",
        link: "#",
        id: 4,
    },
]
/**
 * 博客名称
 */
const blogNmae = {
    content: "有事情为什么不问问神奇海螺?",
    link: "http://www.darcyjoven.com",
    id: 1,
}

/**
 * 页脚信息
 */
const footerInfo = {
    link: "https://beian.miit.gov.cn/",
    content: "京 ICP 备 1888",
    id: 1,
    copyright: " © 2020 demo",
}

/**
 * 文章排序
 */
const articleOrder = [
    {
        content: "时间",
        link: "#",
        id: 1,
    },
    {
        content: "阅读人数",
        link: "#",
        id: 2,
    },
    {
        content: "评论",
        link: "#",
        id: 3,
    },
]

export{
    articleText,commentRoom,article2,headMenus,blogNmae,footerInfo,articleOrder
}