import { subComponent } from 'queflow';
import TopBar from './TopBar.js';
import Hero from './Hero.js';
import Heading from '../Nuggets/Heading.js';

const AppContent = new subComponent("AppContent", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='container' background={{ this.data.darkMode ? 'rgb(5,11,17)' : 'white' }}>
        <TopBar/>
        <Hero/>
        
        <div id='about' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
          <Heading { text: 'Who am I?' } />
          <Paragraph { text: 'My name is Sodiq Tunde, a web developer dedicated to crafting innovative and user-centric digital experiences. With a focus on clean, efficient code, I transform ideas into reality.', font: "'DM Mono'", align: 'center', size: 12 } />
        </div>
      </div>
    `
  },
  stylesheet: {
    ".container" : `
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      transition: .3s;
      overflow-y: scroll;
    `,
    
    "*" : `
      transition: .3s;
    `,
    
    "#about" : `
      width: 100%;
      height: 300px;
      text-align: center;
      margin-top: 15vh;
      padding-inline: 0.7em;
      box-sizing: border-box;
    `
  }
});

export default AppContent;