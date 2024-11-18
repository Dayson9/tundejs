import { Nugget } from 'queflow';

const PillButton = new Nugget("PillButton", {
  template: () => {
    return `
      <svg width="100" height="100" onclick='{{ click }}' display='{{ display }}'>
        <path d="M10,15 L85,15 C 85 15 95 35 85 50 L10,50 C 10 50 0 35 10 15 Z" fill='rgb(5,11,17)' stroke='rgb(50, 120, 180)' stroke-width='3.5' pathLength='100' stroke-dasharray="100" stroke-dashoffset="100">
            <animate attributeName="stroke-dashoffset"
                     from="100"
                     to="0"
                     dur="2s"
                     begin="{{ delay0 }}s"
                     fill="freeze"/>
        </path>
        <path d="M30,33 L55,33" fill='rgb(5,11,17)' stroke='rgb(50, 120, 180)' stroke-width='3.5' pathLength='50' stroke-dasharray="50" stroke-dashoffset="50">
            <animate attributeName="stroke-dashoffset"
                     from="50"
                     to="0"
                     dur=".5s"
                     begin="{{ delay1 }}s"
                     fill="freeze"/>
        </path>
        <path d="M50,24 L60,33 L50,41 Z" fill='rgb(5,11,17)' stroke='rgb(50, 120, 180)' stroke-width='3.5' pathLength='50' stroke-dasharray="50" stroke-dashoffset="50">
            <animate attributeName="stroke-dashoffset"
                     from="50"
                     to="0"
                     dur=".5s"
                     begin="{{ delay2 }}s"
                     fill="freeze"/>
        </path>
      </svg>
    `
  },

  stylesheet: {
    "svg": `
      background: transparent;
    `,
    "svg path": `
      stroke-lineCap: round;
      stroke-lineJoin: round;
    `
  }
});

export default PillButton;