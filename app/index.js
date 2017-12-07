require(['user/user', 'router'], (User, Router) => {
  const users = [
    new User('Barney'),
    new User('Cartman'),
    new User('Sheldon'),
  ];

  localStorage.users = JSON.stringify(users);

  Router.startRouting();
});
