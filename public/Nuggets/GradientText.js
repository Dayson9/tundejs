import { Nugget } from 'queflow';

const GradientText = new Nugget("GradientText", {
  template: (data) => {
    return `
      <span style='background: linear-gradient({{ deg }}deg, rgb(50, 120, 180), rgb(50, 120, 180, .2)); -webkit-text-fill-color: transparent; -webkit-background-clip: text;' class='grad'>
        {{ text }}
      </span>`
  },
  stylesheet: {
    '.grad': `
      animation-name: glow;
      animation: glow 3s ease-in-out infinite alternate;
    `,

    "@keyframes glow": {
      '0%': 'filter: brightness(90%);',
      '100%': 'filter: brightness(150%);',
    }
  }
});

export default GradientText;