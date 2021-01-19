/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-19 13:04:21
 * @FilePath: /blog_react_js/src/state/reducer/index.js
 * @Description: 
 */
import { ReallAll,CommentShow,NextPage } from '../action/actiontype'

export const reducer = (state, action) => {
    let newstate = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case ReallAll: 
            for (let i=0;i<newstate.article.length;i++){
                if (newstate.article[i].id===action.id){
                    newstate.article[i].expanded=!newstate.article[i].expanded  
                }
            } 
            break
        case CommentShow:
            newstate.commentshow=!newstate.commentshow  
            break
        case NextPage:  
            // console.log("cliked and this currentPage is "+action.page);
            (action.page <= newstate.countPages)&&(newstate.currentPage = action.page);
            // console.log("cliked after  "+JSON.stringify(newstate));
            break
        default:
            break
    }
    return newstate
}