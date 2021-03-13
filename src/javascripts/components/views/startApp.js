import { getBoards } from '../../helpers/data/boardData';
// import getPins from '../../helpers/data/pinData';
import domBuilder from '../domBuilder';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import showBoards from '../forms/boards';
import navBar from '../forms/navBar';
import loginButton from '../loginButton';
import logoutButton from '../logoutButton';

const startApp = (user) => {
  domBuilder();
  domEvents(user.uid);
  navBar();
  loginButton();
  logoutButton();
  navEvents(user.uid);
  getBoards(user.uid).then((boards) => showBoards(boards));
};

export default startApp;
