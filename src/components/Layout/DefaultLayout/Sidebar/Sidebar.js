import classNames from 'classnames/bind';
import React, { useState , useEffect } from 'react';
import style from './Sidebar.module.scss';
import { useAuth } from '../../../../context/AuthContext';
const cx = classNames.bind(style);


const Sidebar = () => {
const [profile, setprofile] = useState([]);
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
  const img = user.avatar ? `url('${user.avatar}')` : "url('/avata.jpg')";

const Page = [
    { id: 0, name: name, class: 'ProfilePage', href: hrefprofile, highlight: -1, image: img, position:'0 0'},
    { id: 1, name: 'Bạn bè', class: 'FriendPage', href: '/friends', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -333px' },
    { id: 2, name: 'Kỷ niệm', class: 'MemoriesPage', href: '/memories', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -37px'  },
    { id: 3, name: 'Đã lưu', class: 'SavedPage', href: '/saved', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')" , position:'0 -481px' },
    { id: 4, name: 'Nhóm', class: 'GroupPage', href: '/groups', highlight: -1,image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')" , position:'0 -185px' },
    { id: 5, name: 'Video', class: 'VideoPage', href: '/watch', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -555px'  },
    { id: 6, name: 'Marketplace', class: 'MarketplacePage', href: '/marketplace', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -444px'  },
    { id: 7, name: 'Bảng feed', class: 'NewsFeedPage', href: '/newsfeed', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yb/r/eECk3ceTaHJ.png?_nc_eui2=AeHT7vTx5iUd9KN5cvmvWRmuF-F-rSS5bMUX4X6tJLlsxYWTfUSSt1hZhoIOQo20Cls5tIOZEJ_G4mIKasUUhnaO')", position:'0 0'  },
    { id: 8, name: 'Chiến dịch gây quỹ', class: 'FundraisingPage', href: '/fundraising', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -370px'  },
    { id: 9, name: 'Chơi game', class: 'GamesPage', href: '/games', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -74px'  },
    { id: 10, name: 'Đoán danh với tháng toán', class: 'GuessingPage', href: '/guessing', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/GJ4EaivDaSj.png?_nc_eui2=AeGGOBz-duwiRoCer60HeTkU_Cuq91SY0xb8K6r3VJjTFkxF9fNGW-PQwRG2WePgypfP3o5i0ax5u141i3KhL-jM')", position:'0 0'  },
    { id: 11, name: 'Hoạt động gần đây với quảng cáo', class: 'RecentActivityPage', href: '/recentactivity', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/x2_LFd7gCqg.png?_nc_eui2=AeHezqPCcjc0kZfQeMAE3bAnEvDhgv7q33kS8OGC_urfeRa6AngopJ36ZCvkxzBPKcZCBmjhOi1acamm467pRgfW')", position:'0 0'  },
    { id: 12, name: 'Messenger', class: 'MessengerPage', href: '/messenger', highlight: -1, image: "url(https://static.xx.fbcdn.net/rsrc.php/v4/yr/r/EUWB4jT3kMB.png?_nc_eui2=AeF6bcxJxs2NLj8qDsyRN8JTyp_YewpbAX7Kn9h7ClsBflVEbAZOk7YPfITHdIXAt70jZLWoiwRn3YQqpAKxB2xf&quot;)", position:'0 0'  },
    { id: 13, name: 'Reels', class: 'ReelsPage', href: '/Reels', highlight: -1, image: "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/0889kvoy6N-.png?_nc_eui2=AeHNlQYhQ7AM1JaotEsWLPueLbKH4sRuW8UtsofixG5bxdznqxy_qhOfNotRTM656BsDzlCrk1M-Q09Mq0nZJTRL&quot;)", position:'0 0'  },
    { id: 14, name: 'Sinh nhật', class: 'BirthdayPage', href: '/birthday', highlight: -1, image: "url(https://static.xx.fbcdn.net/rsrc.php/v4/ye/r/jGIHAYEO3Pc.png?_nc_eui2=AeGiC6cn4MVyyK5bGTT2iL_rHZXwy-X9ur8dlfDL5f26v6fzJjJdxKa1kMGVd85WJZSSsr6r6SJUZQ5Rw3ZpMj4a&quot;)", position:'0 0'  },
    { id: 15, name: 'Sự kiện', class: 'EvenPage', href: '/even', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -296px'  },
    { id: 16, name: 'Trang', class: 'Page', href: '/page', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')", position:'0 -148px'  },
    { id: 17, name: 'Trình quản lý quảng cáo', class: 'AdvertisementPage', href: '/advertisement', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yN/r/ATlxuj_J5ty.png?_nc_eui2=AeEvMPnbL9wZyvA_skxNNfAkMI82ItSUC8QwjzYi1JQLxDNwOvZyLdTdZXuQtiOkm_KYW-x6T7W8gnysJvoXsOBx')", position:'0 0'  },
    { id: 18, name: 'Video chơi game', class: 'VideogamePage', href: '/videogame', highlight: -1, image: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yJ/r/fGWbDwbx9W4.png?_nc_eui2=AeE18CpeBPvD2ebja2ha0PyyNoblHaYXmrY2huUdpheatpq4EEm5sQI9curvlTqMuHC_Zj717AnLytToJ1ZwJEF3')", position:'0 -333px'  },
  ];



const more =  { id: 1, name: 'xem thêm', viewBox:'448 541 16 16', d: 'M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z'  }
const less =  { id: 2,name: 'ẩn bớt', viewBox:'0 0 22 22', d: 'M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z' }
const [btn, setBtn] = useState(more);
const [numSidebar, setNumSidebar] = useState(8);

var Style = {
    color: '#080809',
    display: 'block',
    transitionProperty: 'color,fill,stroke',
};

const moreless = () => {
    if(btn.id === 1){
        setBtn(less);
        setNumSidebar(18);
    } else {
        setBtn(more);
        setNumSidebar(8);
    }
};
const style = {
    //backgroundImage: "url('https://static.xx.fbcdn.net/rsrc.php/v4/yw/r/-GSeaf19sqF.png?_nc_eui2=AeFEkNLKSxTYpQ4dqG3eO1RqCR5jHNvbVS0JHmMc29tVLZscwDQVO5EL_PY25GRa59Q_UGvVXP3xedT2Go8PR811')",
    backgroundPosition: '0 -333px',
    backgroundSize: 'auto',
    width: '36px',
    height: '36px',
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
  };

  return (
    <div style={{ paddingLeft: '8px', paddingRight: '8px' }}>
        <div className={cx('sidebar')}>
            <div className={cx('menu_sidebar')}>
                {Page.slice(0, numSidebar).map((menu) => (
                        <a className={cx('a_item')} 
                        href={menu.href} 
                        role="link"
                        tabIndex="0"
                        aria-current="page"
                        key={menu.id}>
                            <div key={menu.id} className={cx('item')}>
                                {menu.id===0?
                                <i 
                                style={{ 
                                  backgroundImage: img, 
                                  width: '36px', 
                                  height: '36px', 
                                  backgroundSize: 'cover', 
                                  backgroundPosition: 'center',
                                  borderRadius: '50%',
                                  overflow: 'hidden'
                                }}>
                              </i> 
                              : 
                              <i 
                                    style={{
                                        backgroundImage: menu.image,
                                        backgroundPosition: menu.position,
                                        backgroundSize: 'auto',
                                        width: '36px',
                                        height: '36px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                        }}  
                                ></i>}
                            </div>
                            <span className={cx('item_span')}>
                                {menu.name}
                            </span>
                        </a>
                    ))}
                <a className={cx('a_item')} 
                        role="link"
                        tabIndex="0"
                        aria-current="page"
                        onClick={moreless}>
                            <div className={cx('item2')}>
                                <svg className={cx('svg_item')} style={Style}  viewBox={btn.viewBox} width="20" height="20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="nonzero" d={btn.d}></path>
                                </svg>
                            </div>
                            <span className={cx('item_span')}>
                                {btn.name}
                            </span>
                        </a>
            </div>
    </div>
    </div>
    
  );
};

export default Sidebar;