import { subComponent } from 'queflow';

const Hero = new subComponent("Hero", {
  data: {
    darkMode: true,
  },
  template: () => {
    return `
      <div id='container' background={{ this.data.darkMode ? 'url(./assets/hero-static-mobile.png)' : 'white' }}>
        <div id='hero'>
          <h1 font-size='2.2rem' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>Building <GradientText { text: 'end-to-end', from: 'rgb(50, 120, 180)', to: 'rgb(50, 120, 180, .2)', deg: 35 } /> products, Fullstack Developer</h1>
          
          <Text { text: 'I Develop, I Build, I Deploy', color: "{{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}", size: 13 } />
          
          <Button { label: "About me", w: '160px', h: '60px', color: 'white', bg: "rgb(50, 120, 180)", icon: "r bxs-right-arrow", click: "window.location.href = '#about'" } />
        </div>
      </div>
    `
  },
  stylesheet: {
    "#container": `
      width: 100%;
      height: 350px;
      box-sizing: border-box;
      border: none;
      margin-top: 130px;
      position: static;
      background-position: 0px 0px;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 15px;
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
    `,
    "@media (min-width: 768px)": {
      '#container': `
        margin-top: 250px;
      `,
      '#container > #hero': `
        width: 60%;
        height: 65%;
        align-items: center;
        padding-left: 0;
      `
    },
    'h1': `
         text-align: center;
       `
  }
});

export default Hero;