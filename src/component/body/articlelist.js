import { useContext, useEffect, useReducer, useState } from "react"
import { ArticleDemo, StoreDemo } from '../../demodata'
// import { Context } from '../../index'
// import { ReadAll } from '../../redux/action/actiontype'
// import { reducer } from '../../redux/reducer'
// import { readAllAction } from '../../redux/action'




/**
 * 获取文章列表
 */
function getArticleList(){
    //demo 实例数据
    return ArticleDemo
}


/**
 * 文章标题
 * @param props 
 */
function ListTitle(props) {
    return (
        <a href={props.listTitle.link} target="_blank" rel="noopener noreferrer"
            data-za-detail-view-element_name="Title" data-za-detail-view-id="2812">
            {props.listTitle.title}
        </a>
    )
}

/**
 * 缩略图
 * @param props 
 */
function ListImgs(props) {
    return (
        <div className="VagueImage" data-src={props.listImgs.imgsLink}>
            <div className="VagueImage-mask is-active">
                <img src={props.listImgs.imgsLink} alt="" />
            </div>
        </div>
    )
}

/**
 * 文章缩略文字
 * @param props 
 */
function ListDescription(props) {
    return (
        <span className="RichText ztext CopyrightRichText-richText" itemProp="articleBody">
            {props.listDescription.description}
        </span>
    )
}
/**
 * 阅读全文
 * @param props 
 */
function ListReadAll(props) {
    // const [state, dispatch] = useReducer(reducer, StoreDemo)
    // const {dispatch}=useContext(Context)
 
    console.log(props.id)
    return (
        <button type="button" className="Button ContentItem-more Button--plain"
             >
            阅读全文
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg className="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor" viewBox="0 0 24 24" width="24"
                    height="24">
                    <path
                        d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </span>
        </button>
    )
}
/* function ListMenu(props: props) {
    return (
        <div className="ContentItem-actions">

        </div>
    )
} */
/**
 * 赞同反对标签
 * @param props 
 */
function Agree() {
    return (
        <span>
            <button aria-label="赞同 65 " type="button" className="Button VoteButton VoteButton--up">
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <svg className="Zi Zi--TriangleUp VoteButton-TriangleUp" fill="currentColor" viewBox="0 0 24 24" width="10"
                        height="10">
                        <path
                            d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                </span>赞同 65
        </button>
            <button aria-label="反对" type="button" className="Button VoteButton VoteButton--down">
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <svg className="Zi Zi--TriangleDown" fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
                        <path
                            d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                </span>
            </button>
        </span>
    )
}

/**
 * 评论
 */
function CommentNums(props) {
    return (
        <button type="button" className="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg className="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path
                        d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </span>{props.commentNums.comments} 条评论
        </button>
    )
}
/**
 * 分享等菜单
 * @param props 
 */
function ShareExt() {
    return (
        <div className="Popover ShareMenu ContentItem-action">
            <div className="ShareMenu-toggler" id="Popover23-toggle" aria-haspopup="true" aria-expanded="false"
                aria-owns="Popover23-content">
                <button type="button" className="Button Button--plain Button--withIcon Button--withLabel">
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        <svg className="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em"
                            height="1.2em">
                            <path
                                d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                                fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>分享
                </button>
            </div>
        </div>
    )
}
/**
 * 收藏等菜单
 * @param props  
 */
function SaveExt() {
    return (
        <button type="button" className="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg className="Zi Zi--Star Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path
                        d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </span>收藏
        </button>
    )
}
/**
 * 更多
 * @param props 
 */
function MoreExt() {
    return (
        <div className="Popover ContentItem-action">
            <button aria-label="更多" id="Popover24-toggle" aria-haspopup="true" aria-expanded="false"
                aria-owns="Popover24-content" type="button"
                className="Button OptionsButton Button--plain Button--withIcon Button--iconOnly">
                <span style={{ display: "inline-flex", alignItems: "center" }}>
                    <svg className="Zi Zi--Dots Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em"
                        height="1.2em">
                        <path
                            d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                </span>
            </button>
        </div>
    )
}
/**
 * 未展开列表
 */
function NoExpanded(props) {
    
    return (
        <div className="Card TopstoryItem TopstoryItem--old TopstoryItem-isRecommend" tabIndex={0}>
            <div className="Feed" data-za-detail-view-path-module="FeedItem">
                <div className="ContentItem ArticleItem"
                    itemProp="article"
                    itemType="http://schema.org/SocialMediaPosting"
                    data-za-detail-view-path-module="PostItem" >
                    {/* 标题 */}
                    <h2 className="ContentItem-title">
                        <ListTitle listTitle={{ title: props.thisArticle.title, link: props.thisArticle.link }} />
                    </h2>
                    {/* 缩略图和文字描述 */}
                    <div className="RichContent is-collapsed">
                        {/* 缩略图 */}
                        <div className="RichContent-cover">
                            <div className="RichContent-cover-inner">
                                <ListImgs listImgs={{ imgsLink: props.thisArticle.imgs }} />
                            </div>
                        </div>
                        {/* 文字描述 */}
                        <div className="RichContent-inner">
                            <ListDescription listDescription={{ description: props.thisArticle.description }} />
                            <ListReadAll id ={props.thisArticle.id} />
                        </div>
                        {/* card下方菜单start */}
                        <div className="ContentItem-actions">
                            <Agree />
                            <CommentNums commentNums={{ comments: props.thisArticle.comments }} />
                            <ShareExt />
                            <SaveExt />
                            <MoreExt />
                        </div>
                        {/* card下方菜单end  */}
                    </div>
                </div>
            </div>
        </div>
    )
}
/**
 * 展开的阅读全文
 * @param props 
 */
function Expanded(props) {

}
function AticleListItem(props) {
    // 文章数据demo

    // const { state:{article:articleList} } = useContext(Context)
    // const [state, dispatch] = useReducer(reducer,StoreDemo)
    const articleList = StoreDemo.article

    return (
        <div id="TopstoryContent" className="Topstory-content">
            <div className="ListShortcut">
                <div className="Topstory-recommend" data-zop-feedlistfather="0">
                    <div className="">
                        {
                            articleList.length <= 0 ?
                                <p>正在加载...</p>
                                :
                                articleList.map(article => (
                                    article.expanded ?
                                        <NoExpanded thisArticle={article} />
                                        :
                                        <p>阅读全文</p>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export {
    AticleListItem
}



