import Header from '../components/Header/Header';
import Sidebar from '../DefaultLayout/Sidebar/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="conten">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
