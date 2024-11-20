import { Nugget } from 'queflow';

const Paragraph = new Nugget("Paragraph", {
  template: (data) => {
    return `
      <p font-family={{ font }} text-align="${ data.align.includes('dynamic') ? window.innerWidth < 768 ? 'left' : 'center' : data.align }" ${ data.color ? 'color={{ color }}' : '' } font-size={{ size }}px>{{ text }}</p>
    `
  }
});

export default Paragraph;