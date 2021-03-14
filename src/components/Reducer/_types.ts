export const ADD_ITEM = "_types/ADD_ITEM" as const
export const DEL_ITEM = "_types/DEL_ITEM" as const

export type ItemState = {
    id: number;
    product_name: string;
    price: number;
    product_img: string;
    is_checked: boolean;
};

export type initItemState = ItemState[];
