/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-15 18:20:38
 * @FilePath: /blog_react_js/src/state/action/index.js
 * @Description: 
 */
import { ReallAll,CommentShow } from './actiontype'
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