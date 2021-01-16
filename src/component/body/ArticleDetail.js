import { Agree } from './AgreeOrNo'
import { Comments, CommentView } from './Comments'
import { Share, Collect } from './Share&Collect'
import { MoreExt } from './MoreExt'
import { articleText } from '../../demodata'
import marked from 'marked'
import { useContext, useReducer } from 'react'
import { Context } from '../../state/context'
import { ReadAllAction } from '../../state/action'
import { reducer } from '../../state/reducer'

marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
})


/**
 * 
 * @param {*} props 
 * @param {*} props.article     文章数据
 */
export const ArticleItem = (props) => {

    const [commentshow, dipatch] = useReducer(reducer, true)

    return (
        <div className="Card TopstoryItem TopstoryItem--old TopstoryItem-isRecommend" tabIndex={0}>
            <div className="Feed" data-za-detail-view-path-module="FeedItem">
                {/* 标题 */}
                <ListTitle title={props.article.title} />
                {/* 缩略图和文字描述 */}
                <div className={"RichContent" + !props.article.expanded ? "is-collapsed" : ""}>
                    {props.article.expanded && (<ExpandedAgree nums={props.article.agrees} />)}
                    {/* 缩略图 */}
                    {props.article.expanded ?
                        (
                            <img class="ArticleItem-image"
                                src={props.article.imgs}
                                alt={props.article.title}>
                                {/* {这是缩略图} */}
                            </img>)
                        : (
                            <LitImg imgslink={props.article.imgs} />
                        )
                    } 
                    {/* 文字描述 */}
                    {props.article.expanded?(<ExpandedText id={props.article.id} />):(<ListText description={props.article.description} />)}
                    {props.article.expanded && (<ReleaseTime cdate={props.article.createTime} mdate={props.article.modidyTime} />)}
                    
                    {/* card下方菜单start */}
                    <ListMenu id={props.article.id} agrees={props.article.views} comments={props.article.id} dispatch={dipatch} />
                    {/* card下方菜单end  */}
                </div> 
                {/* 这里放评论详情 */}
                {commentshow && (<CommentView article={props.article.id} nums ={props.article.id} />)}
            </div>
        </div>
    )
}

/**
 * 
 * @param {下方按钮} props 
 */
const ListMenu = props => (
    <div className="ContentItem-actions">
        <Agree nums={props.agrees} />
        <Comments nums={props.comments} dispatch={props.dispatch} />
        <Share />
        <Collect />
        <MoreExt />
        {/* 阅读全文 */}
        <ListRealAll id={props.id} />
    </div>
)
/**
 * 阅读全文按钮
 * @param {*} props 
 */
const ListRealAll = (props) => {
    const { dispatch } = useContext(Context)
    return (
        <div className="Popover ShareMenu ContentItem-action">
            <div className="ShareMenu-toggler" id="Popover23-toggle" aria-haspopup="true" aria-expanded="false"
                aria-owns="Popover23-content">
                <button type="button" className="Button Button--plain Button--withIcon Button--withLabel"
                    onClick={() => {
                        dispatch(ReadAllAction(props.id))
                    }}>
                    <span style={{ display: "inline-flex", alignItems: "center" }}>
                        <svg className="Zi Zi--Share Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em"
                            height="1.2em">
                            <path
                                d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                                fill-rule="evenodd">
                            </path>
                        </svg>
                    </span>
                阅读全文
            </button>
            </div>
        </div>
    )
}

/**
 * 描述和阅读全文
 * @param {*} props 
 */
const ListText = props => (
    <div className="RichContent-inner">
        <span className="RichText ztext CopyrightRichText-richText" itemProp="articleBody">
            {props.description}
        </span>
        <button type="button" className="Button ContentItem-more Button--plain">
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
    </div>
)
/**
 * 不展开的图片
 * @param {imgslink:图片的链接} props 
 */
const LitImg = props => (
    <div className="RichContent-cover">
        <div className="RichContent-cover-inner">
            <div className="VagueImage" data-src={props.imgslink}>
                <div className="VagueImage-mask is-active">
                    <img src={props.imgslink} alt="" />
                </div>
            </div>
        </div>
    </div>
)

/**
 * 文章标题
 * @param { title:标题内容} props 
 */
const ListTitle = props => (
    <h2 class="ContentItem-title">
        <a href="#1" target="_blank" rel="noopener noreferrer"  >
            {props.title}
        </a>
    </h2>
)


/**
 * 多少人点赞
 * @param {nums：点赞人数} props 
 */
const ExpandedAgree = props => (
    <div class="ArticleItem-extraInfo">
        <span class="Voters">
            <button type="button" class="Button Button--plain">
                {props.nums} 人赞同了该文章
            </button>
        </span>
    </div>
)

/**
 * 展开文章详情，自动mk2HTML,传入文章id
 * @param {id:number} props 
 */
const ExpandedText = props => (
    <div class="RichContent-inner">
        {/* 富文本 */}
        <span class="RichText ztext CopyrightRichText-richText" itemProp="articleBody" dangerouslySetInnerHTML={{ __html: getArticleText(props.id) }}>
            {/* {texthtml} */}
        </span>
    </div>
)

/**
 * 获取文章text，并转化成HTML
 * @param {*} id 
 */
function getArticleText(id) {
    let text = ""
    articleText.forEach(article => {
        (id === article.id) && (text = article.text)
    })
    return marked(text)
}

/**
 * 文章发布时间
 * @param {cdate：创建时间} props 
 */
const ReleaseTime = props => {
    // const rdate = props.cdate.getFullYear() + "-" + (props.cdate.getMonth() + 1) + "-" + props.cdate.getDate()
    return (
        <div class="ContentItem-time">
            <a href="#12" target="_blank">
                <span data-tooltip="发布于 01-10 12:25">
                    发布于 {props.cdate}
                </span>
            </a>
        </div>
    )
}