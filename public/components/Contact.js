import { subComponent } from 'queflow';

const Contact = new subComponent("Contact", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section'>
        <Heading { text: 'Get in Touch', colored: 'Touch' } />
        <div class='bg' background={{ this.data.darkMode ? 'rgb(15, 19, 28)' : 'transparent' }} color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        
          <div class='col'>
            <StackItem { icon: 'bxl-github', label: 'Github', color: 'navyblue', size: 11 }/>
            <StackItem { icon: 'bxl-twitter', label: 'X', color: 'dodgerblue', size: 11 }/>
            <StackItem { icon: 'bxl-telegram', label: 'Telegram', color: 'dodgerblue', size: 11 }/>
          </div>
          
          <div class='col'>
            <StackItem { icon: 'bxl-linkedin-square', label: 'LinkedIn', color: '#0073B2', size: 11 }/>
            <StackItem { icon: 'bxl-facebook-circle', label: 'Facebook', color: 'dodgerblue', size: 11 }/>
            <StackItem { icon: 'bxl-nodejs', label: 'NodeJS', color: 'dodgerblue', size: 11 }/>
          </div>
        </div>
      </div>
    `;
  },
  stylesheet: {

  }
});

export default Contact;