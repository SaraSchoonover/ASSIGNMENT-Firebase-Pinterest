const boardInfo = (user) => {
  document.querySelector('#add-button').innerHTML += `<h1>${user.boardTitle}'s Pins</h1>`;
};

export default boardInfo;
