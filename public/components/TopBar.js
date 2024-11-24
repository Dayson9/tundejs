import { subComponent } from 'queflow';

const TopBar = new subComponent("TopBar", {
  data: {
    darkMode: true,
    menuX: window.innerWidth > 768 ? 130: 110,
    sliders: [30, 30, 30]
  },
  template: () => {
    return `
      <header>
        <h2 color='rgb(50, 120, 180)'>Sodiq Tunde</h2>
        <div class='right' background={{ this.data.darkMode ? 'rgba(50, 101, 170, .5)' : 'rgb(50, 120, 180, .2)'; }}>
          <div class='round' background={{ this.data.darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,18)'; }} onclick={{ switchMode(); }}>
            <span class={{ this.data.darkMode ? 'bx bxs-sun' : 'bx bxs-moon' }}></span>
          </div>
          <div class='round' background={{ !this.data.darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,18)'; }} onclick={{ openMenu(); }}>
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
      backdrop-filter: blur(11px);
      border: 1px solid rgb(45, 59, 78);
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      box-sizing: border-box;
      z-index: 2;
    `,
    "header *" : `
      transition: .3s;
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
      justify-content: space-evenly;
      align-items: center;
      border-radius: inherit;
    `,
    '.right > .round' : `
      width: 38px;
      height: 38px;
      background: rgb(5,11,18);
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
    `,
    
    "@media (min-width: 768px)" : {
      'header' : `
        height: 100px;
        justify-content: space-between;
        padding-inline: 5%;
    `,
      '.right' : `
        width: 25%;
      `,
      '.menu' : `
        height: 15vh;
      `
    }
  }
});

export default TopBar;