import { Loader } from './components/Loader.js';
import { TopBar } from './components/TopBar.js';
import { Hero } from './components/Hero.js';
import { AboutMe } from './components/AboutMe.js';
import { MyProjects } from './components/MyProjects.js';

const { Render , Template, QComponent } = QueFlow;

//make components global
globalThis.Loader = Loader;
globalThis.TopBar = TopBar;
globalThis.Hero = Hero;
globalThis.AboutMe = AboutMe;
globalThis.MyProjects = MyProjects;

const MyPortfolio = new QComponent("#app", {
  stylesheet: {},
  template: () => {
    return `
      <Loader/>
      <TopBar/>
      <Hero/>
      <AboutMe/>
      <MyProjects/>
       `
  }
});

MyPortfolio.render();


function renderUI() {
  for (const ui of UI_Items){
    if (ui.element != "#projects") {
      Render(ui.content, ui.element, "append");
    } else {
      Render(ui.content, ui.element, "prepend"); 
    }
  }
}

renderUI();


setTimeout(() => {
  Loader.data.y = 100;
}, 4000);