const { subComponent } = QueFlow;

const TopBar = new subComponent({
  stylesheet: {

  },
  template: () => {
    return `
      <div class="nav">
        <img src="./images/logo.png" alt="Sodiq Tunde Logo">
      </div>
        `
  }
});

export { TopBar }