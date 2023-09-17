import classNames from 'classnames/bind';
import React, { useState } from 'react';
import style from './Home.module.scss';
const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('Centerpage')}>
            <CenterPage></CenterPage>
        </div>
    );
}

function CenterPage() {
    var name = 'man';
    const [postEle, setpostEle] = useState([]);
    const [islike, setIslike] = useState(false);
    var likesty = {
        backgroundImage: `url(https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/shzFU_6ZHy9.png')`,
        backgroundPosition: '-64px -132px',
        backgroundSize: '190px 190px',
        width: '18px',
        height: '18px',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        WebkitFilter: 'var(--filter-accent)',
    };
    var likesty3 = {};
    var likesty2 = { color: 'var(--primary-button-background)' };
    var likesty1 = {
        backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/shzFU_6ZHy9.png')`,
        backgroundPosition: '-84px -132px',
        backgroundSize: '190px 190px',
        width: '18px',
        height: '18px',
        backgroundRepeat: 'no-repeat',
        display: 'inline-block',
        WebkitFilter: 'var(--filter-secondary-icon)',
    };
    function likeClick() {
        setIslike(!islike);
    }
    let Ele = (
        <div className={cx('post-div')}>
            <div role="feed">
                <div style={{ display: 'block' }}>
                    <div className={cx('post-div1')}>
                        <div style={{ position: 'relative', zIndex: '0' }}>
                            <div
                                aria-posinset="1"
                                aria-describedby=":r6t4: :r6t5: :r6t6: :r6t8: :r6t7:"
                                aria-labelledby=":r6t3:"
                                style={{ outline: 'none' }}
                                role="article"
                            >
                                <div className={cx('post-div2')}>
                                    <div
                                        className={cx('post-div3')}
                                        style={{
                                            borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px',
                                        }}
                                    >
                                        <div>
                                            <div className={cx('post-header')}>
                                                <div className={cx('post-header1')}>
                                                    <div className={cx('post-header11')} aria-hidden="true">
                                                        <a className={cx('post-header11-a')} tabIndex="0">
                                                            <svg
                                                                aria-hidden="true"
                                                                className={cx('x3ajldb')}
                                                                data-visualcompletion="ignore-dynamic"
                                                                role="none"
                                                                style={{
                                                                    height: '40px',
                                                                    width: '40px',
                                                                }}
                                                            >
                                                                <mask id=":r2t4:">
                                                                    <circle
                                                                        cx="20"
                                                                        cy="20"
                                                                        fill="white"
                                                                        r="20"
                                                                    ></circle>
                                                                </mask>
                                                                <g mask="url(#:r2t4:)">
                                                                    <image
                                                                        x="0"
                                                                        y="0"
                                                                        height="100%"
                                                                        preserveAspectRatio="xMidYMid slice"
                                                                        width="100%"
                                                                        xlinkHref="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=AOBsKHyRwnQAX-c2axz&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAslOXzxOGTZyFDtxrgAaoT5miMAqRERjAYfKj9azcrBQ&oe=65155BB8"
                                                                        style={{
                                                                            height: '40px',
                                                                            width: '40px',
                                                                        }}
                                                                    ></image>
                                                                    <circle
                                                                        className={cx('post-header11-cir')}
                                                                        cx="20"
                                                                        cy="20"
                                                                        r="20"
                                                                    ></circle>
                                                                </g>
                                                            </svg>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className={cx('post-header2')}>
                                                    <div className={cx('post-header21')}>
                                                        <span className={cx('post-header21-span')}>
                                                            <span className={cx('post-header21-span1')} dir="auto">
                                                                <strong>
                                                                    <span>
                                                                        <a
                                                                            className={cx('post-header21-span1-a')}
                                                                            href="https://www.facebook.com/le.tai.581730?__cft__[0]=AZV2gYcAyDX-3qfQrzO0wCJI7velOQxkmnivA7dUEWsBHhE8S2urTVW-dzoKBJ9ge3M0tk9vOW7_I8tVA88XOlNO7-HjIzyuYgTVzcNWjbaUM4FMOofKBk0h4ua6KoHhlFRBoE8HqEqimvy5SgLE1A0TmcnTnUnIZPUmzI6dKdhXGlvWnDUI0Ijib1BFiLSaHt1bqbVDe_xfoXh8eLR_FMR7&amp;__tn__=-]C%2CP-R"
                                                                            role="link"
                                                                            tabIndex="0"
                                                                        >
                                                                            <span className={cx('xt0psk2')}>
                                                                                <span>Lê Tài</span>
                                                                            </span>
                                                                        </a>
                                                                    </span>
                                                                </strong>{' '}
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={cx('post-header3')}></div>
                                                <div className={cx('post-header4')}>
                                                    <a
                                                        aria-label="hide post"
                                                        className={cx('post-header4-a')}
                                                        href="#"
                                                        role="link"
                                                        tabIndex="0"
                                                    >
                                                        <i
                                                            data-visualcompletion="css-img"
                                                            className={cx('post-header4-i')}
                                                            style={{
                                                                backgroundImage: `url(
                                                                                https://static.xx.fbcdn.net/rsrc.php/v3/yg/r/9gQ0B0O7X-A.png
                                                                            )`,
                                                                backgroundPosition: '-154px -88px',
                                                                backgroundSize: '190px 190px',
                                                                width: '20px',
                                                                height: '20px',
                                                                backgroundRepeat: 'no-repeat',
                                                                display: 'inline-block',
                                                            }}
                                                        ></i>
                                                        <div
                                                            className={cx('post-header4-div')}
                                                            data-visualcompletion="ignore"
                                                        ></div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div>
                                                <div
                                                    className={cx('post-center')}
                                                    dir="auto"
                                                    data-ad-comet-preview="message"
                                                    data-ad-preview="message"
                                                    id=":r2t0:"
                                                >
                                                    <div className={cx('post-center1')}>
                                                        <span className={cx('post-center-span')}>
                                                            <div className={cx('post-center-span-text')}>
                                                                <div
                                                                    className={cx('post-center-span-text1')}
                                                                    dir="auto"
                                                                    style={{ textAlign: 'start' }}
                                                                >
                                                                    hello world
                                                                </div>
                                                            </div>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div style={{ position: 'relative' }} id=":r2t0:">
                                                    <a className={cx('post-center1-a')} role="link" tabIndex="0">
                                                        <div
                                                            className={cx('post-center11')}
                                                            style={{
                                                                backgroundColor: 'rgb(255, 255, 255)',
                                                            }}
                                                        >
                                                            <div
                                                                style={{
                                                                    maxWidth: '100%',
                                                                    minWidth: '500px',
                                                                    width: 'calc((100vh + -325px) * 1.03818)',
                                                                }}
                                                            >
                                                                <div
                                                                    className={cx('post-center111')}
                                                                    style={{ paddingTop: '96.3227%' }}
                                                                >
                                                                    <div
                                                                        className={cx('post-center1111')}
                                                                        style={{
                                                                            height: '100%',
                                                                            left: '0%',
                                                                            width: 'calc(100%)',
                                                                        }}
                                                                    >
                                                                        <img
                                                                            height="812"
                                                                            width="843"
                                                                            alt="Có thể là hình ảnh về văn bản cho biết 'Tui làm mất quyển số 6. Hai tháng sau tui mới tìm thấy nó 9 8 7 5'"
                                                                            className={cx('post-center1111-img')}
                                                                            referrerPolicy="origin-when-cross-origin"
                                                                            src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/378320895_300289495943265_4969725458768193502_n.jpg?stp=cp6_dst-jpg_p843x403&_nc_cat=111&ccb=1-7&_nc_sid=5614bc&_nc_ohc=i4RF8qIES6IAX8D0ihf&_nc_ht=scontent.fhan14-4.fna&oh=00_AfDYOnbTY_ndqcnLDMsQN3PmvTPi0RggOQgs3xzXgFdsgw&oe=65091DFF"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className={cx('post-comment')}>
                                                <div style={{ position: 'relative' }}>
                                                    <div className={cx('post-comment1')}>
                                                        <div className={cx('post-comment1-item')}>
                                                            <div
                                                                className={cx('post-comment1-like')}
                                                                onClick={likeClick}
                                                            >
                                                                <div className={cx('post-comment1-item1')}>
                                                                    <div className={cx('post-comment1-item11')}>
                                                                        <i
                                                                            data-visualcompletion="css-img"
                                                                            className={cx('post-comment1-item11-i')}
                                                                            style={
                                                                                islike === false ? likesty1 : likesty
                                                                            }
                                                                        ></i>
                                                                    </div>
                                                                    <div
                                                                        className={cx('post-comment1-item11')}
                                                                        style={{ top: '2px' }}
                                                                    >
                                                                        <span
                                                                            className={cx('post-comment1-item11-span')}
                                                                            style={islike ? likesty2 : null}
                                                                        >
                                                                            Thích
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('post-comment1-item')}>
                                                            <div className={cx('post-comment1-like')}>
                                                                <div className={cx('post-comment1-item1')}>
                                                                    <div className={cx('post-comment1-item11')}>
                                                                        <i
                                                                            data-visualcompletion="css-img"
                                                                            className={cx('post-comment1-item11-i')}
                                                                            style={{
                                                                                backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/shzFU_6ZHy9.png')`,
                                                                                backgroundPosition: '-44px -132px',
                                                                                backgroundSize: '190px 190px',
                                                                                width: '18px',
                                                                                height: '18px',
                                                                                backgroundRepeat: 'no-repeat',
                                                                                display: 'inline-block',
                                                                            }}
                                                                        ></i>
                                                                    </div>
                                                                    <div
                                                                        className={cx('post-comment1-item11')}
                                                                        style={{ top: '2px' }}
                                                                    >
                                                                        <span
                                                                            className={cx('post-comment1-item11-span')}
                                                                        >
                                                                            Bình luận
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={cx('post-comment1-item')}>
                                                            <div className={cx('post-comment1-like')}>
                                                                <div className={cx('post-comment1-item1')}>
                                                                    <div className={cx('post-comment1-item11')}>
                                                                        <i
                                                                            data-visualcompletion="css-img"
                                                                            className={cx('post-comment1-item11-i')}
                                                                            style={{
                                                                                backgroundImage: `url('https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/shzFU_6ZHy9.png')`,
                                                                                backgroundPosition: '-104px -132px',
                                                                                backgroundSize: '190px 190px',
                                                                                width: '18px',
                                                                                height: '18px',
                                                                                backgroundRepeat: 'no-repeat',
                                                                                display: 'inline-block',
                                                                            }}
                                                                        ></i>
                                                                    </div>
                                                                    <div
                                                                        className={cx('post-comment1-item11')}
                                                                        style={{ top: '2px' }}
                                                                    >
                                                                        <span
                                                                            className={cx('post-comment1-item11-span')}
                                                                        >
                                                                            Chia sẻ
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className={cx('Centerpage1')}>
            <div className={cx('Centerpage2')}>
                <div className={cx('Centerpage3')}>
                    <div className={cx('Post')}>
                        <div
                            className={cx('Post1')}
                            style={{ borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px' }}
                        >
                            <div aria-label="Tạo bài viết" className={cx('Post2')}>
                                <div className={cx('post-string')}>
                                    <a tabIndex="0" role="link" href={name} className={cx('post-a')}>
                                        <svg
                                            aria-hidden="true"
                                            className={cx('x3ajldb')}
                                            data-visualcompletion="ignore-dynamic"
                                            role="none"
                                            style={{ height: '40px', width: '40px' }}
                                        >
                                            <mask id=":r48l:">
                                                <circle cx="20" cy="20" fill="white" r="20"></circle>
                                            </mask>
                                            <g mask="url(#:r48l:)">
                                                <image
                                                    x="0"
                                                    y="0"
                                                    height="100%"
                                                    preserveAspectRatio="xMidYMid slice"
                                                    width="100%"
                                                    xlinkHref="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=c6021c&_nc_ohc=AOBsKHyRwnQAX-c2axz&_nc_ht=scontent.fhan14-1.fna&oh=00_AfAslOXzxOGTZyFDtxrgAaoT5miMAqRERjAYfKj9azcrBQ&oe=65155BB8"
                                                    style={{ height: '40px', width: '40px' }}
                                                ></image>
                                                <circle className={cx('post-cir')} cx="20" cy="20" r="20"></circle>
                                            </g>
                                        </svg>
                                    </a>
                                    <div className={cx('post-btn')} role="button" tabIndex="0">
                                        <div className={cx('post-btn1')}>
                                            <span
                                                className={cx('post-btn2')}
                                                style={{
                                                    WebkitBoxOrient: 'vertical',
                                                    WebkitLineClamp: '2',
                                                    display: '-webkit-box',
                                                }}
                                            >
                                                {name} ơi, bạn đang nghĩ gì thế?
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('post-another')}></div>
                            </div>
                        </div>
                    </div>
                    {Ele}
                </div>
            </div>
        </div>
    );
}

export default Home;
