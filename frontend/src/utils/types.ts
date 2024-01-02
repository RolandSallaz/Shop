import {orderStatus} from "./enums";

export interface IOrder {
    status?: orderStatus,
    orderNumber?: number,
    price: number,
    orderDate?: Date,
    name: string,
    image: string,
}

export type ICard = Pick<IOrder, "name" | "image" | "price">;