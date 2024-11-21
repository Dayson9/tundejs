import { subComponent } from 'queflow';
import PillButton from '../Nuggets/PillButton.js';

const Loader = new subComponent("Loader", {
  data: {
    loadingBarWidth: 0,
    containerY: 100,
    btnOpacity: 0,
    intro: {
      text: "",
      opacity: 0,
      y: 0,
      scale: .7,
      cursorColor: "silver",
      handY: 0,
      handOpacity: 0
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  },
  template: () => {
    return `
      <div id='container' transform={{ 'translateY('+this.data.containerY+'%)' }}>
        <div class='center' opacity={{ this.data.center.opacity }} transform={{ 'translateY('+this.data.center.y+'px) scale('+this.data.center.scale+')' }}>
          <span color="white">Loading...</span>
          <div id='loader'>
            <div width={{ this.data.loadingBarWidth+'%' }}></div>
          </div>
        </div>
        <div class='intro' opacity={{ this.data.intro.opacity }} transform={{ 'translateY('+this.data.intro.y+'px) scale('+this.data.intro.scale+')' }}>
          <h3>
            <span>{{ this.data.intro.text }}</span>
            <span class='cursor' color={{ this.data.intro.cursorColor }}>_</span>
          </h3>
          <h2 transform={{ 'translateY('+this.data.intro.handY+'px)' }} transition=".25s" opacity={{ this.data.intro.handOpacity }}>👇</h2>
          <PillButton { delay0: 21.5, delay1: 23.5, delay2: 24, click: 'closeLoader()', opacity: '{{ this.data.btnOpacity }}' } />
        </div>
     </div>
    `
  },

  stylesheet: {
    "#container": `
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background: rgb(5,11,17);
      display: flex;
      flex-direction: column;
      transition: .9s;
      z-index: 4;
    `,
    "#container > div": "transition: 1s;",
    ".center": `
      width: 80%;
      height: 20%;
      margin-left: 10%;
      margin-top: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
    `,
    "#loader": `
      width: 60%;
      height: 5px;
      margin: 0 auto;
      background: rgba(50, 101, 170, .5);
      display: flex;
      justify-content: flex-start;
      margin-top: -35px;
    `,
    "#loader > div": `
      height: 100%;
      background: rgb(50, 120, 180);
    `,
    ".center > span": `
      font-size: 12px;
    `,
    ".intro": `
      width: 90%;
      height: 57%;
      margin-left: 5%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      color: white;
      text-align: center;
    `,
    ".cursor": `
      font-size: 40px;
      font-weight: 900;
    `
  }
});

export default Loader;