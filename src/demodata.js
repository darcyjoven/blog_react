/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-26 16:11:39
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
    article: [article1, article2]
}


/**
 * 文章
 */

/**
 * 文章内容
 */
const articleText = [{
    id: 1, text: `### ssa 
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
}, {
    id: 2,
    text: `### ssa 
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
const commentRoom = [{
    articleid: 1,
    comments: [{
        id: 1,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论1",
        time: "2020/01/25",
        like:10,
        super: 0,
        children: [{
            id: 2,
            email: "darc@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论1",
            time: "2020/01/25",
            like:9,
            super: 1,
        }, {
            id: 3,
            email: "darc@g.com12",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论2",
            time: "2020/01/25",
            like:1,
            super: 1,
        }, {
            id: 4,
            email: "darc@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论3",
            time: "2020/01/25",
            super: 1,
        }, {
            id: 5,
            email: "darc@g.com4",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论4",
            time: "2020/01/25",
            super: 1,
        }, {
            id: 6,
            email: "darc@g.com5",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论5",
            time: "2020/01/25",
            super: 1,
        }
        ]
    },
    {
        id: 7,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论2",
        time: "2020/01/25",
        super: 0,
        children: [{
            id: 8,
            email: "darc@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论",
            time: "2020/01/25",
            super: 1,
        }, {
            id: 9,
            email: "darc@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论",
            time: "2020/01/25",
            super: 1,
        }, {
            id: 10,
            email: "darc@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论",
            time: "2020/01/25",
            super: 1,
        }, {
            id: 11,
            email: "darc@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是2级评论",
            time: "2020/01/25",
            super: 1,
        }
        ]
    },
    {
        id: 12,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论3",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 13,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论4",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 14,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论5",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 15,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论6",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 16,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论7",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 17,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论8",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 18,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论9",
        time: "2020/01/25",
        super: 0,
        children: []
    },
    {
        id: 19,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论10",
        time: "2020/01/25",
        super: 0,
        children: []
    }
    ]
}, {
    articleid: 2,
    comments: [
        {
            id: 1,
            email: "wenzhang@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是一级评论1",
            time: "2020/01/25",
            super: 0,
            children: []
        },
        {
            id: 2,
            email: "wenzhang@g.com",
            head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
            text: "我是一级评论2",
            time: "2020/01/25",
            super: 0,
            children: []
        }
    ]
}]

/**
 * 评论内容
 */
const commentRoom2 = [{
    articleid: 1,
    comments: [{
        id: 1,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是一级评论",
        time: "2020/01/25",
        super: 0,
    }, {
        id: 2,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是1级评论",
        time: "2020/01/26",
        super: 0,
    }, {
        id: 3,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是2级评论",
        time: "2020/01/27",
        super: 2,
    }, {
        id: 4,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 2,
    }, {
        id: 10,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 0,
    }, {
        id: 5,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 0,
    }, {
        id: 6,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 0,
    }, {
        id: 7,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 0,
    }, {
        id: 8,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 0,
    }, {
        id: 9,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我也是2级评论",
        time: "2020/01/28",
        super: 0,
    },
    ],
}, {
    articleid: 2,
    comments: [{
        id: 1,
        email: "darc@g.com",
        head: "https://upload.jianshu.io/users/upload_avatars/20081468/225994ad-b062-47aa-ab0a-62645cf3554e.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp",
        text: "我是唯一的二级评论",
        time: "2020/01/25",
        super: 1,
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

export {
    articleText, commentRoom, article2, headMenus, blogNmae, footerInfo, articleOrder
}


/**
 * github等
 * 右侧第一个块
 */

export const  myIntroduce = [
    {
        id:1,
        text:"Github",
        link:"https://github.com/darcyjoven",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M29.3444 30.4767C31.7481 29.9771 33.9292 29.1109 35.6247 27.8393C38.5202 25.6677 40 22.3137 40 19C40 16.6754 39.1187 14.5051 37.5929 12.6669C36.7427 11.6426 39.2295 4.00001 37.02 5.02931C34.8105 6.05861 31.5708 8.33691 29.8726 7.8341C28.0545 7.29577 26.0733 7.00001 24 7.00001C22.1992 7.00001 20.4679 7.22313 18.8526 7.63452C16.5046 8.23249 14.2591 6.00001 12 5.02931C9.74086 4.05861 10.9736 11.9633 10.3026 12.7946C8.84119 14.6052 8 16.7289 8 19C8 22.3137 9.79086 25.6677 12.6863 27.8393C14.6151 29.2858 17.034 30.2077 19.7401 30.6621" stroke="#000000" stroke-width="2" stroke-linecap="square"/><path d="M19.7402 30.662C18.5817 31.9372 18.0024 33.148 18.0024 34.2946C18.0024 35.4411 18.0024 38.3465 18.0024 43.0108" stroke="#000000" stroke-width="2" stroke-linecap="square"/><path d="M29.3443 30.4767C30.4421 31.9175 30.991 33.2112 30.991 34.3577C30.991 35.5043 30.991 38.3886 30.991 43.0108" stroke="#000000" stroke-width="2" stroke-linecap="square"/><path d="M6 31.2156C6.89887 31.3255 7.56554 31.7388 8 32.4555C8.65169 33.5304 11.0742 37.5181 13.8251 37.5181C15.6591 37.5181 17.0515 37.5181 18.0024 37.5181" stroke="#000000" stroke-width="2" stroke-linecap="square"/></svg>`,
    },
    {
        id:2,
        text:"微信",
        link:"#",
        img:`<svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" fill="none"/><path d="M36.9974 21.7112C36.8434 13.0079 29.7401 6 21 6C12.1634 6 5 13.1634 5 22C5 26.1701 6.59531 29.9676 9.20892 32.8154L8.01043 40.0257L15.125 36.9699C18.2597 38.0122 21.218 38.2728 24 37.7516" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M15.125 20.4667C16.3676 20.4667 17.375 19.4519 17.375 18.2C17.375 16.9482 16.3676 15.9333 15.125 15.9333C13.8824 15.9333 12.875 16.9482 12.875 18.2C12.875 19.4519 13.8824 20.4667 15.125 20.4667Z" fill="#000000"/><path d="M24.125 20.4667C25.3676 20.4667 26.375 19.4519 26.375 18.2C26.375 16.9482 25.3676 15.9333 24.125 15.9333C22.8824 15.9333 21.875 16.9482 21.875 18.2C21.875 19.4519 22.8824 20.4667 24.125 20.4667Z" fill="#000000"/><path fill-rule="evenodd" clip-rule="evenodd" d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" fill="none"/><path d="M38.7618 39.9293C37.0135 41.2302 34.8467 42 32.5 42C26.701 42 22 37.299 22 31.5C22 25.701 26.701 21 32.5 21C38.299 21 43 25.701 43 31.5C43 33.0997 42.6423 34.6159 42.0024 35.9728" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M42.0024 35.9728L43 42L38.7618 39.9293" fill="none"/><path d="M42.0024 35.9728L43 42L38.7618 39.9293" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M35.6875 30.7999C34.7555 30.7999 34 30.0388 34 29.0999C34 28.161 34.7555 27.3999 35.6875 27.3999C36.6195 27.3999 37.375 28.161 37.375 29.0999C37.375 30.0388 36.6195 30.7999 35.6875 30.7999Z" fill="#000000"/><path d="M28.9375 30.7999C28.0055 30.7999 27.25 30.0388 27.25 29.0999C27.25 28.161 28.0055 27.3999 28.9375 27.3999C29.8695 27.3999 30.625 28.161 30.625 29.0999C30.625 30.0388 29.8695 30.7999 28.9375 30.7999Z" fill="#000000"/></svg>`,
    },
    {
        id:3,
        text:"邮箱",
        link:"darcy_joven@live.com",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path d="M4 39H44V24V9H24H4V24V39Z" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><path d="M4 9L24 24L44 9" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M24 9H4V24" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M44 24V9H24" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
    },
    {
        id:4,
        text:"打赏",
        link:"#",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="38" height="38" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.9821 11.9689L31.7847 4L36.3971 11.9889L17.9821 11.9689Z" stroke="#000000" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/><path d="M4 14C4 12.8954 4.89543 12 6 12H42C43.1046 12 44 12.8954 44 14V42C44 43.1046 43.1046 44 42 44H6C4.89543 44 4 43.1046 4 42V14Z" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><path d="M35.25 33H44V23H35.25C32.3505 23 30 25.2386 30 28C30 30.7614 32.3505 33 35.25 33Z" fill="none" stroke="#000000" stroke-width="2" stroke-linejoin="round"/><path d="M44 16.5V40.5" stroke="#000000" stroke-width="2" stroke-linecap="square"/></svg>`,
    }, 
]

/**
 * 文章分类
 */
export const types = [
    {
        id:1,
        text:"javascript",
        link:"tech",
        nums:10,
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"/><rect x="4" y="8" width="40" height="32" rx="2" fill="none" stroke="#000000" stroke-width="1" stroke-linejoin="round"/><path d="M12 18L19 24L12 30" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/><path d="M23 32H36" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
    },
    {
        id:2,
        text:"DBL",
        link:"DBL",
        nums:10,
    },
    {
        id:3,
        text:"工具",
        link:"tool",
        nums:10,
    },
    {
        id:4,
        text:"笔记",
        link:"note",
        nums:10,
    },
    {
        id:5,
        text:"随笔",
        link:"write",
        nums:10,
    }
]


export const myTags =[
    {
        id:1,
        text:"javascript",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
        link:"#abc",
    },
    {
        id:1,
        text:"ubuntu",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
    },
    {
        id:1,
        text:"oracle",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
    },
    {
        id:1,
        text:"虚拟机",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
    },
    {
        id:1,
        text:"win10",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
    },
    {
        id:1,
        text:"旅游",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
    },
    {
        id:1,
        text:"博客",
        img:`<?xml version="1.0" encoding="UTF-8"?><svg width="18" height="18" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24 15C28.9706 15 33 19.0294 33 24C33 28.9706 28.9706 33 24 33C19.0294 33 15 28.9706 15 24C15 19.0294 19.0294 15 24 15ZM24 15H41.8654M17 42.7408L29.6439 31M6 15.2717L16.8751 29.552M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="round"/></svg>`,
        nums:10,
        color:"#f0f0f0",
    },
    

]

export const myHotList=[
    {
        id:1,
        text:"第一遍文章",
        link:"#asds",
        img:` <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 41.0202C26.4311 41.0202 27.4311 42.3302 28.7342 42.6214C30.0373 42.9127 31.1312 42.9935 32.2515 42.4999C34.47 41.5223 35.8224 40.3578 37.4634 38.6186C40.5046 35.3953 42 30.9635 42 25.0286C42 19.0936 40.3996 16.0265 37.9334 14.0202C35.4672 12.014 34.037 11.6296 31.0549 12.014C28.0727 12.3983 26.4489 15.6025 24.0083 15.6025C21.5678 15.6025 18.5933 12.4431 16.0055 12.014C13.4177 11.5848 12 12.014 9.75967 14.0202C7.51934 16.0265 6 19.1506 6 25.0286C6 30.9066 7.55155 35.265 10.5927 38.4882C12.2337 40.2275 13.53 41.5223 15.7485 42.4999C16.8688 42.9935 18.0267 42.9127 19.2844 42.6214C20.5422 42.3302 21.5422 41.0202 24 41.0202Z" fill="#ff692f" stroke="#333" stroke-width="2" />
        <path d="M24.0083 15.6025C24.7932 7.86751 28.1274 4 34.0109 4C34.5504 5.62786 34.6897 7.20336 34.429 8.7265C34.3051 9.45008 33.9208 10.4819 33.2759 11.8219" stroke="#333" stroke-width="2" stroke-linecap="square" />
        <path d="M14.2291 26C13.9526 27.3457 13.9526 28.7313 14.2291 30.1566C14.5057 31.5819 15.0946 32.6818 15.996 33.4563" stroke="#a81010" stroke-width="2" stroke-linecap="square" />
        </svg>`
    },
    {
        id:1,
        text:"第二遍文章",
        link:"#asds",
        img:` <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 41.0202C26.4311 41.0202 27.4311 42.3302 28.7342 42.6214C30.0373 42.9127 31.1312 42.9935 32.2515 42.4999C34.47 41.5223 35.8224 40.3578 37.4634 38.6186C40.5046 35.3953 42 30.9635 42 25.0286C42 19.0936 40.3996 16.0265 37.9334 14.0202C35.4672 12.014 34.037 11.6296 31.0549 12.014C28.0727 12.3983 26.4489 15.6025 24.0083 15.6025C21.5678 15.6025 18.5933 12.4431 16.0055 12.014C13.4177 11.5848 12 12.014 9.75967 14.0202C7.51934 16.0265 6 19.1506 6 25.0286C6 30.9066 7.55155 35.265 10.5927 38.4882C12.2337 40.2275 13.53 41.5223 15.7485 42.4999C16.8688 42.9935 18.0267 42.9127 19.2844 42.6214C20.5422 42.3302 21.5422 41.0202 24 41.0202Z" fill="#ff692f" stroke="#333" stroke-width="2" />
        <path d="M24.0083 15.6025C24.7932 7.86751 28.1274 4 34.0109 4C34.5504 5.62786 34.6897 7.20336 34.429 8.7265C34.3051 9.45008 33.9208 10.4819 33.2759 11.8219" stroke="#333" stroke-width="2" stroke-linecap="square" />
        <path d="M14.2291 26C13.9526 27.3457 13.9526 28.7313 14.2291 30.1566C14.5057 31.5819 15.0946 32.6818 15.996 33.4563" stroke="#a81010" stroke-width="2" stroke-linecap="square" />
        </svg>`
    },
    {
        id:1,
        text:"第三遍文章",
        link:"#asds",
        img:` <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" fill="white" fill-opacity="0.01" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 41.0202C26.4311 41.0202 27.4311 42.3302 28.7342 42.6214C30.0373 42.9127 31.1312 42.9935 32.2515 42.4999C34.47 41.5223 35.8224 40.3578 37.4634 38.6186C40.5046 35.3953 42 30.9635 42 25.0286C42 19.0936 40.3996 16.0265 37.9334 14.0202C35.4672 12.014 34.037 11.6296 31.0549 12.014C28.0727 12.3983 26.4489 15.6025 24.0083 15.6025C21.5678 15.6025 18.5933 12.4431 16.0055 12.014C13.4177 11.5848 12 12.014 9.75967 14.0202C7.51934 16.0265 6 19.1506 6 25.0286C6 30.9066 7.55155 35.265 10.5927 38.4882C12.2337 40.2275 13.53 41.5223 15.7485 42.4999C16.8688 42.9935 18.0267 42.9127 19.2844 42.6214C20.5422 42.3302 21.5422 41.0202 24 41.0202Z" fill="#ff692f" stroke="#333" stroke-width="2" />
        <path d="M24.0083 15.6025C24.7932 7.86751 28.1274 4 34.0109 4C34.5504 5.62786 34.6897 7.20336 34.429 8.7265C34.3051 9.45008 33.9208 10.4819 33.2759 11.8219" stroke="#333" stroke-width="2" stroke-linecap="square" />
        <path d="M14.2291 26C13.9526 27.3457 13.9526 28.7313 14.2291 30.1566C14.5057 31.5819 15.0946 32.6818 15.996 33.4563" stroke="#a81010" stroke-width="2" stroke-linecap="square" />
        </svg>`
    }
]