const showPins = (array) => {
  document.querySelector('#boards').innerHTML = '<h1>Pins</h1>';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card" style="width: 18rem;">
    <img src='${item.imageUrl}' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.pinTitle}</h5>
      <p>${item.pinDescription}</p>
      <hr>
      <button class="btn btn-outline-danger" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
      <button class="btn btn-outline-danger" id="delete-pin--${item.firebaseKey}--${item.boardId}">Delete Pin</button>
    </div>
  </div>`;
  });
};

export default showPins;
