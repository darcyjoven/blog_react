export const ArticleDemo = [
    {
        id: 1, createTime: new Date(), modidyTime: new Date(), link: "1st",
        title: "这是我的第三篇文章!", description: "这是文章的描述,并没有什么意思?", imgs: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9kbEV3SVZjS0dzNlZ3MVRZbURTRlJzcE9kcnNvVDhlaWFrOVl2ZGljdUFsVUJrRnRsUmljOHF0WDdGUWd5NGVybmliUWlhcnZIREtORFlzSHRUT0hyS2M2d3dBLzY0MA?x-oss-process=image/format,png",
        autor: "darcy", views: 2, forwards: 3, comments: 2, expanded: false,
    }, {
        id: 2, createTime: new Date(), modidyTime: new Date(), link: "1st",
        title: "这是我的第11篇文章!", description: "这是文章的描述,并没有什么意思?", imgs: "https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9kbEV3SVZjS0dzNlZ3MVRZbURTRlJzcE9kcnNvVDhlaWFrOVl2ZGljdUFsVUJrRnRsUmljOHF0WDdGUWd5NGVybmliUWlhcnZIREtORFlzSHRUT0hyS2M2d3dBLzY0MA?x-oss-process=image/format,png",
        autor: "darcy", views: 2, forwards: 3, comments: 2, expanded: true,
    }
]

export const articleText = [ 
    {id:1,text:`# 标题1
## 标题1
### 标题1
#### 标题1
-  12
-  12
1. 12
2. 12
4. 12
|1|2|
|:-|-:|
|3|4|
    `},
    {id:2,text:`# 标题1
## 标题1
### 标题1
#### 标题1
-  12
-  12
1. 12
2. 12
4. 12
|1|2|
|:-|-:|
|3|4|

![1221](https://imgconvert.csdnimg.cn/aHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9kbEV3SVZjS0dzNlZ3MVRZbURTRlJzcE9kcnNvVDhlaWFrOVl2ZGljdUFsVUJrRnRsUmljOHF0WDdGUWd5NGVybmliUWlhcnZIREtORFlzSHRUT0hyS2M2d3dBLzY0MA?x-oss-process=image/format,png)

    `}
]

export const StoreDemo = {
    article: ArticleDemo
}

export const orderbyDemo = [
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