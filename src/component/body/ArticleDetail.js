import { MyLitImg } from './Thumbnail'

/**
 * 展开的阅读全文
 * 
 */
export const Expanded = (props) => {
    return (
        <>
            <div class="Card TopstoryItem TopstoryItem--old TopstoryItem-isRecommend" tabindex="0">
                <h2 class="ContentItem-title">
                    <a href="#1" target="_blank" rel="noopener noreferrer"  >
                        {"这是标题"}
                    </a>
                </h2>
                <div class="ContentItem-meta">
                    {/* {这是头像} */}
                </div>
                <div class="RichContent">
                    <div class="ArticleItem-extraInfo">
                        <span class="Voters">
                            <button type="button" class="Button Button--plain">
                                9 人赞同了该文章
                                </button>
                        </span>
                    </div>
                    <img class="ArticleItem-image"
                        src="./(6 条消息) 首页 - 知乎_files/v2-a41b6c98eec1e68e82c369ee99b6ce93_hd.jpg"
                        alt="为 Linux 爱好者打造的极简 Mac 终端 | Linux 中国">
                        {/* {这是缩略图} */}
                    </img>
                    <div class="RichContent-inner">
                        {/* 富文本 */}
                        <span class="RichText ztext CopyrightRichText-richText" itemprop="articleBody">

                        </span>
                    </div>
                    <div class="ContentItem-time">
                        <a href="#12" target="_blank">
                            <span data-tooltip="发布于 01-10 12:25">
                                发布于昨天 12:25
                                </span>
                        </a>
                    </div>
                    <div class="ContentItem-actions">
                        {/* 下方按钮 */}

                    </div>
                </div>
                <p>{/* 下方按钮 */}</p>
            </div>
        </>
    )
}
export const NoExpanded = props => {
    return (
        <>
            <div class="Card TopstoryItem TopstoryItem--old TopstoryItem--advertCard TopstoryItem-isRecommend" tabindex="0">
                <h2 class="ContentItem-title">
                    <a href="#1" target="_blank" rel="noopener noreferrer"  >
                        {"这是标题"}
                    </a>
                </h2>
                <div class="RichContent is-collapsed">
                    {/* 缩略图 */}
                    <MyLitImg value={{ imgs: { link: props.article.imgs, content: props.article.imgs } }} ></MyLitImg>
                    <div class="RichContent-inner">
                        <Description/>
                        <ReadAll />
                    </div>
                    <div class="ContentItem-actions">
                        {/* 下方按钮 */}
                    </div>
                </div>
            </div>
        </>
    )
}

const Description = props => (
    <span class="RichText ztext CopyrightRichText-richText" itemprop="text">
        意迟迟： 首先，相信我，那种初恋感超强
        一脸天真又无邪，自然美丽对着你笑的，就算没有真的确定恋爱关系，身边也绝对是有男生在宠着她的。
        一般而言，真的没恋…
    </span>
)

const ReadAll = props => {
    return (
        <button type="button" class="Button ContentItem-more Button--plain">
            阅读全文
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg class="Zi Zi--ArrowDown ContentItem-arrowIcon" fill="currentColor"
                    viewBox="0 0 24 24" width="24" height="24">
                    <path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z" fill-rule="evenodd">
                    </path>
                </svg>
            </span>
        </button>
    )
}