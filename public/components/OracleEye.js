import { Component } from 'queflow';

const OracleEye = new Component('OracleEye', {
  data: {
    x: 40,
    y: 25.5,
    darkMode: true,
    opacity: 0,
    animation: () => null
  },
  template: () => {
    return `
      <div id='oracle' opacity={{ opacity }}>
        <svg width="80" height="45" viewBox='0 0 80 45'>
          <path d='M5,17.5 C 5,17.5 38,-5 75,17.5 C 75,17.5 42,50 5,17.5' fill={{ darkMode ? 'rgb(5,11,18)' : 'white' }} stroke-width='5' stroke='rgba(50, 101, 170)'></path>
          <circle cx={{ x }} cy={{ y }} r='8' fill='teal' />
        </svg>
      </div>
    `
  },
  stylesheet: {
    '#oracle' : `
      width: 25%;
      height: 45px;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 4;
      left: 37.5%;
      top: 1.5vh;
      transition: .3s;
    `,
    
    '#oracle path' : `
      stroke-linejoin: round;
      stroke-linecap: round;
    `
  }
});

export default OracleEye;