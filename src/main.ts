import './sass/style.scss';
import checkPageRoute from './routes/check_page_route';
import createPageLogin from './pages/login';
import addRoutePath from './routes/add_route_path';
import startWebSocket from './sockets';

createPageLogin();
checkPageRoute();
addRoutePath('#/login');
startWebSocket();
