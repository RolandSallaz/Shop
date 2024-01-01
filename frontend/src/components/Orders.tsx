import './Orders.scss';
import {Order} from "./Order";
import {orderStatus} from "../utils/enums";

type Props = {};

export function Orders(props: Props) {
    return (
        <main className={'orders'}>
            <Order price={3}
                   image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                   status={orderStatus.ONTHEWAY}
                   orderNumber={1}
                   orderDate={Date.now()}
                   name={'Test'}
            />
            <Order price={3}
                   image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                   status={orderStatus.CANCELED}
                   orderNumber={1}
                   orderDate={Date.now()}
                   name={'Test'}
            />
            <Order price={3}
                   image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                   status={orderStatus.COMPLETE}
                   orderNumber={1}
                   orderDate={Date.now()}
                   name={'Test'}
            />
            <Order price={3}
                   image={'https://parkwaymusic.com/cdn/shop/files/GibsonNon-ReverseThunderbird-SparklingBurgundy-4_36796db6-f913-4612-979c-8878f7210d3f.jpg?v=1695667500'}
                   status={orderStatus.COMPLETE}
                   orderNumber={1}
                   orderDate={Date.now()}
                   name={'Test'}
            />
        </main>
    );
};