import { Nugget } from 'queflow';

const Text = new Nugget("Text", {
  template: (data) => {
    return `
      <span ${data.color ? 'color={{ color }}' : ''} ${data.font ? ' font-family={{ font }}' : ''} ${data.size ? ' font-size={{ size }}' : ''}>{{ text }}</span>
    `
  },

  stylesheet: {
    'span': `
      display: block;
      font-size: 10px;
      font-family: '"DM Mono"';
    `
  }
});

export default Text;