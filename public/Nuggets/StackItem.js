import { Nugget } from 'queflow';

const StackItem = new Nugget("StackItem", {
  template: (data) => {
    if(data.link) {
    return `
      <div class='item' aria-label='My {{ label }} profile' onclick='window.open("https://{{ link }}", "_blank")'>
        ${ data.icon ? 
          "<Icon { class: 'bx {{ icon }}', color: '{{ color }}', size: 35 } />"  :  `<img src={{ src }} alt={{ alt }}/>` }
       
        <Text { text: '{{ label }}', size: ${ data.size ? data.size : 15 } } />
      </div>
    `
    } else {
      return `
      <div class='item'>
       ${ data.icon ? 
       "<Icon { class: 'bx {{ icon }}', color: '{{ color }}', size: 35 } />"  :  `<img src={{ src }} alt={{ alt }} ${ data.size ? 'width="{{ size }}px" height="{{ size }}px"' : '' }/>` }
       
        <Text { text: '{{ label }}', size: ${ data.src ? data.size-10 : 12 }, font: '${ data.nova ? '"Nova Square"' : '"DM Mono"' }' } />
      </div>
    `
    }
  },

  stylesheet: {
   '.item' : `
      width: 90%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
   `,
   'img' : `
      width: 38px;
      height: 38px;
   `,
   'i' : "transform: translateX(-5px)",
  }
});

export default StackItem;