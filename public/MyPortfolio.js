import { QComponent } from "queflow";
import Loader from './components/Loader.js';
import AppContent from './components/AppContent.js';
/*
import { Hero } from './components/Hero.js';
import { AboutMe } from './components/AboutMe.js';
import { MyProjects } from './components/MyProjects.js';
import { MySkills } from './components/MySkills.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js'; */


const MyPortfolio = new QComponent("#app", {
  data: {
    msg: "Just testing..."
  },
  template: () => {
    return `
         <Loader/>
         <AppContent/>
       `
  },
  run: () => {
    //runLoaderAnimation();
  },

  stylesheet: {
  "*" : `
    font-family: "DM Mono";
  `
  }
});

MyPortfolio.render();

MyPortfolio.data.msg = 'Tunde Here';