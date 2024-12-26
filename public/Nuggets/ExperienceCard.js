import { Nugget } from 'queflow';

const width = window.innerWidth;

const ExperienceCard = new Nugget("ExperienceCard", {
  template: (data) => {
    return `
      <div class='card' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'white' }}>
        <div class='header' background={{ this.data.darkMode ? 'rgba(50, 101, 170)' : 'rgba(50, 101, 170, .3)' }}  color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
        
          <Text { txt: '{{ name }}', font: '"Nova Square"', size: 20 }/>
          <span>
            <Icon { class: 'bx-current-location', size: 20, top: 5 } /> {{ state }}, Nigeria
          </span>
        </div>
        <div class='duration' background={{ this.data.darkMode ? 'rgb(5,11,18)' : 'white' }}>
          <Icon { class: 'bxs-calendar', size: 20 } />
          <Text { txt: '{{ duration }}', size: 18 } />
        </div>
        
        <div class='role'>
          <Icon { class: 'bx-code-curly', size: 26 } />
          <Text { txt: '{{ role }}', size: 22, font: '"Nova Square"' } />
        </div>
        
        <ul class='list'>
          ${ data.points.map((item) => `<li>${item}</li>`).join('\n') }
        </ul>
      </div>
    `
  },

  stylesheet: {
    '.card': `
      width: ${ width < 768 ? '90%' : '50%' };
      height: auto;
      padding-block: 15px;
      border-radius: 25px;
      box-sizing: border-box;
      border: 2px solid rgb(45, 59, 78);
      margin: 0 auto;
    `,

    '.header, .duration': `
      width: 90%;
      height: 65px;
      border-radius: inherit;
      margin: 0 auto;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding-inline: 10px;
      padding-block: 15px;
      box-sizing: border-box;
    `,

    '.header span': `
      font-family: "DM Mono";
      font-size: 13px;
    `,
    '.duration': `
      width: 85%;
      height: 55px;
      padding-inline: 20px;
      border-radius: 50px;
      margin-top: 15px;
      flex-direction: row;
      justify-content: space-evenly;
      border: inherit;
   `,

    '.role': `
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      margin: 0 auto;
      margin-top: 35px;
   `,
    'ul': `
      width: 95%;
      box-sizing: border-box;
   `,
    'ul li': `
     text-align: left;
     font-family: "DM Mono";
     font-size: 13px;
     margin-top: 10px;
   `
  }
});

export default ExperienceCard;