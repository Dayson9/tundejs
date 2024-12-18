import { subComponent } from 'queflow';

const Footer = new subComponent('Footer', {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <footer background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'transparent' }} color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
      
        <div id='top'>
          <div>
            <span class='bx bx-copyright'></span>
            <Text { text: '2024', size: 12, align: 'left', font: '"Nova Square"' } />
          </div>
          
          <Text { text: '{{ day[new Date().getDay()]; }},  {{ month[new Date().getMonth()]; }} {{ new Date().getFullYear(); }} | {{ new Date().toTimeString().slice(0,8); }}', size: 12, align: 'center', font: '"Nova Square"' } />
        </div>
        
        <div id='bottom'>
          <Text { text: 'Built with: ', size: 14, align: 'center', font: '"Nova Square"' }/>
          <div margin-left='15px'>
            <StackItem { src: './assets/queflow.webp', label: 'QueFlowJS', size: 22, alt: 'QueFlowJS Icon', nova: true }/>
          </div>
        </div>
      </footer>
    `
  },
  stylesheet: {
    'footer': `
      width: 95%;
      height: 110px;
      border: 1px solid rgb(45, 59, 78);
      margin: 0 auto;
      border-radius: 20px;
      margin-bottom: 20px;
    `,
    
    'footer #top' : `
      width: 100%;
      height: 40%;
      border-bottom: inherit;
      border-radius: 20px 20px 0px 0px;
      justify-content: space-between;
      padding-inline: 10px;
    `,
    
    'footer #bottom' : `
      width: 100%;
      height: 60%;
      border-radius: 0px 0px 20px 20px;
      padding-left: 15px;
      padding-right: 10%;
    `,
    
    '#bottom > div' : "transform: translateX(-15%);",
    'footer div' : `
      display: flex;
      align-items: center;
      justify-content: flex-start;
      box-sizing: border-box;
    `
  }
});

export default Footer;
