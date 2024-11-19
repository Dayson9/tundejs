import { subComponent } from 'queflow';

const Hero = new subComponent("Hero", {
  data: {

  },
  template: () => {
    return `
      <div id='container'>
        <div id='hero'>
          <h1 color='white'>Building end-to-end products, Fullstack Developer</h1>
        </div>
      </div>
    `
  },
  stylesheet: {
    "#container" : `
      width: 100%;
      height: 50vh;
      box-sizing: border-box;
      border: 1px solid silver;
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
      align-items: center;
      justify-content: space-evenly;

    `
  }
});

export default Hero;