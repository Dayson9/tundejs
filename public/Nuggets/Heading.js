import { Nugget } from 'queflow';

const Heading = new Nugget("Heading", {
  template: (data) => {
    return `<h2>${ data.colored ? data.text.replace(data.colored, '<span>'+data.colored+'</span>') : '{{ text }}' }</h2>`
  },

  stylesheet: {
    'h2': `
      font-size: 25px;
    `,
    
    'h2 span' : `
      color: rgb(50, 120, 180);
      text-decoration: underline;
      text-decoration-style: wavy;
    `
  }
});

export default Heading;