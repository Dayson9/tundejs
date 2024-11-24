import { Nugget } from 'queflow';

const StackIcon = new Nugget("StackIcon", {
  template: (data) => {
   let output = '<div class="wrap">';
   const name = data.name;
    switch (name) {
      case 'JS':
        output+=`
          <span class='bx bxl-javascript' color='gold'></span> <h6>JavaScript</h6>
        `
        break;
      case 'QF':
        output+= `
          <img src='./assets/queflow.png' width='20px' height='20px'/> <h6>QueFlow.js</h6>
        `
        break;
    }
    
    return output+'</div>'
  },

  stylesheet: {
    '.wrap': `
      min-width: 80px;
      height: 15px;
      background: grey;
      margin-inline: 12px;
      border-radius: 15px;
    `,
    'h6': `
      font-size: 12px;
      margin: 2px;
   `,
   'span' : `
     font-size: 20px;
     transform: translateY(8px);
     `,
   'img' : "transform: translateY(5px);"
  }
});

export default StackIcon;