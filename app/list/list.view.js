define(() => {
  const render = (props) => {
    const { users } = props;
    const appDiv = document.getElementById('app');
    let html = '<ul>';
    users.forEach((user) => {
      html += `<li>${user.name}</li>`;
    });
    html += '</ul>';

    appDiv.innerHTML = html;
  };

  return { render };
});
