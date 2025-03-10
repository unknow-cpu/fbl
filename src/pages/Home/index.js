import classNames from 'classnames/bind';
import React, { useState , useEffect } from 'react';
import style from './Home.module.scss';
import Post from './Post/Post';
import { useAuth } from '../../context/AuthContext';
const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('Centerpage')}>
            <CenterPage></CenterPage>
        </div>
    );
}

function CenterPage() {
    const { user, fetchUser } = useAuth();
    
      useEffect(() => {
        if (!user) {
          fetchUser();
        }
      }, [user, fetchUser]);
      if (!user) {
        return <div>Loading...</div>;
      }
    const name = user.name;
    const hrefprofile = `/profile/${user.id}`;
    const avatarUrl = user.avatar ? `http://localhost:5000${user.avatar}` : '/avata.jpg';
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
    
    const [isClickcreatpost, setisClickcreatpost] = useState(false);
    const Creatpost2 = () => {
        return(
        <div className={cx('post-creatpost')}>
            <div className={cx('post-creatpost1')}>
                <div className={cx('post-creatpost11')}>
                    <span>tạo bài viết</span>
                </div>
            </div>
            <div className={cx('post-creatpost2')}>
                <div className={cx('post-creatpost21')}>
                    <textarea 
                        className={cx('textarea-creatpost')}
                        placeholder="Bạn đang nghĩ gì?"
                    ></textarea>
                     {/* <input 
                        type="text" 
                        className={cx('input-creatpost')}
                        placeholder="Bạn đang nghĩ gì?"
                    /> */}
                </div>
            </div>
            <div className={cx('post-creatpost3')}>
                <div className={cx('post-creatpost31')}>
                    <div className={cx('post-creatpost311')}>
                        <label htmlFor="file-upload" className={cx('label-file-upload')}>
                            <i className="fas fa-camera"></i> Thêm ảnh
                        </label>
                        <input 
                            id="file-upload" 
                            type="file" 
                            accept="image/*"
                            className={cx('input-file-upload')}
                    /></div>
                    <btn className={cx('btn-creatpost312')}>Đăng bài</btn>
                </div>
            </div>
        </div>);
    }
    const Clickcreatpost = () => {
       // setisClickcreatpost(!isClickcreatpost);
    }

    const Creatpost = () => {
        return(<div className={cx('Post')}>
        <div
            className={cx('Post1')}
            style={{ borderRadius: 'max(0px, min(8px, ((100vw - 4px) - 100%) * 9999)) / 8px' }}
        >
            <div aria-label="Tạo bài viết" className={cx('Post2')}>
                <div className={cx('post-string')}>
                <a tabIndex="0" role="link" href={hrefprofile} className={cx('post-a')}>
                    <div
                        className={cx('avatar-container')}
                        style={{ 
                            width: '40px', 
                            height: '40px', 
                            borderRadius: '50%', 
                            overflow: 'hidden', 
                            position: 'relative' 
                        }}
                    >
                        <img
                            src={avatarUrl}
                            alt="Avatar"
                            style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover', // Better than backgroundSize for <img>
                            borderRadius: '50%',
                            }}onError={(e) => (e.target.src = '/avata.jpg')} // Fallback if URL fails
                            />
                    </div>
                    </a>
                    <div onClick={Clickcreatpost} className={cx('post-btn')} role="button" tabIndex="0">
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
    </div>)
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
                                                                        xlinkHref="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/448260578_122111267708337380_3801432464665185112_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEXQGRE5fuuMSyh_hHa2aih-NFl3Ycncnf40WXdhydyd2PeyKlC2Pq-_RCz4qbz8qtCThv6HSGNYJVYZTau9kvU&_nc_ohc=s_8E1S1fmRoQ7kNvgGUQPBd&_nc_oc=Adi31oBFt2qCx3L1Mwaen8j9sWsDZXq0r_UYkmd2vDCceqdGZNySI2GCGZMm4tAPuoc&_nc_zt=23&_nc_ht=scontent.fhan5-2.fna&_nc_gid=A6syv8xnhTkifreM5IwwJou&oh=00_AYGJkHo2zAbpqmqBuGS30bhLEqKs_crWI-KZKosyaTD8FA&oe=67D21247"
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
                                                                            href=""
                                                                            role="link"
                                                                            tabIndex="0"
                                                                        >
                                                                            <span className={cx('xt0psk2')}>
                                                                                <span>Căn hộ view sông Hàn - Đà Nẵng</span>
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
                                                                    Sun Group mở bán quỹ Căn hộ View trọn “Sông Hàn” + Lễ hội pháo hoa DIFF Đà Nẵng giá từ 65tr/m2. Lợi nhuận cho thuê từ 15tr/tháng.
                                                                    - Sở hữu lâu dài, Liền kề Sông Hàn, cách 3 phút đến cầu Thuận Phước, 5 phút điển Mỹ Khê.
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
                                                                            src="https://scontent.fhan5-11.fna.fbcdn.net/v/t45.1600-4/476452101_120214984440870622_713097078202972093_n.jpg?stp=cp0_dst-jpg_p526x296_q75_spS444_tt6&_nc_cat=104&ccb=1-7&_nc_sid=467c85&_nc_eui2=AeEUc0Ij5r0f7urPki5o--UQpueqQp35ow2m56pCnfmjDYKllZ_FciU2KjCCKVLzZeikiy5S_NWNzq_SDt9Cice-&_nc_ohc=psJr8JxVp5YQ7kNvgFJ3XuN&_nc_oc=AdjT2oqVjTyFtSkhc2TtkSGb8eWof--Djutek0WK0uQ_3GRrOtW0uq9mRAlPyrbBbY0&_nc_zt=1&_nc_ht=scontent.fhan5-11.fna&_nc_gid=AtL8Mmo_pwjVy6vqB_xqzKm&oh=00_AYF6t9j89TJp5EQC5FxVAPrH3zT3u3x8IJ1kMPgwOITitw&oe=67D21A72"
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
                    <Creatpost/>
                    <Post/>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
