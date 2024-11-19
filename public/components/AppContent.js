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
      transition: .5s;
      overflow-y: scroll;
    `
  }
});

export default AppContent;