import { subComponent } from 'queflow';
import TopBar from './TopBar.js';
import Hero from './Hero.js';


const AppContent = new subComponent("AppContent", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='container' background={{ this.data.darkMode ? 'rgb(5,11,17)' : 'white' }}>
        <TopBar/>
        <Hero/>
        
        <div id='about' color={{ this.data.darkMode ? 'white' : 'black' }}>
          <h3>Who am I?</h3>
          <Paragraph { text: 'My name is Sodiq Tunde, a web developer who brings digital experiences to life by each line of code', font: "'DM Mono'", align: 'center', size: 11 } />
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
    `
  }
});

export default AppContent;