import { Agree } from './AgreeOrNo'
import { Comments,CommentView } from './Comments'
import { Share, Collect } from './Share&Collect'
import { MoreExt } from './MoreExt'
import { articleText } from '../../demodata'
import  marked  from 'marked' 

/**
 * 展开的阅读全文
 * 
 */
export const Expanded = (props) => {
    return (
        <>
            <div class="Card TopstoryItem TopstoryItem--old TopstoryItem-isRecommend" tabindex="0">
                <ListTitle title={props.article.title} />
                <div class="ContentItem-meta">
                    {/* {这是头像} */}
                </div>
                <div class="RichContent">
                    <ExpandedAgree nums={props.article.agrees} />
                    <img class="ArticleItem-image"
                        src={props.article.imgs}
                        alt={props.article.title}>
                        {/* {这是缩略图} */}
                    </img>
                    <ExpandedText articleid={props.article.id} />
                    <ReleaseTime cdate={props.article.createTime} mdate={props.article.modidyTime} />
                    <ListMenu agrees={props.article.views} comments={props.article.comments} />
                </div>
                {/* 这里放评论详情 */}
                <CommentView/>
            </div>
        </>
    )
}
/**
 * 未展开的文章列表
 * 
 */
export const Noexpanded = props => (
    <div className="Card TopstoryItem TopstoryItem--old TopstoryItem-isRecommend" tabIndex={0}>
        <div className="Feed" data-za-detail-view-path-module="FeedItem">
            <div className="ContentItem ArticleItem" itemProp="article" itemType="http://schema.org/SocialMediaPosting" data-za-detail-view-path-module="PostItem" >
                {/* 标题 */}
                <ListTitle title={props.article.title} />
                {/* 缩略图和文字描述 */}
                <div className="RichContent is-collapsed">
                    {/* 缩略图 */}
                    <LitImg imgslink={props.article.imgs} />
                    {/* 文字描述 */}
                    <ListText description={props.article.description} />
                    {/* card下方菜单start */}
                    <ListMenu agrees={props.article.views} comments={props.article.comments} />
                    {/* card下方菜单end  */}
                </div>
                {/* 这里放评论详情 */}
                <CommentView/>
            </div>
        </div>
    </div>
)

/**
 * 
 * @param {下方按钮} props 
 */
const ListMenu = props => (
    <div className="ContentItem-actions">
        <Agree nums={props.agrees} />
        <Comments nums={props.comments} />
        <Share />
        <Collect />
        <MoreExt />
    </div>
)

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
 * @param {*} props 
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
 * @param {*} props 
 */
const ListTitle = props => (
    <h2 class="ContentItem-title">
        <a href="#1" target="_blank" rel="noopener noreferrer"  >
            {props.title}
        </a>
    </h2>
)


const HeadPortrait = props => (
    <p>
    </p>
)

const ExpandedAgree = props => (
    <div class="ArticleItem-extraInfo">
        <span class="Voters">
            <button type="button" class="Button Button--plain">
                {props.nums} 人赞同了该文章
            </button>
        </span>
    </div>
)

const ExpandedText = props => {
    let text = ""
    articleText.forEach(article => {
        (props.articleid !== article.id) && (text = article.text)
    })

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
    const texthtml = marked(text)


    return (
        <div class="RichContent-inner">
            {/* 富文本 */}
            <span class="RichText ztext CopyrightRichText-richText" itemprop="articleBody" dangerouslySetInnerHTML={{__html: texthtml}}>
                {/* {texthtml} */}
            </span>
        </div>
    )
}

const ReleaseTime = props => {
    const rdate = props.cdate.getFullYear() + "-" + (props.cdate.getMonth() + 1) + "-" + props.cdate.getDate()
    return (
        <div class="ContentItem-time">
            <a href="#12" target="_blank">
                <span data-tooltip="发布于 01-10 12:25">
                    发布于 {rdate}
                </span>
            </a>
        </div>
    )
}