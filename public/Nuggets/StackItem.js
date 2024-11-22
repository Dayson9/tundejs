import { Nugget } from 'queflow';

const StackItem = new Nugget("StackItem", {
  template: () => {
    return `
      <div class='item'>
        <i class='bx {{ icon }}'></i>
        <Text { text: '{{ label }}' } />
      </div>
    `
  },

  stylesheet: {
    
  }
});

export default StackItem;