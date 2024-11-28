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
            <StackItem { icon: 'bxl-vuejs', label: 'VueJS', color: 'teal' }/>
            <StackItem { src: '././assets/queflow.png', label: 'QueFlowJS', alt: 'QueFlowJS Logo' }/>
            <StackItem { icon: 'bxl-nodejs', label: 'NodeJS', color: 'dodgerblue' }/>
          </div>
        </div>
      </div>
    `;
  },
  stylesheet: {

  }
});

export default Contact;