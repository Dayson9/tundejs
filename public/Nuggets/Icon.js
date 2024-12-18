import { Nugget } from 'queflow';

const Icon = new Nugget("Icon", {
  template: (data) => {
    return `
      <i class={{ class }} ${data.color ? 'color={{ color }}' : ''} ${data.size ? ' font-size={{ size }}px' : ''}><i>
    `
  },

  stylesheet: {
    'i': `
      font-size: 12px;
    `
  }
});

export default Icon;