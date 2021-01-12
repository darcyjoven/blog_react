/**
 * 赞同反对
 * @param {*} props 
 */
export const Agree = props => {
    return (
        <>
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
                    </span>赞同 {props.nums}
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
        </>
    )
}