import { subComponent } from 'queflow';

const Footer = new subComponent('Footer', {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <footer background={{ this.data.darkMode ? 'rgb(15, 19, 28)' : 'transparent' }} color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
      
        <div id='top'>
          <Text { text: '© 2024', size: 12, align: 'left' } />
        </div>
        
        <div id='bottom'>
          <Text { text: 'Built with: ', size: 14, align: 'center' }/>
          <div>
            <StackItem { src: './assets/queflow.webp', label: 'QueFlowJS', size: 22, alt: 'QueFlowJS Icon', nova: true }/>
          </div>
        </div>
      </footer>
    `
  },
  stylesheet: {
    'footer': `
      width: 90%;
      height: 100px;
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
    `,
    
    'footer #bottom' : `
      width: 100%;
      height: 60%;
      border-radius: 0px 0px 20px 20px;
    `,
    '#bottom > div' : "transform: translateX(-20%);",
    'footer div' : `
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 20px;
      padding-right: 15%;
      box-sizing: border-box;
    `
  }
});

export default Footer;