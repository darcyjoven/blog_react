// import { OrderBy } from '../component/body/order'
// import { AticleListItem } from '../component/body/articlelist'
import { HeaderAll } from '../component/header'
// import { RightAll } from '../component/body/right'
import { BodyAll } from '../component/body'

export const Index2 = props => {
    return (
        <>
            {/* header  */}
            <header role="banner" className="Sticky AppHeader" data-za-module="TopNavBar">
                <HeaderAll ></HeaderAll>
            </header>
            <main role="main" className="App-main">
                <BodyAll />
            </main>
        </>
    )
}

// function Index() {
//     const orderby = [
//         {
//             content: "时间",
//             link: "#",
//             id: 1,
//         },
//         {
//             content: "阅读人数",
//             link: "#",
//             id: 2,
//         },
//         {
//             content: "评论",
//             link: "#",
//             id: 3,
//         },
//     ]
//     // 文章数据demo
//     const article = {
//         title: "新的树莓派 400：一台藏身于键盘内微型计算机 | Linux 中国",  //主标题
//         content: "Linux中国： 这台起初是为 DIY 爱好者打造的低规格电脑，现在可以作为全功能桌面使用了。 来源： https:// linux.cn/article-12793- 1.html  作者：Ankush Das 译者：Xingyu.Wang （… 阅读全文 ​", //文章内容
//         imgs: "https://pic3.zhimg.com/50/v2-9535e043b61a0d838f784a2eb1ce2f06_400x224.jpg",//缩略图
//         readers: 100,//浏览人数
//         comments: 100,//评论人数
//         id: 1,
//         link: "http://www.darcyjoven.com/article/1", //文章链接
//     }

//     return (
//         <div>
//             {/* header  */}
//             <header role="banner" className="Sticky AppHeader" data-za-module="TopNavBar">
//                 <HeaderAll ></HeaderAll>
//             </header>
//             {/* 主要内容 */}
//             <main role="main" className="App-main">
//                 {/* 排序列表 */}
//                 <div className="Topstory Topstory--old">
//                     <div className="Topstory-container">
//                         {/* 文章列表card  start */}
//                         <div className="Topstory-mainColumn">
//                             <div className="Topstory-mainColumnCard">
//                                 {/* 排序按钮 */}
//                                 <div className="Card Topstory-noMarginCard Topstory-tabCard">
//                                     <OrderBy orderbys={orderby}></OrderBy>
//                                 </div>
//                                 {/* 文章内容start */}
//                                 <AticleListItem listitem={article} />
//                                 {/* 文章内容end */}
//                             </div>
//                         </div>
//                         {/* 文章列表card end */}
//                         {/* 右侧内容start */}
//                         <RightAll />
//                         {/* 右侧内容end */}
//                     </div>
//                 </div>
//             </main>
//         </div>
//     )
// }

// export {
//     Index
// }