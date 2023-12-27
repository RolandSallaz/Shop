import './Card.scss';

interface Props {
    name: string
    image: string
    price: number
}

export function Card({name, image, price}: Props) {
    return (
        <div className={'card'}>
            <img src={image} className={'card__image'} alt={`card ${name}`}/>
            <div className={'card__container'}>
                <p className={'card__name'}>{`${name} ${price}₽`}</p>
                <button className={'card__buy-button'}></button>
            </div>
        </div>
    );
};