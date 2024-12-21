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
        
        <ExperienceCard { name: 'Silicon Valley', state: 'Lagos', duration: '2024-Present', role: 'Frontend Developer',
          points: ['Built the frontend of a real estate agency platform.', 'Collaborated with backend devs in building the booking and customer care system', 'Led a team of frontend devs in building micro apps for the agency.']
          
        } />
        
      </div>
    `
  },
  stylesheet: {

  }
});

export default Experience;
