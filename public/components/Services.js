import { subComponent } from 'queflow';

const Services = new subComponent('Services', {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div id='main' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Services', colored: 'Services' } />
        <Text { txt: 'What Services do I render?', bottom: 30 } />
        <div id='grid'>
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />

          <ServiceCard { title: 'Web Optimization', summary: 'Ensuring that websites are well optimized for speed and performance accross all devices/browsers.', icon: 'bx-code-alt' } />
 
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
        
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
        
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
        
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
        
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
        
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
        </div>
      </div>`

  },
  stylesheet: {
    '#main': `
      text-align: center;
    `,
    "@media (min-width: 768px)": {
      '#grid': `
        width: 100vw;
        height: auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(4, 1fr);
        grid-gap: 60px;
        box-sizing: border-box;
      `
    }
  }
});

export default Services;