import { Nugget } from 'queflow';

const ServiceCard = new Nugget("ServiceCard", {
  template: (data) => {
    return `
      <div class='card section' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'white' }}>
        <Heading { text: '{{ title }}' } />
        <Paragraph { text: '{{ summary }}' } />
      </div>
    `;
  },
  
  stylesheet: {
    '.card' : `
      width: 270px;
      height: auto;
      text-align: center;
      margin: 0 auto;
      padding: auto;
      box-sizing: border-box;
      border: 1px solid rgb(45, 59, 78);
      border-radius: 15px;
    `
  }
});

export default ServiceCard;