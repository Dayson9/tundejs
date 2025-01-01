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
        
        <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.' } />
      </div>
    `
  },
  stylesheet: {
    '#main' : `
      text-align: center;
    `
  }
});

export default Services;