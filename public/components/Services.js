import { Component } from 'queflow';

const Services = new Component('Services', {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div id='main' color={{ darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Services', colored: 'Services' } />
        <Text { txt: 'What Services do I render?', bottom: 30 } />
        <div id='grid'>
          <ServiceCard { title: 'Web Development', summary: 'I craft outstanding websites using web technologies such as HTML, CSS, JavaScript, Vue, QueFlow.', icon: 'bx-code-alt' } />
 
          <ServiceCard { title: 'Web Accessibility', summary: 'I build websites that are accessible to users with disabilities and users with low-end devices.', icon: 'bx-accessibility' } />
      
          <ServiceCard { title: 'Web Optimization', summary: 'Ensuring that websites are well optimized for speed and performance accross all devices/browsers.', icon: 'bxs-rocket' } />

          <ServiceCard { title: 'Responsive UIs', summary: 'I also design UIs that responds to different screen sizes, and devices. From mobile phones to PCs to monitors.', icon: 'bx-laptop' } />
        
          <ServiceCard { title: 'Clean UIs', summary: 'Designing eye-catching UIs that resonate with its purpose. While effectively focusing on small units of UIs such as buttons, forms, menus, and typography.', icon: 'bx-intersect' } />
        
          <ServiceCard { title: 'Latest Trends', summary: 'By effectively staying up-to-date with the latest trends in web development, I guarantee websites built with the latest technologies/tools.', icon: 'bx-time' } />
        
          <ServiceCard { title: 'Version Control', summary: 'Leveraging version control tools like GitHub/GitLab to work in sync with other developers in management of code changes/versions.', icon: 'bxl-git' } />
        
          <ServiceCard { title: 'Technical Support', summary: 'I provide technical support to any frontend related issues.', icon: 'bx-support' } />
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