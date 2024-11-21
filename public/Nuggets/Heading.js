import { Nugget } from 'queflow';

const Heading = new Nugget("Heading", {
  template: () => {
    return `<h2>{{ text }}</h2>`
  },

  stylesheet: {
    'h2': `
      font-size: 25px;
    `
  }
});

export default Heading;