import { ReallAll } from './actiontype'
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