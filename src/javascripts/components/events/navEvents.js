import { getBoards } from '../../helpers/data/boardData';
import { getPins } from '../../helpers/data/pinData';
import showBoards from '../forms/boards';
import showPins from '../forms/pins';

const navEvents = (uid) => {
  document.querySelector('#all-boards').addEventListener('click', () => {
    document.querySelector('#modal').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getBoards(uid).then((boardsArray) => showBoards(boardsArray));
  });

  document.querySelector('#pins').addEventListener('click', () => {
    document.querySelector('#modal').innerHTML = '';
    document.querySelector('#main-container').innerHTML = '';
    document.querySelector('#form-container').innerHTML = '';
    getPins(uid).then((pinsArray) => showPins(pinsArray));
  });
};

export default navEvents;
