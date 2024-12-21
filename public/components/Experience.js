import { subComponent } from 'queflow';
import ExperienceCard from '../Nuggets/ExperienceCard.js';

const Experience = new subComponent('Experience', {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Experience', colored: 'Experience' } />
        
        <ExperienceCard { name: 'Silicon Valley' } />
        
      </div>
    `
  },
  stylesheet: {

  }
});

export default Experience;
