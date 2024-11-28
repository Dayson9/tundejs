import { Nugget } from 'queflow';

const StackItem = new Nugget("StackItem", {
  template: (data) => {
    return `
      <div class='item'>
       ${ data.icon ? 
       "<i class='bx {{ icon }}' color={{ color }}></i>"  :  `<img src={{ src }} alt={{ alt }}/>` }
       
        <Text { text: '{{ label }}', size: ${ data.size ? data.size : 15 } } />
      </div>
    `
  },

  stylesheet: {
   '.item' : `
      width: 80%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
   `,
   'img' : `
      width: 30px;
      height: 30px;
   `,
   
   'i' : "font-size: 30px;",
  }
});

export default StackItem;