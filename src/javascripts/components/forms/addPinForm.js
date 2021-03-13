import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#modal').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="pin-title" aria-describedby="boardTitle" placeholder="Enter Pin Title" required>
      </div>
      <div class="form-group">
        <label for="image-pin">Image URL</label>
        <input type="url" class="form-control" id="pin-image" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <div class="form-group">
      <label for="image"></label>
        <label class="form-group-label" for="description">Pin Description</label>
        <input type="text" class="form-control" id="pin-description" aria-describedby="pinDescription" placeholder="Pin Description" required>
      </div>
      <button type="submit" id="submit-pin" class="btn btn-primary">Submit A Pin</button>
    </form>`;

  selectBoard();
};

export default addPinForm;
