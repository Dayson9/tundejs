import { Nugget } from 'queflow';

const StackIcon = new Nugget("StackIcon", {
  template: (data) => {
    const icon = data.icon;
    var color;
    switch (icon) {
      case 'javascript':
        color = 'gold';
        break;
      case 'vuejs':
        color = 'teal';
        break;
      
    }
    
   return `
       ${ data.icon ? `
        <Icon { color: "${color}", class: "bxl-{{ icon }}", size: 20 }/>
        ` : `
        <img src={{ img }} alt="{{ name }}'s Icon"/>
        ` }
        <Text { txt: '{{ name }}', size: 12, font: '"DM Mono"' } />
   `
  },

  stylesheet: {
    '.stack img' : `
      width: 20px;
      height: 20px;
      display: inline;
      transform: translateY(2px);
    `
  }
});

export default StackIcon;