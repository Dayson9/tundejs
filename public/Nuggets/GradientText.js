import { Nugget } from 'queflow';

const GradientText = new Nugget("GradientText", {
  template: (data) => {
    return `<span style='background: linear-gradient({{ deg }}deg, {{ from }}, {{ to }}); -webkit-text-fill-color: transparent; -webkit-background-clip: text;' ${ data.filter ? 'filter='+data.filter : '' }>{{ text }}</span>`
  },
  stylesheet: {
    'span' : `
      animation-name: glow;
      animation: glow 5s ease-in-out infinite alternate;
    `,
    
    "@keyframes glow" : {
      '0%' : 'filter: brightness(90%);',
      '100%' : 'filter: brightness(170%);',      
    }
  }
});

export default GradientText;