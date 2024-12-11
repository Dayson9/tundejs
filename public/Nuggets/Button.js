import { Nugget } from 'queflow';

const Button = new Nugget("Button", {
  template: (data) => {
    return `
      <button width={{ w }} height={{ h }} background={{ bg }} color={{ color }} onclick={{ click }}>${ data.icon.slice(0,1) === "l" ? "<i class='bx "+data.icon.slice(1)+"'></i> " : "" } {{ label }} ${ data.icon.slice(0,1) === "r" ? " <i class='bx "+data.icon.slice(1)+"'></i>" : "" }</button>
    `;
  },
  
  stylesheet: {
    "button" : `
      border: none;
      border-radius: 15px;
      font-weight: 700;
      margin: 0 auto;
      box-shadow: 12px 12px 0px rgb(50, 120, 180, .4);
    `
  }
});

export default Button;
