import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

function Sidebar1() {
    return <div className={cx('wapper')}>Sidebar1</div>;
}

export default Sidebar1;
