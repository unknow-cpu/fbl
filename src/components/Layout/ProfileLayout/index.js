import Header from '../components/Header/Header';

function ProfileLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="conten">{children}</div>
        </div>
    );
}

export default ProfileLayout;
