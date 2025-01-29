import { Nugget } from 'queflow';

const Hobby = new Nugget("Hobby", {
  template: () => {
    return `
      <div class='hobby' border-color="{{ darkMode ? 'rgb(50, 120, 180, .4)' : 'rgba(45, 59, 78, .4)' }}" outline="{{ outline }}">
        <Icon { class: '{{ icon }}', color: 'rgb(50, 120, 180)', size: 30 } />
        <Text { txt: '{{ name }}' } />
      </div>
    `
  },

  stylesheet: {
    '.hobby' : `
      border-radius: 40px;
      background: transparent;
      border: 4px solid rgba(50, 120, 180, .4);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      padding-inline: 15px;
      box-sizing: content-box;
      transition: .5s;
    `
  }
});

export default Hobby;
