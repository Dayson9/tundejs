import { subComponent } from 'queflow';

const TopBar = new subComponent("TopBar", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <header>
        <h2 color='rgb(50, 120, 180)'>Sodiq Tunde</h2>
        <div class='right' background={{ this.data.darkMode ? 'rgba(50, 101, 170, .5)' : 'rgb(50, 120, 180, .2)'; }}>
          <div class='round' background={{ this.data.darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,17)'; }} onclick={{ this.data.darkMode = !this.data.darkMode; AppContent.data.darkMode = !AppContent.data.darkMode; }}>
            <i class={{ this.data.darkMode ? 'bx bxs-sun' : 'bx bxs-moon' }}></i>
          </div>
          <div class='round' background={{ !this.data.darkMode ? 'rgb(50, 120, 180)' : 'rgb(5,11,17)'; }}>
            <i class='bx bx-menu-alt-right'></i>
          </div>          
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
    
    ".round i": `
      display: block;
      font-size: 26px;
      color: white;
    `
  }
});

export default TopBar;