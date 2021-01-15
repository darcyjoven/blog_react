import { FooterInfo } from '../foot'
import {footerInfo as footer} from '../../demodata'
/**
 * 回答问题模块组件
 */
function RightOne() {
    return (
        <div className="Card GlobalWrite GlobalWrite--old">
            {/* 右1回答问题  */}
            <div className="GlobalWrite-navTop">
                <a className="GlobalWrite-topItem" target="_blank" rel="noopener noreferrer" title="回答" href="www">
                    <svg width="40" height="40" viewBox="0 0 40 40" className="GlobalWrite-navIcon"
                        fill="currentColor">
                        <g fill="#0084FF" fill-rule="evenodd">
                            <circle cx="20" cy="20" r="20" opacity=".12"></circle>
                            <path
                                d="M23.487 10.463c1.896 0 2.583.193 3.277.555a3.824 3.824 0 0 1 1.607 1.573c.371.678.569 1.35.569 3.206v8.472c0 1.855-.198 2.527-.569 3.205a3.824 3.824 0 0 1-1.607 1.573c-.694.363-1.381.556-3.277.556h-6.96c-1.895 0-2.583-.193-3.276-.556a3.824 3.824 0 0 1-1.608-1.573c-.37-.678-.568-1.35-.568-3.205v-8.472c0-1.855.197-2.528.568-3.206.37-.678.915-1.21 1.608-1.573.693-.362 1.38-.556 3.277-.556h6.959zm0 2.08h-6.96c-1.407 0-1.836.081-2.273.31a1.72 1.72 0 0 0-.735.72c-.234.427-.317.847-.317 2.224v8.472c0 1.377.083 1.796.317 2.224.172.316.412.551.735.72.437.229.866.31 2.274.31h6.959c1.407 0 1.836-.081 2.274-.31a1.72 1.72 0 0 0 .735-.72c.234-.428.317-.847.317-2.224v-8.472c0-1.377-.083-1.797-.317-2.225a1.72 1.72 0 0 0-.735-.72c-.438-.228-.867-.309-2.274-.309zm-1.991 9.778v1.873h-5.955V22.32h5.955zm2.977-3.328v1.872h-8.932v-1.872h8.932zm0-3.33v1.873h-8.932v-1.872h8.932z"
                                fill-rule="nonzero"></path>
                        </g>
                    </svg>
                    <div className="GlobalWrite-topTitle">回答问题</div>
                </a>

            </div>
            {/* 稍后答 */}
            <div className="GlobalWrite-navBottom"><a className="GlobalWriteAnswerLater GlobalWrite-answerLater"
                href="#question/later" target="_blank" title="稍后答" data-za-detail-view-id="5370"
                style={{ transform: "scale(1)" }} >
                <div className="GlobalWrite-navWrapper">
                    <div className="GlobalWrite-navTitle">稍后答</div>
                </div>
            </a><a className="GlobalWrite-navDraft" href="#draft" target="_blank" rel="noopener noreferrer"
                title="草稿" data-za-not-track-link="true">
                    <div className="GlobalWrite-navWrapper">
                        <div className="GlobalWrite-navTitle">草稿箱</div>
                    </div>
                </a></div>
        </div>
    )
}

/**
 * 创作中心模块
 */
function RightTwo() {
    return (
        <div className="Card CreatorEntrance GlobalSideBar-creator">
            <a
                className="CreatorEntrance-link CreatorEntrance-Link--smallIcon" href="#creator" target="_blank"
                data-za-detail-view-id="6848">
                <div
                    className="CreatorEntrance-hint ProfileSideCreator-creatorEntranceHint CreatorEntrancePage-hint--smallIcon">
                    <svg className="Zi Zi--Creator CreatorEntrance-creatorIcon" fill="currentColor" viewBox="0 0 24 24"
                        width="24" height="24">
                        <path
                            d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                    <div className="CreatorEntrance-text">
                        <div className="CreatorEntrance-indexPageTitle">
                            <div className="css-3j2kqe">创作中心<span className="css-1ntg9ig">去开通</span>
                            </div>
                        </div>
                    </div><svg className="Zi Zi--ArrowRight CreatorEntrance-arrow CreatorEntrance-arrow--smallIcon"
                        fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                        <path
                            d="M9.218 16.78a.737.737 0 0 0 1.052 0l4.512-4.249a.758.758 0 0 0 0-1.063L10.27 7.22a.737.737 0 0 0-1.052 0 .759.759 0 0 0-.001 1.063L13 12l-3.782 3.716a.758.758 0 0 0 0 1.063z"
                            fill-rule="evenodd">
                        </path>
                    </svg>
                </div>
            </a>
        </div>
    )
}
/**
 * 知乎书店，百科模块
 */
function RightThree() {
    return (
        <div className="Card GlobalSideBar-category">
            <ul className="GlobalSideBar-categoryList">
                <li className="GlobalSideBar-categoryItem"><a href="#lives" target="_blank" title="Live"
                    data-za-not-track-link="true" type="button" className="Button Button--plain"
                    style={{ color: "rgb(255, 207, 0)" }} ><span className="GlobalSideBar-categoryIcon">
                        <svg
                            className="Zi Zi--Live" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                            <path
                                d="M13.693 10.354l1.634-7.542c.195-.901-.16-1.083-.798-.39l-9.18 9.97c-.638.693-.377 1.254.582 1.254h5.376l-1.634 7.542c-.195.901.16 1.083.798.39l9.18-9.97c.638-.693.377-1.254-.582-1.254h-5.376z">
                            </path>
                        </svg>
                    </span>
                    <span className="GlobalSideBar-categoryLabel">
                        Live
                    </span>
                </a>
                </li>
            </ul>
        </div>
    )
}

/**
 * 我的收藏
 */
function RightFour() {
    return (
        <div className="Card">
            <ul className="GlobalSideBar-navList">
                <li className="GlobalSideBar-navItem GlobalSideBar-starItem">
                    <a target="_blank" data-za-not-track-link="true" type="button" className="Button GlobalSideBar-navLink Button--plain" href="#collections/mine">
                        <svg className="Zi Zi--Star GlobalSideBar-navIcon" fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
                            <path
                                d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                                fill-rule="evenodd">
                            </path>
                        </svg>
                        <span className="GlobalSideBar-navText">
                            我的收藏
                        </span>
                        <span className="GlobalSideBar-navNumber">
                            0
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

function RightAll() { 

    return (
        <div className="GlobalSideBar GlobalSideBar--old" data-za-detail-view-path-module="RightSideBar" data-za-extra-module="{}">
            <div>
                <div className="Sticky">
                    <RightOne></RightOne>
                    <RightTwo></RightTwo>
                    <RightThree></RightThree>
                    <RightFour></RightFour>
                    <FooterInfo footer={footer} />
                </div>
            </div>
        </div>
    )
}
export {
    RightAll
} 