// USE WITH FIREBASE AUTH
import checkLoginStatus from './helpers/auth';
import 'bootstrap'; // import bootstrap elements and js
// import navBar from
import '../styles/main.scss';

const init = () => {
  checkLoginStatus();
};

init();
