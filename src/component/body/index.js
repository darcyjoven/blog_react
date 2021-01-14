import {RightAll} from './right'
import {OrderBy} from './order'
import {orderbyDemo} from '../../demodata'
import {ArticleAll} from './ArticleAll'

export const BodyAll = props => (
    <div className="Topstory Topstory--old">
        <div className="Topstory-container">
            {/* 文章列表card  start */}
            <div className="Topstory-mainColumn">
                <div className="Topstory-mainColumnCard">
                    {/* 排序按钮 */}
                    <div className="Card Topstory-noMarginCard Topstory-tabCard">
                        <OrderBy orderbys={orderbyDemo}></OrderBy>
                    </div>
                    {/* 文章内容start */}
                    <ArticleAll  />
                    {/* 文章内容end */}
                </div>
            </div>
            {/* 文章列表card end */}
            {/* 右侧内容start */}
            <RightAll />
            {/* 右侧内容end */}
        </div>
    </div>
)