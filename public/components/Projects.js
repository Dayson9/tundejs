import { subComponent } from 'queflow';
import ProjectCard from '../Nuggets/ProjectCard.js';

const MyProjects = new subComponent("MyProjects", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
        <Heading { text: "My Works", colored: "Works" } />
        <Paragraph { text: "What stuffs have I worked on?, here are workings 👇...", align: 'center' } />
        
        <ProjectCard { name: 'PixelPen' } />
      </div>
    `
  },
  stylesheet: {

  }
});

export default MyProjects;