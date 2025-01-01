import { Nugget } from 'queflow';

const width = window.innerWidth;

const ServiceCard = new Nugget("ServiceCard", {
  template: (data) => {
    return `
      <div class='section card' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'white' }} margin-bottom="30px">
        <Icon { class: '{{ icon }}', size: 35 } />
        <Heading { text: '{{ title }}' } />
        <Paragraph { text: '{{ summary }}' } />
      </div>
    `;
  },
  
  stylesheet: {
    '.card' : `
      width: ${ width < 768 ? '87%' : 'auto' };
      height: auto;
      text-align: center;
      margin: 0 auto;
      padding: auto;
      box-sizing: border-box;
      border: 1px solid rgb(45, 59, 78);
      border-radius: 15px;
    `,
    '.card i' : `
      -webkit-text-stroke: 1.5px dodgerblue;
      background: linear-gradient(125deg, rgb(50, 120, 180), rgb(50, 120, 180, .2));
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      font-weight: 900!
    `
  }
});

export default ServiceCard;