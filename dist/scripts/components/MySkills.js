import { subComponent } from "queflow";


const MySkills = new subComponent({
  stylesheet: {

  },
  template: () => {
    return `
      <div class="container" id="skills">
        <h1 class="heading grad1 grad-text">My Stack?</h1>
        <p class="note">What am I good at?, what do I use ?</p>
        <div class="grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
        `
  }
});

export { MySkills }