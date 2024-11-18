import { QComponent } from "queflow";
import Loader from './components/Loader.js';
import TopBar  from './components/TopBar.js';

/*
import { Hero } from './components/Hero.js';
import { AboutMe } from './components/AboutMe.js';
import { MyProjects } from './components/MyProjects.js';
import { MySkills } from './components/MySkills.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js'; */


const MyPortfolio = new QComponent("#app", {
  template: () => {
    return `
       <div id='container'>
         <Loader/>
         <TopBar/>
       </div>
       `
  },
  run: () => {
    //runLoaderAnimation();
  },

  stylesheet: {
    "#container" : `
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgb(5,11,17);
    `,
    
  "*" : `
    font-family: "DM Mono";
  `
  }
});

MyPortfolio.render();