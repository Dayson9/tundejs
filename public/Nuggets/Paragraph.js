import { Nugget } from 'queflow';

const Paragraph = new Nugget("Paragraph", {
  template: (data) => {
    return `
      <p font-family="DM Mono" text-align="${ data.align?.includes('dynamic') ? window.innerWidth < 768 ? 'left' : 'center' : data.align }" ${ data.color ? 'color={{ color }}' : '' } ${ data.size ? 'font-size={{ size }}px' : '' }>{{ text }}</p>
    `
  },
  
  stylesheet: {
    'p' : `
      text-align: center;
      font-size: 12px;
    `
  }
});

export default Paragraph;