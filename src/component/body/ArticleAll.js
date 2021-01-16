/*
 * @Date: 2021-01-16 09:51:11
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-16 10:35:19
 * @FilePath: /blog_react_js/src/component/body/ArticleAll.js
 * @Description: 
 */
import { Context } from '../../state/context'
import { useContext } from 'react'
import { ArticleItem } from './ArticleDetail';
export const ArticleAll = props => {
    const { state: { article: articleList } } = useContext(Context)

    return (
        <div id="TopstoryContent" className="Topstory-content">
            <div className="ListShortcut">
                <div className="Topstory-recommend" data-zop-feedlistfather="0">
                    {/* {articleList.length > 0 ? articleList.map(article => (article.expanded ? <Expanded article={article} /> : <Noexpanded article={article} />)) : <p>正在加载...</p>} */}
                    {articleList.length > 0 ?articleList.map(article => (<ArticleItem article={article} />)):(<p>正在加载...</p>)}
                </div>
            </div>
        </div>
    )
}