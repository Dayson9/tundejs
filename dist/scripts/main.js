import { Loader } from './components/Loader.js';
import { TopBar } from './components/TopBar.js';
import { Hero } from './components/Hero.js';
import { AboutMe } from './components/AboutMe.js';
import { MyProjects } from './components/MyProjects.js';
import { MySkills } from './components/MySkills.js';
import { ContactMe } from './components/ContactMe.js';
import { Footer } from './components/Footer.js';

const { QComponent } = QueFlow;

//make components global
globalThis.Loader = Loader;
globalThis.TopBar = TopBar;
globalThis.Hero = Hero;
globalThis.AboutMe = AboutMe;
globalThis.MyProjects = MyProjects;
globalThis.MySkills = MySkills;
globalThis.ContactMe = ContactMe;
globalThis.Footer = Footer;

const MyPortfolio = new QComponent("#app", {
  stylesheet: {
    "h1 > span": 
      `
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
            `
  },
  template: () => {
    return `
      <Loader/>
      <TopBar/>
      <Hero/>
      <AboutMe/>
      <MyProjects/>
      <MySkills/>
      <ContactMe/>
      <Footer/>
       `
  },
  run: () => {
    setTimeout(() => {
      Loader.data.transition = 0.7;
      Loader.data.offsetY = 100;
    }, 4000);
  }
});

MyPortfolio.render();