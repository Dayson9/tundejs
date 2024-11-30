import { subComponent } from 'queflow';
import OracleEye from './OracleEye.js';
import TopBar from './TopBar.js';
import Hero from './Hero.js';
import Stack from './Stack.js';
import MyProjects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js'

const AppContent = new subComponent("AppContent", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='container' id='main' background={{ this.data.darkMode ? 'rgb(5,11,18)' : 'white' }}>
        <TopBar/>
        <OracleEye/>
        <Hero/>
        
        <div id='about' class='section' margin-top='15vh' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
          <Heading { text: 'Who am I?', colored: 'am I' } />
          <Paragraph { text: 'My name is Sodiq Tunde, a web developer dedicated to crafting innovative and user-centric digital experiences. With a focus on clean, efficient code, I transform ideas into reality.', align: 'center', size: 12 } />
        </div>
        
       <Stack/>
       <MyProjects/>
       <Contact/>
       <Footer/>
      </div>
    `
  },
  stylesheet: {
    ".container": `
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      transition: .3s;
      overflow-y: scroll;
    `,

    ".container > *": `
      transition: .3s;
    `,

    '.bg': `
       width: ${ window.innerHeight < 768 ? '80%' : '40%' };
       height: ${ window.innerHeight < 768 ? '150%' : '260px' };
       padding-block: 10px;
       padding-left: 7%;
       border: 1px solid rgb(45, 59, 78);
       margin: 20px auto;
       border-radius: 15px;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-around;
     `,

    '.col': `
       width: 45%;
       height: 100%;
       display: flex;
       flex-direction: column;
       align-items: center;
       justify-content: space-around;
     `,
    "@media (min-width: 768px)": {
      '#about': `
        padding-inline: 1.2em;
      `
    }
  }
});

export default AppContent;