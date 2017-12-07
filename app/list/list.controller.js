define(['list/list.view'], (ListView) => {
  const start = () => {
    const users = JSON.parse(localStorage.users);
    ListView.render({ users });
  };

  return { start };
});
