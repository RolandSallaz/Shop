import './Search.scss'
type Props = {

};

export function Search(props: Props) {
    return (
        <label className={'search'}>
            <div className={'search__image'}/>
            <input placeholder={'Поиск'} className={'search__input'}/>
        </label>
    );
};