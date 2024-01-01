import './Order.scss';
import {orderStatus} from "../utils/enums";


type Props = {
    status: orderStatus,
    orderNumber: number,
    price: number,
    orderDate: Date,
    name: string,
    image: string,
};

export function Order({status, orderNumber, price, orderDate, name, image}: Props) {
    return (
        <div className={'order'}>
            <img src={image} className={'order__image'}/>
            <div className={'order__container'}>
                <p className={'order__text order__text_name'}>{name}</p>
                <p className={'order__text'}>{`Номер заказа: ${orderNumber}`}</p>
                <p className={'order__text'}>{`Время заказа: ${orderDate}`}</p>
                <p className={`order__text order__status_${status.replace(' ','')}`}>{status}</p>
            </div>
            <p className={'order__text order__text_price'}>{`${price} ₽`}</p>
        </div>
    );
};