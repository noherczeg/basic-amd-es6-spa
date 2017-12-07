define(() => {
  const render = () => {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '<input id="user-name" /><button id="add">Add this user</button>';
  };

  return { render };
});
