import { createBoard } from '../../helpers/data/boardData';
import { deleteBoardPins, pinBoardInfo } from '../../helpers/data/pinBoardData';
import {
  deletePin, createPin, getSinglePin, updatePin
} from '../../helpers/data/pinData';
import addBoardForm from '../forms/addBoardForm';
import addPinForm from '../forms/addPinForm';
import boardInfo from '../forms/boardInfo';
import showBoards from '../forms/boards';
import editPinForm from '../forms/editPinForm';
import formModal from '../forms/formModal';
import showPins from '../forms/pins';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('viewBoard')) {
      const boardId = e.target.id.split('--')[1];
      pinBoardInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardInfo(boardInfoObject.board);
      });
    }
    // DELETE BOARD
    if (e.target.id.includes('deleteBoard')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to Delete?')) {
        e.preventDefault();
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete')) {
        const firebaseKey = e.target.id.split('--')[1];
        const boardId = e.target.id.split('--')[2];
        console.warn(firebaseKey);
        deletePin(firebaseKey, boardId).then((pinArray) => showPins(pinArray));
      }
    }
    // ADD A NEW PIN
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }
    // ADD NEW BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pinTitle: document.querySelector('#pin-title').value,
        imgUrl: document.querySelector('#pin-image').value,
        pinDescription: document.querySelector('#pin-description').value,
        boardId: document.querySelector('#board').value,
        uid
      };
      createPin(pinObject, uid).then((pinArray) => showPins(pinArray));
    }
    // ADD A BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        boardTitle: document.querySelector('#title').value,
        boardDescription: document.querySelector('#description').value,
        imgUrl: document.querySelector('#image').value,
        uid
      };
      createBoard(boardObject, uid).then((boardArray) => showBoards(boardArray));
      document.querySelector('#form-container').innerHTML = '';
    }
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      console.warn(boardId);
      deleteBoardPins(boardId).then((boardInfoObject) => {
        showBoards(boardInfoObject.pins);
        boardInfo(boardInfoObject.boards);
      });
    }
    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Edit Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // CLICK EVENT FOR EDITING A PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pinTitle: document.querySelector('#pin-title').value,
        imgUrl: document.querySelector('#pin-image').value,
        pinDescription: document.querySelector('#pin-description').value,
        boardId: document.querySelector('#board').value,
      };
      updatePin(firebaseKey, pinObject).then((pinArray) => showPins(pinArray));
      $('#formModal').modal('toggle');
    }
  });
};

export default domEvents;
