import { Nugget } from 'queflow';

const PillButton = new Nugget("PillButton", {
  template: () => {
    return `
      <svg width="100" height="100" onclick={{ closeLoader() }} opacity={{ opacity }}>
        <path d="M10,15 L85,15 C 85 15 95 35 85 50 L10,50 C 10 50 0 35 10 15 Z" stroke='rgb(50, 120, 180)' stroke-width='3.5'>
        </path>
        <path d="M30,33 L55,33" stroke='rgb(50, 120, 180)' stroke-width='3.5'></path>
        <path d="M50,24 L60,33 L50,41 Z" stroke='rgb(50, 120, 180)' stroke-width='3.5'>
        </path>
      </svg>
    `
  },

  stylesheet: {
    "svg": `
      background: transparent;
      transition: .7s;
    `,
    "svg path": `
      stroke-lineCap: round;
      stroke-lineJoin: round;
      fill: transparent;
    `
  }
});

export default PillButton;