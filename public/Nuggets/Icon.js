import { Nugget } from 'queflow';

const Icon = new Nugget("Icon", {
  template: (data) => {
    return `
      <i class='bx {{ class }}' ${data.color ? 'color={{ color }}' : ''} ${data.size ? ' font-size={{ size }}px' : ''} ${data.top ? 'transform=translateY({{ top }}px)' : '' }><i>
    `
  },

  stylesheet: {
    'i': `
      font-size: 12px;
    `
  }
});

export default Icon;