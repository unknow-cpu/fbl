import { FriendsLayout, MarketplaceLayout, VideoLayout } from '../components/Layout/index';
import Following from '../pages/Following';
import Friends from '../pages/Friends';
import Home from '../pages/Home';
import Marketplace from '../pages/Marketplace';
import watch from '../pages/Watch';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/watch', component: watch, layout: VideoLayout },
    { path: '/friends', component: Friends, layout: FriendsLayout },
    { path: 'Marketplace', component: Marketplace, layout: MarketplaceLayout },
];

const PrivateRoutes = [];
export { PrivateRoutes, publicRoutes };
