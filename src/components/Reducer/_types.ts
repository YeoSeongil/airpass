export const ADD_ITEM = "_types/ADD_ITEM" as const
export const DEL_ITEM = "_types/DEL_ITEM" as const
export const SEARCH_ITEM = "_types/SEARCH_ITEM" as const

export type ItemState = {
    id: number;
    product_name: string;
    price: number;
    product_img: string;
    is_checked: boolean;
    input?:string;
};

export type initItemState = ItemState[];
