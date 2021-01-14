export const Comments = props => {
    return (
        <button type="button" className="Button ContentItem-action Button--plain Button--withIcon Button--withLabel">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg className="Zi Zi--Comment Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                    <path
                        d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </span>{props.nums} 条评论
        </button>
    )
}

export const CommentView = props => (
    <div class="Comments-container ZVideoItem-commentContainer">
        <div class="CommentsV2 CommentsV2--withEditor CommentsV2-withPagination ZVideoItem-comment">
            {/* 上面排序 */}
            <div class="Topbar CommentTopbar">
                <div class="Topbar-title">
                    <h2 class="CommentTopbar-title">32 条评论</h2>
                </div>
                <div class="Topbar-options">
                    <button type="button" class="Button Button--plain Button--withIcon Button--withLabel">
                        <span style={{ display: "inline-flex", alignItems: "center" }}>
                            <svg class="Zi Zi--Switch Button-zi" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                <path d="M13.004 7V4.232c0-.405.35-.733.781-.733.183 0 .36.06.501.17l6.437 5.033c.331.26.376.722.1 1.033a.803.803 0 0 1-.601.264H2.75a.75.75 0 0 1-.75-.75V7.75A.75.75 0 0 1 2.75 7h10.254zm-1.997 9.999v2.768c0 .405-.35.733-.782.733a.814.814 0 0 1-.5-.17l-6.437-5.034a.702.702 0 0 1-.1-1.032.803.803 0 0 1 .6-.264H21.25a.75.75 0 0 1 .75.75v1.499a.75.75 0 0 1-.75.75H11.007z"
                                    fill-rule="evenodd">
                                </path>
                            </svg>
                        </span>
                    切换为时间排序
                </button>
                </div>
            </div>
            {/*  评论详情和翻页 */}
            <div>
                {/* 评论详情 */}
                <div class="CommentListV2">
                    {/* 一条评论 */}
                    <ul class="NestComment">
                        {/* 一级评论 */}
                        <li class="NestComment--rootComment">
                            <div class="CommentItemV2">
                                <div>
                                    <div class="CommentItemV2-meta">
                                        {/* 头像 */}
                                        <span class="UserLink CommentItemV2-avatar">
                                            <div class="Popover">
                                                <div id="Popover35-toggle" aria-haspopup="true" aria-expanded="false"
                                                    aria-owns="Popover35-content">
                                                    <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank" target="_blank"
                                                        href="https://www.zhihu.com/people/alt-10-46">
                                                        <img class="Avatar UserLink-avatar" width="24" height="24"
                                                            src="./(2 封私信 _ 12 条消息) 首页 - 知乎_files/v2-8b14a0e0f7ab8c6029ee62c435eabb51_s.jpg"
                                                            srcset="https://pic4.zhimg.com/v2-8b14a0e0f7ab8c6029ee62c435eabb51_xs.jpg?source=06d4cd63 2x"
                                                            alt="小日本煤炉代拍" />
                                                    </a>
                                                </div>
                                            </div>
                                        </span>
                                        {/* 用户名 */}
                                        <span class="UserLink">
                                            <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank"
                                                href="https://www.zhihu.com/people/alt-10-46">小日本煤炉代拍
                                            </a>
                                        </span>
                                        {/* 评论时间 */}
                                        <span class="CommentItemV2-time">2020-12-12
                                        </span>
                                    </div>
                                    {/* 评论内容 */}
                                    <div class="CommentItemV2-metaSibling">
                                        <div class="CommentRichText CommentItemV2-content">
                                            <div class="RichText ztext">
                                                日剧 下辈子我再好好过
                                                <br />
                                                女主有五个py
                                            </div>
                                            {/* 赞和回复 */}
                                            <CommentMenu />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 二级评论 */}
                        <li class="NestComment--child">
                            <div class="CommentItemV2">
                                {/* 用户信息 */}
                                <div class="CommentItemV2-meta">
                                    {/* 头像 */}
                                    <span class="UserLink CommentItemV2-avatar">
                                        <div class="Popover">
                                            <div id="Popover36-toggle" aria-haspopup="true" aria-expanded="false"
                                                aria-owns="Popover36-content">
                                                <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank"
                                                    href="https://www.zhihu.com/people/baby-sbreathing">
                                                    <img class="Avatar UserLink-avatar" width="24" height="24"
                                                        src="./(2 封私信 _ 12 条消息) 首页 - 知乎_files/abcbe3a91b81f0b8a26c7998979cae49_s.jpg"
                                                        srcset="https://pic1.zhimg.com/abcbe3a91b81f0b8a26c7998979cae49_xs.jpg?source=06d4cd63 2x"
                                                        alt="baby&#39;sbreathing" />
                                                </a>
                                            </div>
                                        </div>
                                    </span>
                                    {/* 评论人id */}
                                    <span class="UserLink">
                                        <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank"
                                            href="https://www.zhihu.com/people/baby-sbreathing">baby'sbreathing
                                    </a>
                                    </span>
                                    {/* 被回复人id */}
                                    <span class="CommentItemV2-reply">回复</span><span class="UserLink">
                                        <a class="UserLink-link" data-za-detail-view-element_name="User" target="_blank"
                                            href="https://www.zhihu.com/people/alt-10-46">小日本煤炉代拍
                                    </a>
                                    </span>
                                    {/* 回复日期 */}
                                    <span class="CommentItemV2-time">01-07
                                    </span>
                                </div>
                                {/* 回复内容 */}
                                <div class="CommentItemV2-metaSibling">
                                    <div class="CommentRichText CommentItemV2-content">
                                        <div class="RichText ztext">乍一看我以为她有五个屁眼[发呆]</div>
                                    </div>
                                    {/* 点赞 */}
                                    <CommentMenu />
                                </div>
                            </div>
                        </li>
                        <div>
                            {/* 展开所有评论 */}
                            <div class="CommentMoreReplyButton"><button type="button" class="Button Button--plain">查看全部 6 条回复</button>
                            </div>
                        </div>
                    </ul>
                </div>
                {/* 翻页 */}
                <div class="Pagination CommentsV2-pagination">
                    <button type="button" disabled="" class="Button PaginationButton PaginationButton--current Button--plain">
                        1
                    </button>
                    <button type="button" class="Button PaginationButton Button--plain">
                        2
                    </button><button type="button" class="Button PaginationButton PaginationButton-next Button--plain">
                        下一页
                    </button>
                </div>
            </div>
            {/* 评论位置 */}
            <div>
                <div class="CommentsV2-footer CommentEditorV2--normal CommentEditorV2--active">
                    {/* 输入框 */}
                    <div class="CommentEditorV2-inputWrap CommentEditorV2-inputWrap--active">
                        {/* 文字区域 */}
                        <div class="InputLike CommentEditorV2-input Editable is-focus">
                            <div class="Dropzone Editable-content RichText RichText--editable RichText--clearBoth ztext"
                                style={{ minHeight: "198px" }} >
                                <div class="DraftEditor-root">
                                    <div class="public-DraftEditorPlaceholder-root public-DraftEditorPlaceholder-hasFocus">
                                        <div class="public-DraftEditorPlaceholder-inner" id="placeholder-drhp0"
                                            style={{ whiteSpace: "pre-wrap" }} >
                                            写下你的评论...
                                        </div>
                                    </div>
                                    <div class="DraftEditor-editorContainer">
                                        <div aria-describedby="placeholder-drhp0" class="notranslate public-DraftEditor-content"
                                            contenteditable="true" role="textbox" spellcheck="true" tabindex="0"
                                            style={{ outline: "none", userSelect: "text", whiteSpace: "pre-wrap", overflowWrap: "break-word" }} >
                                            <div data-contents="true">
                                                <div class="Editable-unstyled" data-block="true" data-editor="drhp0" data-offset-key="4k8u3-0-0">
                                                    <div data-offset-key="4k8u3-0-0"
                                                        class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr">
                                                        <span data-offset-key="4k8u3-0-0">
                                                            <br data-text="true" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <input multiple="" type="file" accept="image/webp,image/jpg,image/jpeg,image/png,image/gif"
                                style={{ display: "none" }} />
                        </div>
                        {/* 表情 */}
                        <div class="CommentEditorV2-inputUpload">
                            <div class="CommentEditorV2-popoverWrap">
                                <div class="Popover CommentEditorV2-inputUpLoad-Icon">
                                    <button aria-label="插入表情" data-tooltip="插入表情" data-tooltip-position="bottom"
                                        data-tooltip-will-hide-on-click="true" id="Popover30-toggle" aria-haspopup="true" aria-expanded="false"
                                        aria-owns="Popover30-content" type="button" class="Button Editable-control Button--plain">
                                        <svg class="Zi Zi--Emotion" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                                            <path
                                                d="M7.523 13.5h8.954c-.228 2.47-2.145 4-4.477 4-2.332 0-4.25-1.53-4.477-4zM12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18zm0-1.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm-3-8a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z">
                                            </path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* 提交 */}
                    <button type="button" disabled="" class="Button CommentEditorV2-singleButton Button--primary Button--blue">
                        发布
                    </button>
                </div>
                
            </div>
        </div>
    </div>
)

/**
 * 评论下方菜单
 * @param {*} props
 */
const CommentMenu = props => (
    <div class="CommentItemV2-footer">
        {/* 一直显示的 */}
        <button type="button" class="Button CommentItemV2-likeBtn Button--plain">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg class="Zi Zi--Like" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"
                    style={{ marginRight: "5px" }}>
                    <path
                        d="M14.445 9h5.387s2.997.154 1.95 3.669c-.168.51-2.346 6.911-2.346 6.911s-.763 1.416-2.86 1.416H8.989c-1.498 0-2.005-.896-1.989-2v-7.998c0-.987.336-2.032 1.114-2.639 4.45-3.773 3.436-4.597 4.45-5.83.985-1.13 3.2-.5 3.037 2.362C15.201 7.397 14.445 9 14.445 9zM3 9h2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </span>
            7
        </button>
        {/* 回复，悬停显示 */}
        <button type="button" class="Button CommentItemV2-hoverBtn Button--plain">
            <span style={{ display: "inline-flex", alignItems: "center" }}>
                <svg class="Zi Zi--Reply" fill="currentColor" viewBox="0 0 24 24" width="16" height="16"
                    style={{ display: "inline-flex", alignItems: "center" }}>
                    <path
                        d="M22.959 17.22c-1.686-3.552-5.128-8.062-11.636-8.65-.539-.053-1.376-.436-1.376-1.561V4.678c0-.521-.635-.915-1.116-.521L1.469 10.67a1.506 1.506 0 0 0-.1 2.08s6.99 6.818 7.443 7.114c.453.295 1.136.124 1.135-.501V17a1.525 1.525 0 0 1 1.532-1.466c1.186-.139 7.597-.077 10.33 2.396 0 0 .396.257.536.257.892 0 .614-.967.614-.967z"
                        fill-rule="evenodd">
                    </path>
                </svg>
            </span>
            回复
        </button>
    </div>
)