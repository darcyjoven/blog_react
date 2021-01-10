
function BlogTitle(props) {
    return (
        <a className="ZhihuLogoLink" href={props.blog.link} aria-label={props.blog.content} >
            {props.blog.content}
        </a>
    )
}
export {
    BlogTitle
}