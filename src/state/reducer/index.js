/*
 * @Date: 2021-01-12 09:05:28
 * @LastEditors: Darcy
 * @LastEditTime: 2021-01-15 14:22:52
 * @FilePath: /blog_react_js/src/state/reducer/index.js
 * @Description: 
 */
import { ReallAll } from '../action/actiontype'

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
        default:
            return state
    }
}