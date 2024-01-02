import './Order.scss';
import {ICard, IOrder} from "../utils/types";


type Props = IOrder & {
    canDelete?: ({name, image, price}: ICard) => void
};

export function Order({status, orderNumber, price, orderDate, name, image, canDelete}: Props) {
    function handleDeleteClick() {
        canDelete!({image, name, price});
    }

    return (
        <div className={'order'}>
            {canDelete && (<button className={'order__delete-button'} onClick={handleDeleteClick}>X</button>)}
            <img src={image} className={'order__image'}/>
            <div className={'order__container'}>
                <p className={'order__text order__text_name'}>{name}</p>
                {orderNumber && (<p className={'order__text'}>{`Номер заказа: ${orderNumber}`}</p>)}
                {orderDate && (<p className={'order__text'}>{`Время заказа: ${orderDate}`}</p>)}
                <p className={`order__text order__status_${status?.replace(' ', '')}`}>{status}</p>
            </div>
            <p className={'order__text order__text_price'}>{`${price} ₽`}</p>
        </div>
    );
};