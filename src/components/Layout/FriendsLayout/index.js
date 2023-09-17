import Header from '../components/Header/Header';
import SidebarFriends from './SidebarFriends/SidebarFriends';

function FriendsLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarFriends />
            <div className="conten">{children}</div>
        </div>
    );
}

export default FriendsLayout;
