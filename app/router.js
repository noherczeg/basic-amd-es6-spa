define(() => {
  let currentHash = '';
  const routes = [
    { hash: '#list', controller: 'list/list.controller' },
    { hash: '#add', controller: 'add/add.controller' },
  ];
  const defaultRoute = '#list';

  const loadController = (ctrl) => {
    require([ctrl], (controller) => {
      controller.start();
    });
  };

  const hashCheck = () => {
    if (window.location.hash !== currentHash) {
      routes.forEach((currentRoute) => {
        if (window.location.hash === currentRoute.hash) {
          loadController(currentRoute.controller);
        }
      });
      currentHash = window.location.hash;
    }
  };

  const startRouting = () => {
    window.location.hash = window.location.hash || defaultRoute;
    setInterval(hashCheck, 100);
  };

  return { startRouting };
});
