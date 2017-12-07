define(['add/add.view', 'user/user'], (AddView, User) => {
  const addUserHandler = () => {
    const users = JSON.parse(localStorage.users);
    const userName = document.getElementById('user-name').value;
    users.push(new User(userName));
    localStorage.users = JSON.stringify(users);
    window.location.hash = '#list';
  };

  const userNameChangedHandler = (event) => {
    console.info(`The value of "user-name": ${event.target.value}`);
  };

  const bindEvents = () => {
    document
      .getElementById('add')
      .addEventListener('click', addUserHandler, false);

    document
      .getElementById('user-name')
      .addEventListener('keyup', userNameChangedHandler);
  };

  const start = () => {
    AddView.render();
    bindEvents();
  };

  return { start };
});
