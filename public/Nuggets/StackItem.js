import { Nugget } from 'queflow';

const StackItem = new Nugget("StackItem", {
  template: (data) => {
    return `
      <div class='item'>
       ${ data.icon ? "<i class='bx {{ icon }}' color={{ color }}></i>" : "<img src={{ src }} alt={{ alt }} />" }
        <Text { text: '{{ label }}', font: '"DM Mono"' } />
      </div>
    `
  },

  stylesheet: {
   '.item' : `
      width: 60px;
      height: 70px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
   `,
   'img' : `
      width: 30px;
      height: 30px;
   `,
   
   'i' : "font-size: 30px;"
  }
});

export default StackItem;