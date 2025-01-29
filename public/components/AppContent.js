import { Component } from 'queflow';
import OracleEye from './OracleEye.js';
import TopBar from './TopBar.js';
import Hero from './Hero.js';
import AboutMe from './AboutMe.js';
import Stack from './Stack.js';
import ServiceCard from '../Nuggets/ServiceCard.js';
import MyWorks from './Works.js';
import Experience from './Experience.js'
import Contact from './Contact.js';
import Footer from './Footer.js'
import Hobby from '../Nuggets/Hobby.js';
import Services from './Services.js';

const AppContent = new Component("AppContent", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='container' id='main' background={{ darkMode ? 'linear-gradient(35deg, rgb(15, 21, 43), rgb(5,11,18))' : 'white' }}>
        <TopBar/>
        <OracleEye/>
        <Hero/>
        <AboutMe/>
        <Stack/>
        <Services/>
        <MyWorks/>
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
  }
});

export default AppContent;
