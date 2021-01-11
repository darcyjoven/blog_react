import { ReallAll } from '../action/actiontype'

export const reducer = (state, action) => {
    switch (action.type) {
        case ReallAll:
            let newstate = JSON.parse(JSON.stringify(state))
            for (let i=0;i<newstate.article.length;i++){
                if (newstate.article[i].id===action.id){
                    newstate.article[i].expanded=!newstate.article[i].expanded
                    console.log("id is "+action.id+" now is  "+newstate.article[i].expanded)
                }
            }
            return newstate
        default:
            return state
    }
}