import { Context } from '../../state/context'
import { useContext } from 'react'
import { Expanded, Noexpanded } from './ArticleDetail';
export const ArticleAll = props => {
    const { state: { article: articleList } } = useContext(Context)

    return (
        <div id="TopstoryContent" className="Topstory-content">
            <div className="ListShortcut">
                <div className="Topstory-recommend" data-zop-feedlistfather="0">
                    {articleList.length > 0 ? articleList.map(article => (article.expanded ? <Expanded article={article} /> : <Noexpanded article={article} />)) : <p>正在加载...</p>}
                </div>
            </div>
        </div>
    )
}