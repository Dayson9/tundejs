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
        <i color="${color}" class="bx bxl-{{ icon }}"></i>
        ` : `
        <img src={{ img }} alt="{{ name }}'s Icon"/>
        ` }
        <span>{{ name }}</span>
   `
  },

  stylesheet: {

    '.stack span' : `
      font-size: 12px;
      font-family: "DM Mono";
    `,
    
    '.stack img' : `
      width: 20px;
      height: 20px;
      display: inline;
      transform: translateY(2px);
    `,
    
    '.stack i' : "font-size: 20px;"
  }
});

export default StackIcon;