import { subComponent } from "queflow";

const AboutMe = new subComponent({
  stylesheet: {

  },
  template: () => {
    return `
      <div class="container" id="about">
        <h2 class="heading grad grad-text">About me</h2>
        <p class="note">
          Hello there👋, my name is Sodiq Tunde, a fullstack Software Developer, dedicated towards building digital products that would help people in their daily lives.
        </p>
          <p class="note">
            As a fullstack Software Developer, I specialize in building user - centric digital solutions that solve real - world problems and improve daily lives.My focus is on creating intuitive and effective products that streamline processes and enhance user experiences.
          </p>
      </div>
    `
  }
});

export { AboutMe }