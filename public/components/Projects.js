import { subComponent } from 'queflow';
import ProjectCard from '../Nuggets/ProjectCard.js';
import UpcomingProject from '../Nuggets/UpcomingProject.js';

const MyProjects = new subComponent("MyProjects", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
      
        <Heading { text: "My Works", colored: "Works" } />
        <Text { text: "What stuffs have I built?, here are some workings 👇...", align: 'center', bottom: 20 } />
        
        <ProjectCard { name: 'PixelPen', description: "PixelPen is a web app that provides a simple way to design HTML elements then get the equivalent HTML code as result.", src: './assets/pixelpen.png', stack: ['js', 'qf'], url: 'pixelpen-eight.vercel.app/' } />
        
        <ProjectCard { name: 'QueFlow.js', description: "A JavaScript library for declaratively building Web Apps. Offers some straightforward APIs that simplifies the processes involved in building Web Apps.", src: './assets/qf.png', stack: ['js'], url: 'queflowjs.onrender.com' } />
        
        
        <div class='section'>
          <Heading { text: "Upcoming projects", colored: "Upcoming", size: 20 } />
          
          <Text { text: "Projects I'm currently working on / planning to work on.", bottom: 20, align: 'center' } />
          
          <UpcomingProject { name: 'PureNovel', src: './assets/hero_static_mobile.jpg', snippet: 'A web app for reading any genre of novels.', stack: [{ src: './assets/queflow.png' }] } />
          
          <UpcomingProject { name: 'Flow UI', src: './assets/hero_static_mobile.jpg', snippet: 'A QueFlow based CSS library that contains beautifully crafted UI components.', stack: [{ icon: 'css3', color: 'dodgerblue' }, { icon: 'javascript', color: 'gold' }] } />
          
          <UpcomingProject { name: 'Crank.js', src: './assets/crankjs.png', snippet: 'A powerful 2D JavaScript game engine for building web based games.', stack: [{ icon: 'javascript', color: 'gold' }] } />
        </div>
      </div>`
  }
});

export default MyProjects;