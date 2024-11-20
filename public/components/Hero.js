import { subComponent } from 'queflow';
import Paragraph from '../Nuggets/Paragraph.js';
import GradientText from '../Nuggets/GradientText.js';
import Button from '../Nuggets/Button.js';

const Hero = new subComponent("Hero", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div id='container'>
        <div id='hero'>
          <h1 color={{ this.data.darkMode ? 'white' : '' }}>Building <GradientText { text: 'end-to-end', from: 'rgb(50, 120, 180)', to: 'rgb(50, 120, 180, .2)', deg: 135 } /> products, Fullstack Developer</h1>
          
          <Paragraph { text: 'I Develop, I build, I Deploy', font: "'DM Mono'", align: "left", color: "{{ this.data.darkMode ? 'white' : 'black' }}", size: 13 } />
          
          <Button { label: "Dive In", w: '150px', h: '50px', color: "{{ this.data.darkMode ? 'white' : 'rgb(5,11,17)' }}", bg: "linear-gradient(45deg, rgb(50, 120, 180), rgb(50, 120, 180, .2))", icon: "r bxs-right-arrow" } />
        </div>
      </div>
    `
  },
  stylesheet: {
    "#container" : `
      width: 100%;
      height: 60vh;
      box-sizing: border-box;
      border: none;
      margin-top: 20vh;
      position: static;
    `,
    
    "#container > #hero" : `
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
    `
  }
});

export default Hero;