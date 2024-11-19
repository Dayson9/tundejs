import { subComponent } from 'queflow';

const Hero = new subComponent("Hero", {
  data: {

  },
  template: () => {
    return `
      <div id='container'>
      
      </div>
    `
  },
  stylesheet: {
    "#container" : `
      width: 100%;
      height: 90vh;
      box-sizing: border-box;
      background: silver;
      margin-top: 20vh;
      position: static;
    `
  }
});

export default Hero;