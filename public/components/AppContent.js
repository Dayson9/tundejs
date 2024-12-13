import { subComponent } from 'queflow';
import OracleEye from './OracleEye.js';
import TopBar from './TopBar.js';
import Hero from './Hero.js';
import Stack from './Stack.js';
import MyProjects from './Projects.js';
import Experience from './Experience.js'
import Contact from './Contact.js';
import Footer from './Footer.js'
import Hobby from '../Nuggets/Hobby.js';


const AppContent = new subComponent("AppContent", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='container' id='main' background={{ this.data.darkMode ? 'linear-gradient(125deg, rgb(15, 21, 38), rgb(5,11,18))' : 'white' }}>
        <TopBar/>
        <OracleEye/>
        <Hero/>
        
        <div id='about' class='section' margin-top='15vh' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        
          <Heading { text: 'About Me', colored: 'Me', bottom: 30 } />
          
          <Text { text: 'I love', size: 25, align: 'left', font: '"Nova Square"', weight: 900, bottom: 30 } />
          
          <div id='my-hobbies' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'transparent' }}>
            <Hobby { name: 'Solving', icon: 'bx-math' } />
            <Hobby { name: 'Building', icon: 'bx-laptop' } />
            <Hobby { name: 'Solving', icon: 'bx-math' } />
            <Hobby { name: 'Building', icon: 'bxs-sun' } />
          </div>
          
          <Paragraph { text: 'My name is Sodiq Tunde, a web developer dedicated to crafting innovative and user-centric digital experiences. With a focus on clean, efficient code, I transform ideas into reality.', align: 'center', size: 12 } />
        </div>
        
       <Stack/>
       <MyProjects/>
       <Experience/>
       <Contact/>
       <Footer/>
      </div>
    `
  },
  stylesheet: {
    'h2' : 'font-family: "Nova Square"',
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
    
    '#my-hobbies' : `
      width: ${ window.innerHeight < 768 ? '100%' : '50%' };
      height: ${ window.innerHeight < 768 ? '150px' : '260px' };
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;
      margin-bottom: 70px;
    `,

    '.bg': `
       width: ${ window.innerHeight < 768 ? '80%' : '40%' };
       height: ${ window.innerHeight < 768 ? '150px' : '260px' };
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
