import './Main.scss';
import {Card} from "./Card";
import {useState} from "react";
import {Order} from "./Order";
import {ICard} from "../utils/types";

type Props = {};

export function Main(props: Props) {
    const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false);
    const [itemsInCart, setItemsInCart] = useState<ICard[]>([])

    function onBuyCardClick(card: ICard) {
        setItemsInCart((prev) => [...prev, card])
    }

    function deleteItemFromCart(card: ICard) {
        setItemsInCart(prev => prev.filter((item) => item.name != card.name));
    }


    return (
        <main className={'main'}>
            <section className={'cards'}>
                <Card name={'Rtx 4090'}
                      image={'https://avatars.mds.yandex.net/get-mpic/7394206/img_id5984784127821465102.jpeg/600x600'}
                      price={10}
                      onClickCart={onBuyCardClick}
                />
                <Card name={'Коробка'}
                      image={'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-a-carton-package-goods-commodity-png-image_356642.jpg'}
                      price={0}
                      onClickCart={onBuyCardClick}
                />
                <Card name={'Амогус'}
                      image={'https://catalog.detmir.st/media/oLw7dc73RVp9Mko4JUXJJPFvWrVHNni6bZhK3KElpxU=?preset=site_product_gallery_r1500'}
                      price={15}
                      onClickCart={onBuyCardClick}
                />
                <Card name={'Gibson Thunderbird'}
                      image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                      price={1}
                      onClickCart={onBuyCardClick}
                />
                <Card name={'Gibson Thunderbird'}
                      image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                      price={1}
                      onClickCart={onBuyCardClick}
                />
            </section>
            {itemsInCart.length > 0 && (
                <div className={'cart'}>
                    <button className={'cart__button'}
                            onClick={() => setIsCartMenuOpen((prev) => !prev)}>{itemsInCart.length > 0 && itemsInCart.length}</button>
                    {isCartMenuOpen && (
                        <ul className={'cart__container'}>
                            {
                                itemsInCart.map((item, index) => (
                                    <li key={index}>
                                        <Order
                                            price={item.price}
                                            canDelete={deleteItemFromCart}
                                            name={item.name}
                                            image={item.image}/>
                                    </li>
                                ))
                            }
                            <div className={'cart__info'}>
                                <p className={'cart__text'}>{`В корзине ${itemsInCart.length} товаров на сумму ${itemsInCart.reduce((accumulator: number, currentValue) => accumulator + currentValue.price, 0)} ₽`}</p>
                                <button className={'cart__button_buy button'}>Оформить заказ</button>
                            </div>
                        </ul>
                    )}
                </div>)}
        </main>
    );
}