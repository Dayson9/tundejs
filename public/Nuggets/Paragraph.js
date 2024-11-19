import { Nugget } from 'queflow';

const Paragraph = new Nugget("Paragraph", {
  template: () => {
    return `
      <p font-family={{ font }} text-align= {{ align }} color={{ color }} font-size={{ size }}px>{{ text }}</p>
    `
  },
  
  stylesheet: {
    'p' : `
      color: white;
    `
  }
});

export default Paragraph;