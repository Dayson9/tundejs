import { subComponent } from 'queflow';

const Skills = new subComponent("Skills", {
  data: {

  },
  template: () => {
    return `
      <div class='section'>
        <Heading { text: '' } />
      </div>
    `
  },
  stylesheet: {

  }
});

export default Skills;