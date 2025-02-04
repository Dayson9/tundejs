import { Component } from 'queflow';

const width = window.innerWidth

const Loader = new Component("Loader", {
  data: {
    loadingBarWidth: 0,
    containerY: 0,
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
      <div id='container' transform="translateY({{ containerY }}%)">
        <div class='center' opacity={{ center.opacity }} transform="translateY({{ center.y }}px) scale({{ center.scale }})">
        
          <Text { txt: 'Loading', color: 'white', font: 'Nova Square' } />
          
          <div id='loader'>
            <div width={{ loadingBarWidth+'%' }}></div>
          </div>
        </div>
        <div class='intro' opacity={{ intro.opacity }} transform="translateY({{ intro.y }}px) scale({{ intro.scale }})">
          <h3 font-family='"Nova Square"'>
            <span>{{ intro.text }}</span>
            <span class='cursor' color={{ intro.cursorColor }}>_</span>
          </h3>
          <h2 transform="translateY({{ intro.handY }}px)" transition=".5s" opacity={{ intro.handOpacity }}>👇</h2>
          <PillButton { click: 'closeLoader()', opacity: '{{ btnOpacity }}' } />
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
      background: linear-gradient(135deg, rgb(5,11,18), rgb(15, 21, 38));
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
      height: ${ width < 768 ? 57 : 37 }%;
      position: fixed;
      left: 5%;
      top: ${ width < 768 ? 47 : 25 }%;
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
