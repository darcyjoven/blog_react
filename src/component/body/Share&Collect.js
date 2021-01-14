export const Share = props => (
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

export const Collect = props => (
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