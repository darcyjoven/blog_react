/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-19 12:36:16
 * @FilePath: /blog_react_js/src/state/reducer/index.js
 * @Description: 
 */
import { ReallAll,CommentShow,NextPage } from '../action/actiontype'

export const reducer = (state, action) => {
    switch (action.type) {
        case ReallAll:
            let newstate = JSON.parse(JSON.stringify(state))
            for (let i=0;i<newstate.article.length;i++){
                if (newstate.article[i].id===action.id){
                    newstate.article[i].expanded=!newstate.article[i].expanded  
                }
            }
            return newstate
        case CommentShow:
            return !state 
        case NextPage:
            console.log(" you cliked button nextpage "+JSON.stringify(state))
            let statepage = state
            statepage.currentPage = action.page
            return statepage
        default:
            return state
    }
}