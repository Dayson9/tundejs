import { Nugget } from 'queflow';

const Text = new Nugget("Text", {
  template: (data) => {
    return `
      <span ${data.align ? 'text-align={{ align }}' : ''} ${data.color ? 'color={{ color }}' : ''} ${data.font ? ' font-family={{ font }}' : ''} ${data.size ? ' font-size={{ size }}' : ''} ${data.weight ? ' font-weight={{ weight }}' : ''} ${ data.bottom ? 'margin-bottom={{ bottom }}px' : '' } >{{ text }}</span>
    `
  },

  stylesheet: {
    'span': `
      display: block;
      font-size: 12px;
      text-align: center;
      font-weight: 540;
      font-family: "DM Mono";
    `
  }
});

export default Text;