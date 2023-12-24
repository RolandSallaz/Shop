import './Footer.scss';
import tg from '../assets/tg.svg';
import gh from '../assets/gh.svg';
import vk from '../assets/vk.svg';

export function Footer() {
    return (
        <footer className={'footer'}>
            <p className={'footer__text'}>Соц сети</p>
            <ul className={'social__list'}>
                <li className={'social__list__item'}><a target='_blank' href='https://vk.com/id117621940'><img alt={'vk image'} src={vk}></img></a></li>
                <li className={'social__list__item'}><a target='_blank' href='https://t.me/RSallaz'><img alt={'tg image'} src={tg}></img></a></li>
                <li className={'social__list__item'}><a target='_blank' href='https://github.com/RolandSallaz'><img alt={'gh image'} src={gh}></img></a></li>
            </ul>
        </footer>
    );
};