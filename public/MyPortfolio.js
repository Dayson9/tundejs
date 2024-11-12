import Loader from './components/Loader.js';

/*
import { TopBar } from './components/TopBar.js';
import { Hero } from './components/Hero.js';
import { AboutMe } from './components/AboutMe.js';
import { MyProjects } from './components/MyProjects.js';
import { MySkills } from './components/MySkills.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js'; */

import { QComponent } from "queflow";


const MyPortfolio = new QComponent("#app", {
  stylesheet: {
    "h1 > span": `
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
            `
  },
  template: () => {
    return `
        <Loader/>
       `
  },
  run: () => {
    setTimeout(() => {
      Loader.data.x = 100;
    }, 200);
  }
});

MyPortfolio.render();

const path = document.querySelector("svg path");