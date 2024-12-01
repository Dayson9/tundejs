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
     <div class='stack'>
     
       ${ data.icon ? `
        <i color="${color}" class="bx bxl-{{ icon }}"></i>
        ` : `
        <img src={{ img }} alt="{{ name }}'s Icon"/>
        ` }
        <span>{{ name }}</span>
     </div>
   `
  },

  stylesheet: {
    '.stack' : `
      display: block;
      width: auto;
      max-width: 30%;
      height: 30px;
      margin-left: 0%;
    `,
    
    '.stack span' : `
      font-size: 12px;
    `,
    
    '.stack img' : `
      width: 20px;
      height: 20px;
    `,
    
    '.stack i' : "font-size: 20px;"
  }
});

export default StackIcon;