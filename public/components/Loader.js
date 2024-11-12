import { subComponent } from 'queflow';

const Loader = new subComponent("Loader", {
  data: {
    x: 0,
    d: "M50,50 L120,150"
  },
  template: () => {
    return `
      <div id='container'>
        <svg width='80%' height='20%'>
          <rect x={{ this.data.x }} y="0" width="80" height="30" fill="dodgerblue">
          </rect>
          <path d={{ this.data.d }} stroke-width="8" stroke="dodgerblue" stroke-linecap="round">
        </svg>
      <div>
    `
  },
  
  stylesheet: {
    "#container" : `
      width: 100%;
      height: 100vh;
      background: rgb(5,11,17);
    `,
    "svg" : `
      position: fixed;
      top: 40%;
      left: 10%;
      background: royal;
    `,
    "svg > rect" : `
      transition: 2s;
    `
  }
});

export default Loader;