import './Card.scss';
import {IOrder} from "../utils/types";

type Props = Pick<IOrder, "name" | "image" | "price"> & {
    onClickCart: ({name, image, price}) => void;
};

export function Card({name, image, price, onClickCart}: Props) {
    function handleBuyClick() {
        onClickCart({name, image, price});
    }

    return (
        <div className={'card'}>
            <img src={image} className={'card__image'} alt={`card ${name}`}/>
            <div className={'card__container'}>
                <p className={'card__name'}>{`${name} ${price} ₽`}</p>
                <button className={'card__buy-button'} onClick={handleBuyClick}></button>
            </div>
        </div>
    );
};