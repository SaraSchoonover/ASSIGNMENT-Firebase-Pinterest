import firebase from 'firebase/app';
import 'firebase/auth';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import firebaseConfig from './apiKeys';
import home from '../components/forms/home';
import startApp from '../components/views/startApp';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user);
      logoutButton();
    } else {
      // person is NOT logged in
      home();
      loginButton();
    }
  });
};

export default checkLoginStatus;
