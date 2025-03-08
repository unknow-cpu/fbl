import React from 'react'; // nạp thư viện react
import ReactDOM from 'react-dom/client'; // nạp thư viện react-dom
import App from './app';
import GlobalStyles from './components/GlobalStyles';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Tạo component App
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <App />
        </GlobalStyles>
    </React.StrictMode>,
);

// Render component App vào #root element
