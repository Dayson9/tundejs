import { subComponent } from 'queflow';

const Loader = new subComponent("Loader", {
  data: {
    x: 0,
    waveData: ""
  },
  template: () => {
    return `
      <div id='container'>
        <svg height="40%" width="65%">
          <path stroke-width="4" fill="none" d={{ this.data.waveData }} pathLength='400' stroke='rgb(12,44, 59)'/>
          <path stroke-width="4" fill="none" d={{ this.data.waveData }} id='first' pathLength='400' stroke='gold'/>
        </svg>
      </div>
    `
  },

  stylesheet: {
    "#container": `
      width: 100vw;
      height: 100vh;
      background: rgb(5,11,17);
    `,
    "svg": `
      position: absolute;
      top: 22%;
      left: 20%;
      background: transparent;
      border: 2px solid grey;
    `,
    "svg *": `
      transition: 6s;
      fill: transparent;
      stroke-linecap: round;
      stroke-linejoin: round;
      `
  }
});

export default Loader;