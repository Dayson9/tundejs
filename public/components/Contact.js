import { subComponent } from 'queflow';

const Contact = new subComponent("Contact", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' id='contact' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <Heading { text: 'Get in Touch', colored: 'Touch' } />
        <div class='bg' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'transparent' }}>
        
          <div class='col'>
            <StackItem { icon: 'bxl-github', label: 'Github', color: ' ', size: 11, link: 'www.github.com/dayson9' }/>
            <StackItem { icon: 'bxl-twitter', label: 'X', color: ' ', size: 11, link: 'x.com/JsTunde6245' }/>
            <StackItem { icon: 'bxl-telegram', label: 'Telegram', color: 'rgb(10, 120, 220)', size: 11, link: 't.me/Dayson5' }/>
          </div>
          
          <div class='col'>
            <StackItem { icon: 'bxl-linkedin-square', label: 'LinkedIn', color: '#0073B2', size: 11, link: 'www.linkedin.com/in/tunde-sodiq-5691b329b?trk=contact-info' }/>
            <StackItem { icon: 'bxl-facebook-circle', label: 'Facebook', color: 'dodgerblue', size: 11, link: 'www.facebook.com/profile.php?id=100093639788963' }/>
            <StackItem { icon: 'bxl-gmail', label: 'Gmail', color: 'rgb(220, 50, 50)', size: 11, link: 'mailto:tundedayson90@gmail.com' }/>
          </div>
        </div>
      </div>
    `;
  },
  stylesheet: {

  }
});

export default Contact;