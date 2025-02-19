  import { Component } from 'queflow';
  
  const width = window.innerWidth;
  
  const TopBar = new Component("TopBar", {
    data: {
      darkMode: true,
      menuX: width > 768 ? 130 : 110,
      lineH: 20,
      sliders: [30, 30, 30]
    },
    template: () => {
      return `
        <header>
          <h2 color='rgb(50, 120, 180)'>Sodiq Tunde</h2>
          <div class='right' background={{ darkMode ? 'rgba(50, 101, 170, .5)' : 'rgb(50, 120, 180, .2)'; }}>
            <div class='round' background={{ darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,18)'; }} onclick={{ switchMode(); }}>
              <span class={{ darkMode ? 'bx bxs-sun' : 'bx bxs-moon' }}></span>
            </div>
            <div class='round' background={{ !darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,18)'; }} onclick={{ openMenu(); }}>
              <span class={{ menuX === 0 ? '' : 'bx bx-menu-alt-right' }}></span>
              <svg display={{ menuX === 0 ? 'block' : 'none' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" fill='white'/></svg>
            </div>          
          </div>
          
          <div class='menu' transform="translateX({{ menuX }}%)" onclick={{ openMenu(); }} background={{ darkMode ? 'rgb(50, 101, 170)' : 'rgba(80, 131, 200)' }}>
            <div id='line' height={{ lineH+'%' }}></div>
            <div class='col'>
              <SlidingText { text: "About", x: "translateX({{ sliders[0] }}px)", id: "about" } />
      
              <SlidingText { text: "Works", x: "translateX({{ sliders[1] }}px)", id: "works" } />
            
              <SlidingText { text: "Contact", x: "translateX({{ sliders[2] }}px)", id: "contact" } />
            </div>
          </div>
        </header>
      `
    },
    stylesheet: {
      'header': `
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
      "header, header *": `
        transition: .3s;
      `,
      'h2': `
        font-family: "Pacifico"!important;
        font-size: 28px;
      `,
      '.right': `
        width: 35%;
        height: 65%;
        border: none;
        display: inherit;
        flex-direction: inherit;
        justify-content: space-evenly;
        align-items: center;
        border-radius: inherit;
      `,
      '.right > .round': `
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
  
      ".menu": `
        width: 100px;
        height: 30vh;
        border-radius: 10px;
        position: absolute;
        right: 0;
        top: 85%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
      `,
      '.menu #line': `
        width: 4px;
        background: white;
        border-radius: 5px;
        transition: .2s!important;
      `,
      '.menu .col': `
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
      `,
      "@media (min-width: 768px)": {
        'header': `
          height: 100px;
          justify-content: space-between;
          padding-inline: 5%;
      `,
        '.right': `
          width: 25%;
        `,
        '.menu': `
          height: 15vh;
        `
      }
    }
  });
  
  export default TopBar;