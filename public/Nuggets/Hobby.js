import { Nugget } from 'queflow';

const Hobby = new Nugget("Hobby", {
  template: () => {
    return `
      <div class='hobby' border-color="{{ this.data.darkMode ? 'rgb(50, 120, 180, .4)' : 'rgba(45, 59, 78, .4)' }}">
        <i class='bx {{ icon }}'></i>
        <Text { text: '{{ name }}' } />
      </div>
    `
  },

  stylesheet: {
    '.hobby' : `
      border-radius: 40px;
      background: transparent;
      border: 4px solid rgb(50, 120, 180, .4);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      box-sizing: border-box;
      padding-inline: 22%;
    `,
    
    '.hobby i' : `
      font-size: 28px;
      color: rgb(50, 120, 180);
    `
  }
});

export default Hobby;
