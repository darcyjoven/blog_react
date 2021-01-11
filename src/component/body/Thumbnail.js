export const MyLitImg = props => {
    <div className="RichContent-cover">
        <div className="RichContent-cover-inner">
            <div className="VagueImage" data-src={props.imgs.link}>
                <div className="VagueImage-mask is-active">
                    <img src={props.imgs.link} alt={props.imgs.link.content} />
                </div>
            </div>
        </div>
    </div>
}