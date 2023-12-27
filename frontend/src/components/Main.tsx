import './Main.scss';
import {Card} from "./Card";

type Props = {};

export function Main(props: Props) {
    return (
        <main className={'main'}>
            <section className={'cards'}>
                <Card name={'Rtx 4090'}
                      image={'https://avatars.mds.yandex.net/get-mpic/7394206/img_id5984784127821465102.jpeg/600x600'}
                      price={10}/>
                <Card name={'Коробка'}
                      image={'https://png.pngtree.com/png-vector/20190115/ourmid/pngtree-a-carton-package-goods-commodity-png-image_356642.jpg'}
                      price={0}/>
                <Card name={'Амогус'}
                      image={'https://catalog.detmir.st/media/oLw7dc73RVp9Mko4JUXJJPFvWrVHNni6bZhK3KElpxU=?preset=site_product_gallery_r1500'}
                      price={15}/>
                <Card name={'Gibson Thunderbird'}
                      image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                      price={1}/>
            </section>
        </main>
    );
}