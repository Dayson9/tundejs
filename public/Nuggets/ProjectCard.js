import { Nugget } from 'queflow';

const ProjectCard = new Nugget("ProjectCard", {
  template: (data) => {
    return `
      <div class='project'>
        <h2>{{ name }}</h2>
      </div>
    `
  },

  stylesheet: {
    '.project': `
      width: 300px;
      height: 80vh;
      border-radius: 45px;
      border: 1px solid #A1A1AA;
      margin: 0 auto;
    `,
  }
});

export default ProjectCard;