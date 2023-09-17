import Header from '../components/Header/Header';
import SidebarVideo from './SidebarVideo/SidebarVideo';

function VideoLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container"></div>
            <SidebarVideo />
            <div className="conten">{children}</div>
        </div>
    );
}

export default VideoLayout;
