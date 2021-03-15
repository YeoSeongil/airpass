import { Items } from "../ItemDis";
import { ADD_ITEM, DEL_ITEM, SEARCH_ITEM } from "./_types";

let nextId = 0;

export const addCart = (item:Items) => {
    return {
        type:ADD_ITEM,
        payload:{
            id:nextId++,
            item
        }
    }
}

export const delCart = (item:Items) => {
    return {
        type:DEL_ITEM,
        payload:item
    }
}

export const searchItem = (item:Items, input:any) => {
    return {
        type:SEARCH_ITEM,
        payload:{
            id:nextId++,
            input,
            item
        }
    }
}

export type ActionTypes = ReturnType<typeof addCart>
 | ReturnType<typeof delCart>
 | ReturnType<typeof searchItem>

