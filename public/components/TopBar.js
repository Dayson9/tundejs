import { subComponent } from 'queflow';
import SlidingText from '../Nuggets/SlidingText.js';

const TopBar = new subComponent("TopBar", {
  data: {
    darkMode: true,
    menuX: 110,
    sliders: [30, 30, 30]
  },
  template: () => {
    return `
      <header>
        <h2 color='rgb(50, 120, 180)'>Sodiq Tunde</h2>
        <div class='right' background={{ this.data.darkMode ? 'rgba(50, 101, 170, .5)' : 'rgb(50, 120, 180, .2)'; }}>
          <div class='round' background={{ this.data.darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,17)'; }} onclick={{ switchMode(); }}>
            <span class={{ this.data.darkMode ? 'bx bxs-sun' : 'bx bxs-moon' }}></span>
          </div>
          <div class='round' background={{ !this.data.darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,17)'; }} onclick={{ openMenu(); }}>
            <span class={{ this.data.menuX === 0 ? 'bx' : 'bx bx-menu-alt-right' }}>{{ this.data.menuX === 0 ? '×' : '' }}</span>
          </div>          
        </div>
        
        <div class='menu' transform={{ 'translateX('+ this.data.menuX +'%)' }} onclick={{ openMenu(); }}>
          <SlidingText { text: "About", x: "{{ 'translateX('+this.data.sliders[0]+'px)' }}", click: 'alert()' } />
          
          <SlidingText { text: "Stack", x: "{{ 'translateX('+this.data.sliders[1]+'px)' }}", click: 'alert()' } />
          
          <SlidingText { text: "Works", x: "{{ 'translateX('+this.data.sliders[2]+'px)' }}", click: 'alert()' } />
        </div>
      </header>
    `
  },
  stylesheet: {
    'header' : `
      width: 90%;
      height: 70px;
      margin: 0 auto;
      position: fixed;
      top: 5vh;
      left: 5%;
      background: transparent;
      backdrop-filter: blur(3px);
      border: 1px solid #A1A1AA;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    `,
    "header *" : `
      transition: .5s;
    `,
    'h2' : `
      font-family: "Pacifico";
      font-size: 28px;
    `,
    '.right' : `
      width: 35%;
      height: 65%;
      border: none;
      display: inherit;
      flex-direction: inherit;
      justify-content: inherit;
      align-items: inherit;
      border-radius: inherit;
    `,
    '.right > .round' : `
      width: 38px;
      height: 38px;
      background: rgb(5,11,17);
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: inherit;
    `,
    
    ".round span": `
      display: block;
      font-size: 26px;
      color: white;
      transform: translate(0,0);
    `,
    
    ".menu" : `
      width: 100px;
      height: 30vh;
      background: rgba(50, 101, 170);
      border-radius: 10px;
      position: absolute;
      right: 0;
      top: 85%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
    `
  }
});

export default TopBar;