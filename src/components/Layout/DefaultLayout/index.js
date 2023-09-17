import classNames from 'classnames/bind';
import Header from '../components/Header/Header';
import style from './DefaultLayout.module.scss';
import Sidebar from './Sidebar/Sidebar';
import Sidebar1 from './Sidebar1/Sidebar';
const cx = classNames.bind(style);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wapper')}>
            <Header />

            <div className={cx('container')}>
                <div className={cx('container1')}>
                    <Sidebar />
                    <div className={cx('conten')}>{children}</div>
                    <Sidebar1 />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
