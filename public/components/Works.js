import { subComponent } from 'queflow';
import ProjectCard from '../Nuggets/ProjectCard.js';
import UpcomingProject from '../Nuggets/UpcomingProject.js';

const MyWorks = new subComponent("MyWorks", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' id='works' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
      
        <Heading { text: "My Works", colored: "Works" } />
        
        <Text { txt: "What stuffs have I built?, here are some workings", align: 'center', bottom: 20 } />
        
        <div class='rowcol1'>
          <ProjectCard { name: 'PixelPen', description: "PixelPen is an intuitive web application that empowers users to effortlessly design HTML elements. Simply design HTML elements, and let PixelPen generate the clean, optimized HTML/CSS code.", src: './assets/images/pixelpen.webp', stack: ['js', 'qf'], url: 'pixelpen-eight.vercel.app/' } />
        
          <ProjectCard { name: 'QueFlow.js', description: "A JavaScript library for declaratively building scalable and highly performant Web Apps. Offers some straightforward APIs that simplifies the processes involved in building Web Apps.", src: './assets/images/qf.webp', stack: ['js'], url: 'github.com/dayson9/queflowjs' } />
          
        </div>
        
        <div class='section'>
          <Heading { text: "Upcoming projects", colored: "Upcoming", size: 20 } />
          
          <Text { txt: "Projects I'm currently / planning to work on.", bottom: 20, align: 'center' } />
          <div class='rowcol2'>
          <UpcomingProject { name: 'PureNovel', src: './assets/images/hero_static_mobile.webp', snippet: 'A web app for reading any genre of novels.', stack: [{ src: './assets/images/queflow.webp' }] } />
          
          <UpcomingProject { name: 'Flow UI', src: './assets/images/hero_static_mobile.webp', snippet: 'A QueFlow based CSS library that contains beautifully crafted UI components.', stack: [{ icon: 'css3', color: 'dodgerblue' }, { src: './assets/images/queflow.webp' }] } />
          
          <UpcomingProject { name: 'Crank.js', src: './assets/images/crankjs.webp', snippet: 'A powerful 2D physics engine for building web based games.', stack: [{ icon: 'javascript', color: 'gold' }] } />
          
          <UpcomingProject { name: 'CodeSnap', src: './assets/images/hero_static_mobile.webp', snippet: 'Generate beautiful snapshots of code snippets.', stack: [{ src: './assets/images/queflow.webp' }] } />        
          </div>
        </div>
      </div>`
  },
  
  stylesheet: {
    '.rowcol1' : `
       width: 100%;
       height: auto;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-evenly;
       box-sizing: border-box;
    `,
    "@media (min-width: 768px)": {
      '.rowcol1' : `
        flex-direction: row;
      `
    }
  }
});

export default MyWorks;