import { subComponent } from 'queflow';

const Hero = new subComponent("Hero", {
  data: {
    darkMode: true,
    handRotation: 0
  },
  template: () => {
    return `
      <div id='container' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <div id='hero'>
          <h1 font-size='42px' font-family='"Nova Square"' id='h-heading'>Hi <span transform={{ 'rotate('+this.data.handRotation+'deg)' }} class='rotate'>👋</span>, I'm <GradientText { text: 'Tunde', deg: 135 }/>

          </h1>
          
          <Text { txt: 'I\\'m a software engineer with a high knack for building web based innovative apps, with a touch of uniqueness, I craft intuitive and performant websites.', size: 12 } />
          
          <Button { label: "About me", w: '150px', h: '60px', color: 'white', bg: "rgba(50, 101, 170)", icon: "r bxs-right-arrow", click: "scrollTo('about')" } />
        </div>
      </div>
    `
  },
  stylesheet: {
    "#container": `
      width: 100%;
      height: 380px;
      box-sizing: border-box;
      border: none;
      margin-top: 140px;
      position: static;
      background: transparent;
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

    '.grad': `
      -webkit-text-stroke: 1.5px dodgerblue; 
      color: white;
      `,
    'h1 .rotate' : `
      display: inline-block;
      transition: .3s;
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