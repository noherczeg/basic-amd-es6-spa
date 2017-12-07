define(() => {
  class User {
    constructor(name) {
      this.name = name || 'Default name';
    }
  }

  return User;
});
