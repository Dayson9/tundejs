import { subComponent } from 'queflow';

const Loader = new subComponent("Loader", {
  data: {
    loadingBarWidth: 0
  },
  template: () => {
    return `
      <div id='container'>
      <div class='center'>
        <span color="white">Loading...</span>
        <div id='loader'>
          <div width={{ this.data.loadingBarWidth+"%" }}></div>
        </div>
      </div>
     </div>
    `
  },

  stylesheet: {
    "#container": `
      width: 100vw;
      height: 100vh;
      background: rgb(5,11,17);
      display: flex;
    `,
    ".center" : `
      width: 80%;
      height: 20%;
      border: 1px solid white;
      margin: 50% auto;
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
    `,
    "#loader > div" : `
      height: 100%;
      background: rgb(50, 120, 180);
    `
  }
});

export default Loader;