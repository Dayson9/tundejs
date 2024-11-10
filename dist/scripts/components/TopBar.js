import { subComponent } from "queflow";

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