/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-21 12:11:18
 * @FilePath: /blog_react_js/src/state/action/index.js
 * @Description: 
 */
import { ReallAll,CommentShow,NextPage,CommentReadAll } from './actiontype'
/**
 * 阅读全文
 * @param   id 
 */
export const ReadAllAction = id => {
    return {
        type: ReallAll,
        id: id
    }
}

export const CommentShowAction = () => {
    return {
        type: CommentShow
    } 
}
export const NextPageAction = page =>(
    {
        type:NextPage,
        page:page,
    }
)
export const CommentReadAllAction = page =>(
    {
        type:CommentReadAll, 
    }
)