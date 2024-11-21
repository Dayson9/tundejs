import { subComponent } from 'queflow';
import Paragraph from '../Nuggets/Paragraph.js';
import GradientText from '../Nuggets/GradientText.js';
import Button from '../Nuggets/Button.js';

const Hero = new subComponent("Hero", {
  data: {
    darkMode: true,
  },
  template: () => {
    return `
      <div id='container'>
        <div id='hero'>
          <h1 color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>Building <GradientText { text: 'end-to-end', from: 'rgb(50, 120, 180)', to: 'rgb(50, 120, 180, .2)', deg: 135 } /> products, Fullstack Developer</h1>
          
          <Paragraph { text: 'I Develop, I Build, I Deploy', font: "'DM Mono'", align: "left", color: "{{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}", size: 13 } />
          
          <Button { label: "Dive In", w: '150px', h: '50px', color: 'white', bg: "rgb(50, 120, 180)", icon: "r bxs-right-arrow", click: "window.location.href = '#about'" } />
        </div>
      </div>
    `
  },
  stylesheet: {
    "#container": `
      width: 100%;
      height: 320px;
      box-sizing: border-box;
      border: none;
      margin-top: 130px;
      position: static;
    `,

    "#container > #hero": `
      width: 80%;
      height: 100%;
      margin: 0 auto;
      border: inherit;
      display: flex;
      flex-direction: column;
      align-items: left;
      justify-content: space-around;
      box-sizing: border-box;
      padding-left: 13px;
    `,
    "@media (min-width: 768px)": {
      '#container' : `
        margin-top: 250px;
      `,
      '#container > #hero' : `
        width: 60%;
        align-items: center;
        padding-left: 0;
      `,
      
      'h1' : `
        text-align: center;
      `
    }
  }
});

export default Hero;