import classNames from 'classnames/bind';
import style from './Sidebar.module.scss';
const cx = classNames.bind(style);

function Sidebar() {
    return (
        <div className={cx('wapper')}>
            <div className={cx('wapper1')}>
                <div className={cx('menu-sidebar')}>
                    <div className={cx('menu1-sidebar')}>
                        <MenuAcc></MenuAcc>
                        <MenuAcc1></MenuAcc1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

function MenuAcc() {
    var nameacc = 'man';
    var linkacc = 'localhost:3000/' + nameacc;
    const lista = (
        <li>
            <div style={{ paddingLeft: 8, paddingRight: 8 }}>
                <a className={cx('a-menuacc')} href={nameacc} role="link" tabIndex="0">
                    <div className={cx('menuacc1')}>
                        <div className={cx('avt-menuacc')}>
                            <div className={cx('menuacc2')}>
                                <svg
                                    className={cx('svgmenuacc1')}
                                    aria-hidden="true"
                                    data-visualcompletion="ignore-dynamic"
                                    role="none"
                                    style={{ height: 36, width: 36 }}
                                >
                                    <mask id=":Rmcmlaaj9aqqd9emhpapd5aq:">
                                        <circle cx="18" cy="18" fill="white" r="18"></circle>
                                    </mask>
                                    <g mask="url(#:Rmcmlaaj9aqqd9emhpapd5aq:)">
                                        <image
                                            style={{ height: 36, width: 36 }}
                                            x="0"
                                            y="0"
                                            height="100%"
                                            preserveAspectRatio="xMidYMid slice"
                                            width="100%"
                                            xlinkHref="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=AOBsKHyRwnQAX-c2axz&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAslOXzxOGTZyFDtxrgAaoT5miMAqRERjAYfKj9azcrBQ&oe=65155BB8"
                                        ></image>
                                        <circle className={cx('menuacc-g')} cx="18" cy="18" r="18"></circle>
                                    </g>
                                </svg>
                            </div>
                        </div>
                        <div className={cx('menuacc-name')}>
                            <div className={cx('menuacc-name1')}>
                                <div>
                                    <div className={cx('menuacc-name2')}>
                                        <div className={cx('menuacc-name3')}>
                                            <span className={cx('menuacc-name4')} dir="auto">
                                                <span className={cx('menuacc-name5')}>{nameacc}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    );
    return <ul style={{ listStyle: 'none' }}>{lista}</ul>;
}
const menu = [
    {
        id: 1,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: -304,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'frends',
        name: 'Tìm bạn bè',
    },
    {
        id: 2,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: -190,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'saved',
        name: 'Đã lưu',
    },
    {
        id: 3,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: -456,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'onthisday',
        name: 'Kỷ niệm',
    },
    {
        id: 4,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: -38,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'ground',
        name: 'Nhóm',
    },
    {
        id: 5,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: -342,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'ẽplore',
        name: 'Chiến dịch gây quỹ',
    },
    {
        id: 6,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: -76,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'gaming',
        name: 'Chơi game',
    },
    {
        id: 7,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/yV/r/h3PaFxa04y3.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: 0,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'messanges',
        name: 'Messenger',
    },
    {
        id: 8,
        sty1: {
            backgroundImage: `url(
                https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/mruGO7HkgS-.png
            )`,
            backgroundPositionX: 0,
            backgroundPositionY: 0,
            backgroundSize: '38px, 570px',
            width: 36,
            height: 36,
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
        },
        href: 'events',
        name: 'Sự kiện',
    },
];

function MenuAcc1() {
    const lista = menu.map((menu) => (
        <li key={menu.id}>
            <div data-visualcompletion="ignore-dynamic" style={{ paddingLeft: 8, paddingRight: 8 }}>
                <a className={cx('a-menuacc')} href={menu.href} role="link" tabIndex="0">
                    <div className={cx('menuacc1')}>
                        <div className={cx('avt-menuacc')}>
                            <div className={cx('menuacc2')}>
                                <i
                                    data-visualcompletion="css-img"
                                    className={cx('menuacc-namei')}
                                    style={menu.sty1}
                                ></i>
                            </div>
                        </div>
                        <div className={cx('menuacc-name')}>
                            <div className={cx('menuacc-name1')}>
                                <div>
                                    <div className={cx('menuacc-name2')}>
                                        <div className={cx('menuacc-name3')}>
                                            <span className={cx('menuacc-name4')} dir="auto">
                                                <span className={cx('menuacc-name5')}>{menu.name}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </li>
    ));
    return (
        <div>
            <ul style={{ listStyle: 'none' }}>{lista}</ul>
        </div>
    );
}
