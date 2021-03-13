const showBoards = (array) => {
  document.querySelector('#boards').innerHTML = '<h1>Boards</h1>';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card">
    <img src='${item.imageUrl}' class="card-img-top" alt="...">
    <div class="card-body">
    <h5 id="board-name-title--${item.firebaseKey}" class="card-title">${item.boardTitle}</h5>
      <p class="card-desc">${item.boardDescription}</p>
      <a href="#" class="btn btn-danger" id="viewBoard--${item.firebaseKey}">See Pins</a>
      <a href="#" class="btn btn-danger" id="deleteBoard--${item.firebaseKey}">Delete Board</a>
    </div>
  </div>`;
  });
};

export default showBoards;
