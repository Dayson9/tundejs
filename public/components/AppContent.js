import { subComponent } from 'queflow';
import TopBar from './TopBar.js';
import Hero from './Hero.js';
import Stack from './Stack.js';

const AppContent = new subComponent("AppContent", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='container' background={{ this.data.darkMode ? 'rgb(5,11,17)' : 'white' }}>
        <TopBar/>
        <Hero/>
        
        <div id='about' class='section' margin-top='15vh' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
          <Heading { text: 'Who am I?', colored: 'am I' } />
          <Paragraph { text: 'My name is Sodiq Tunde, a web developer dedicated to crafting innovative and user-centric digital experiences. With a focus on clean, efficient code, I transform ideas into reality.', align: 'center' } />
        </div>
        
        <Stack/>
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
 
    "@media (min-width: 768px)": {
      '#about' : `
        padding-inline: 1.2em;
      `
    }
  }
});

export default AppContent;