import { FooterInfo } from '../foot'
import { footerInfo as footer, myIntroduce, types, myTags, myHotList } from '../../demodata'
/**
 * 上方个人介绍
 * @param {*} props 
 * @param {*} props.myIntroduce 
 */
const RightOne = (props) => {

    return (
        <div className="Card GlobalWrite GlobalWrite--old">
            {/* 右1回答问题  */}
            <div class="GlobalWrite-navTop">
                {
                    props.myIntroduce.map(item => (
                        <a class="GlobalWrite-topItem" key={item.id} target="_blank" rel="noopener noreferrer" title="回答" href>
                            <div width="40" height="40" viewBox="0 0 40 40" class="GlobalWrite-navIcon" fill="currentColor" >
                                <div dangerouslySetInnerHTML={{ __html: item.img }} />
                                <div class="GlobalWrite-topTitle">{item.text}</div>
                            </div>
                        </a>
                    ))
                }
            </div>
            {/* 稍后答 */}
            {/* 
            <div className="Card GlobalWrite GlobalWrite--old">
                <div className="GlobalWrite-navBottom"> 
                    <a className="GlobalWrite-navDraft" href="#draft" target="_blank" rel="noopener noreferrer"
                        title="草稿" data-za-not-track-link="true">
                        <div className="GlobalWrite-navWrapper">
                            <div className="GlobalWrite-navTitle">草稿箱</div>
                        </div>
                    </a> 
                    <a className="GlobalWriteAnswerLater GlobalWrite-answerLater"
                        href="#question/later" target="_blank" title="稍后答" data-za-detail-view-id="5370"
                        style={{ transform: "scale(1)" }} >
                        <div className="GlobalWrite-navWrapper">
                            <div className="GlobalWrite-navTitle">稍后答</div>
                        </div>
                    </a>
                </div>
            </div>
            */}
        </div>
    )
}
/**
 * 标签云
 * @param {*} props 
 * @param {*} props.tags 
 */
const TagCloud = (props) => {
    return (
        <div className="Card GlobalWrite GlobalWrite--old">
            <div className="GlobalWrite-navBottom">
                <div id="Card-Tags-Cloud">
                    {
                        props.tags.map(item => (
                            <div class="Card-Tags-Cloud-Item GlobalWrite-answerLater">
                                <a className="GlobalWrite-navTitle" key={item.id} href={item.link} target="_blank" rel="noreferrer" title={item.text} >
                                    {item.text}
                                </a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

/**
 * 创作中心模块
 */
function RightTwo() {
    return (
        <div className="Card CreatorEntrance GlobalSideBar-creator">
            {
                myHotList.map(
                    item => (
                        <HotLists key={item.id} img={item.img} text={item.text} link={item.link} />
                    )
                )
            }
        </div>
    )
}

/**
 * 推荐文章
 * @param {*} props 
 * @param {*} props.img 
 * @param {*} props.text 
 * @param {*} props.link 
 */
const HotLists = (props) => (
    <a
        className="CreatorEntrance-link CreatorEntrance-Link--smallIcon" href={props.link} target="_blank"
        data-za-detail-view-id="6848">
        <div className="CreatorEntrance-hint ProfileSideCreator-creatorEntranceHint CreatorEntrancePage-hint--smallIcon">
            <div dangerouslySetInnerHTML={{ __html: props.img }} >
                
            </div>
            <div className="CreatorEntrance-text">
                <div className="CreatorEntrance-indexPageTitle">
                    <div className="css-3j2kqe">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    </a>
)


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
 *
 * @param {*} props
 */
const ArtType = (props) => (
    <li className="GlobalSideBar-navItem GlobalSideBar-starItem">
        <a target="_blank" data-za-not-track-link="true" type="button" className="Button GlobalSideBar-navLink Button--plain" href="#collections/mine">
            <div dangerouslySetInnerHTML={{ __html: props.img }} />

            <span className="GlobalSideBar-navText">
                {props.text}
            </span>
            <span className="GlobalSideBar-navNumber">
                {props.nums}
            </span>
        </a>
    </li>
)
/**
 * 文章分类
 * @param {*} props
 * @param {*} props.articleTypes
 */
const RightFour = (props) => {
    return (
        <div className="Card">
            <ul className="GlobalSideBar-navList">
                {
                    props.articleTypes.map(item => (
                        <ArtType text={item.text} nums={item.nums} key={item.id} img={item.img} />
                    ))
                }
            </ul>
        </div>
    )
}


/**
 * 右侧所有内容，只需要加载一次，不会需要互动
 * @param {*} props
 */
const RightAll = (props) => {

    return (
        <div className="GlobalSideBar GlobalSideBar--old" data-za-detail-view-path-module="RightSideBar" data-za-extra-module="{}">
            <div>
                <div className="Sticky">
                    <RightOne myIntroduce={myIntroduce}></RightOne>
                    <TagCloud tags={myTags} />
                    <RightTwo myHotList={myHotList}></RightTwo>
                    {/* <RightThree></RightThree> */}
                    <RightFour articleTypes={types}></RightFour>
                    <FooterInfo footer={footer} />
                </div>
            </div>
        </div>
    )
}

export {
    RightAll
} 