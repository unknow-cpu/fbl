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

export default Sidebar;

// .wapper {
//     height: 1000px;
//     width: 24%;
//     display: flex;
//     box-sizing: border-box;
//     z-index: 0;
//     flex-basis: 360px;
//     flex-shrink: 9999;
//     max-height: 0;
//     max-width: 360px;
//     min-height: inherit;
//     min-width: 280px;
//     overflow-x: hidden;
//     overflow-y: hidden;
//     overflow-anchor: none;
//     position: sticky;
//     top: var(--header-height);
// }

// .wapper1 {
//     box-sizing: border-box;
//     position: relative;
//     z-index: 0;
//     display: flex;
//     flex-direction: column;
//     min-height: inherit;
//     overflow-x: hidden;
//     overflow-y: auto;
//     scrollbar-width: none;
//     flex-grow: 1;
//     flex-shrink: 1;
//     min-height: 0;
//     perspective: 1px;
//     perspective-origin: right top;
//     transform-style: preserve-3d;
//     overscroll-behavior-y: contain;
//     will-change: transform, scroll-position;
// }

// .wapper1::-webkit-scrollbar {
//     display: none;
//     height: 0;
//     width: 0;
// }

// .menu-sidebar {
//     flex-direction: column;
//     display: flex;
//     position: relative;
//     flex-grow: 1;
// }

// .menu1-sidebar {
//     margin-top: 16px;
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     flex-grow: 1;
//     font-family: inherit;
//     min-height: 100%;
// }

// .a-menuacc {
//     border-bottom-color: var(--always-dark-overlay);
//     border-top-color: var(--always-dark-overlay);
//     border-right-color: var(--always-dark-overlay);
//     border-left-color: var(--always-dark-overlay);
//     border-top-style: solid;
//     border-right-style: solid;
//     border-bottom-style: solid;
//     border-left-style: solid;
//     border-top-width: 0;
//     border-right-width: 0;
//     border-bottom-width: 0;
//     border-left-width: 0;
//     cursor: pointer;
//     flex-basis: auto;
//     flex-shrink: 0;
//     list-style: none;
//     margin-top: 0;
//     margin-right: 0;
//     margin-bottom: 0;
//     margin-left: 0;
//     min-height: 0;
//     padding-top: 0;
//     padding-right: 0;
//     padding-bottom: 0;
//     padding-left: 0;
//     position: relative;
//     text-align: inherit;
//     text-decoration: none;
//     touch-action: manipulation;
//     -webkit-tap-highlight-color: transparent;
//     background-color: transparent;
//     border-bottom-style: solid;
//     align-items: stretch;
//     border-bottom-width: 0;
//     flex-direction: row;
//     border-top-left-radius: 8px;
//     border-top-right-radius: 8px;
//     border-bottom-right-radius: 8px;
//     border-bottom-left-radius: 8px;
//     z-index: 0;
//     display: block;
//     outline-style: none;
// }

// .menuacc1 {
//     display: flex;
//     align-items: center;
//     flex-direction: row;
//     flex-grow: 1;
//     flex-shrink: 1;
//     justify-content: space-between;
//     border-bottom-style: solid;
//     border-bottom-width: 0;
//     border-right-style: solid;
//     border-right-width: 0;
//     border-left-style: solid;
//     border-left-width: 0;
//     border-top-style: solid;
//     border-top-width: 0;
//     box-sizing: border-box;
//     margin-right: 0;
//     margin-right: 0;
//     margin-left: 0;
//     margin-top: 0;
//     min-width: 0;
//     padding-right: 8px;
//     padding-left: 8px;
//     padding-top: 0;
//     position: relative;
//     z-index: 0;
//     min-height: 52px;
//     max-height: 52px;
// }

// .menuacc2 {
//     align-self: center;
//     vertical-align: bottom;
//     z-index: 0;
//     position: relative;
// }

// .avt-menuacc {
//     display: flex;
//     flex-direction: column;
//     margin-right: 12px;
//     margin-bottom: 8px;
//     margin-top: 8px;
//     margin-right: 12px;
//     margin-left: 0px;
//     position: relative;
// }
// .avt-menuacc:hover {
//     background-color: #d7d8de;
// }

// .svgmenuacc1 {
//     vertical-align: bottom;
// }
// .menuacc-g {
//     stroke-width: 2;
//     fill: none;
//     stroke: var(--media-inner-border);
// }

// .menuacc-name {
//     display: flex;
//     align-items: center;
//     align-self: stretch;
//     flex-direction: row;
//     justify-content: space-between;
//     border-right-style: solid;
//     border-left-style: solid;
//     border-bottom-style: solid;
//     border-top-style: solid;
//     border-left-width: 0;
//     border-right-width: 0;
//     border-top-width: 0;
//     border-bottom-width: 0;
//     padding-left: 0;
//     padding-right: 0;
//     padding-top: 0;
//     padding-bottom: 0;
//     flex-shrink: 1;
//     flex-grow: 1;
//     min-width: 0;
//     min-height: 0;
//     margin-top: 0;
//     margin-bottom: 0;
//     margin-left: 0;
//     z-index: 0;
//     box-sizing: border-box;
//     position: relative;
// }

// .menuacc-name1 {
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     border-right-style: solid;
//     border-left-style: solid;
//     border-bottom-style: solid;
//     border-top-style: solid;
//     border-left-width: 0;
//     border-right-width: 0;
//     border-top-width: 0;
//     border-bottom-width: 0;
//     padding-left: 0;
//     padding-right: 0;
//     padding-top: 0;
//     padding-bottom: 0;
//     flex-shrink: 1;
//     flex-grow: 1;
//     min-width: 0;
//     min-height: 0;
//     margin-top: 0;
//     margin-bottom: 0;
//     margin-left: 0;
//     z-index: 0;
//     box-sizing: border-box;
//     position: relative;
// }

// .menuacc-name2 {
//     display: flex;
//     flex-direction: column;
//     margin-bottom: -5px;
//     margin-top: -5px;
// }
// .menuacc-name3 {
//     margin-bottom: 5px;
//     margin-top: 5px;
// }

// .menuacc-name4 {
//     text-align: left;
//     min-width: 0;
//     word-wrap: break-word;
//     display: block;
//     max-width: 100%;
//     min-width: 0;
//     word-break: break-word;
//     font-weight: 500;
//     color: var(--primary-text);
//     line-height: 1.3333;
//     margin-top: -5px;
//     margin-bottom: -4px;
// }
// .menuacc-name5 {
//     -webkit-box-orient: vertical;
//     // -webkit-line-clamp: 2;
//     display: -webkit-box;
// }