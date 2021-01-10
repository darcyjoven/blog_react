

function FooterInfo(props) {
    return (
        <footer className="Footer">
            <a className="Footer-item" target="_blank" rel="noopener noreferrer" href= {props.footer.link}>
            {props.footer.content}
            </a>
            <span>{props.footer.copyright}</span>
        </footer>
    )
}
export {
    FooterInfo
}