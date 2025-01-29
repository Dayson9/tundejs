import { Component } from 'queflow';
import ProjectCard from '../Nuggets/ProjectCard.js';
import UpcomingProject from '../Nuggets/UpcomingProject.js';

const MyWorks = new Component("MyWorks", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' id='works' color={{ darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
      
        <Heading { text: "My Works", colored: "Works" } />
        
        <Text { txt: "What stuffs have I built?, here are some workings", align: 'center', bottom: 20, size: 12 } />
        
        <div class='rowcol1'>
          <ProjectCard { name: 'PixelPen', description: "PixelPen is an intuitive web application that empowers users to effortlessly design HTML elements. Simply design HTML elements, and let PixelPen generate the clean, optimized HTML/CSS code.", src: './assets/images/pixelpen.webp', stack: ['js', 'qf'], url: 'pixelpen-eight.vercel.app/' } />
        
          <ProjectCard { name: 'QueFlow.js', description: "A JavaScript library for declaratively building scalable and highly performant Web Apps. Offers some straightforward APIs that simplifies the processes involved in building Web Apps.", src: './assets/images/qf.webp', stack: ['js'], url: 'github.com/dayson9/queflowjs' } />
          
        </div>
        
        <div class='section'>
          <Heading { text: "Upcoming projects", colored: "Upcoming", size: 20 } />
          
          <Text { txt: "Projects I'm currently / planning to work on.", bottom: 20, align: 'center', size: 12 } />
          <div class='rowcol2'>
          <UpcomingProject { name: 'PureNovel', src: './assets/images/hero_static_mobile.webp', snippet: 'A web app for reading any genre of novels.', stack: [{ src: './assets/images/queflow.webp' }] } />
          
          <UpcomingProject { name: 'Flow UI', src: './assets/images/hero_static_mobile.webp', snippet: 'A QueFlow based CSS library that contains beautifully crafted UI components.', stack: [{ icon: 'css3', color: 'dodgerblue' }, { src: './assets/images/queflow.webp' }] } />
          
          <UpcomingProject { name: 'Cranq.js', src: './assets/images/cranqjs.webp', snippet: 'A powerful 2D physics engine for building web based games.', stack: [{ icon: 'javascript', color: 'gold' }] } />
          
          <UpcomingProject { name: 'CodeSnap', src: './assets/images/hero_static_mobile.webp', snippet: 'Generate beautiful snapshots of code snippets.', stack: [{ src: './assets/images/queflow.webp' }] } />        
          </div>
        </div>
      </div>`
  },

  stylesheet: {
    '.rowcol1': `
       width: 100%;
       height: auto;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-evenly;
       box-sizing: border-box;
    `,
    "@media (min-width: 768px)": {
      '.rowcol1': `
        flex-direction: row;
      `,
      '.rowcol2': `
        width: 100vw;
        height: 35vh;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: auto;
        box-sizing: border-box;
        margin: 0 auto;
        padding-block: 5vh;
      `,
      '.upcoming' : `
        height: 130px;
        width: 60%;
      `
    }
  }
});

export default MyWorks;