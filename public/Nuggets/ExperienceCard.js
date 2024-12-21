import { Nugget } from 'queflow';

const ExperienceCard = new Nugget("ExperienceCard", {
  template: (data) => {
    return `
      <div class='card' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'white' }}>
        <div class='header'>
          <Text { txt: '{{ name }}' }/>
        </div>
      
      </div>
    `
  },

  stylesheet: {
    '.card' : `
      width: 80%;
      height: auto;
      padding-block: 15px;
      border-radius: 15px;
    `
  }
});

export default ExperienceCard;