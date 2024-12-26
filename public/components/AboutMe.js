import { subComponent } from 'queflow';

const AboutMe = new subComponent('AboutMe', {
  data: {
    darkMode: true,
    outline: ''
  },
  template: () => {
    return `
      <div id='about' class='section' margin-top='15vh' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        
          <Heading { text: 'About Me', colored: 'Me', bottom: 40 } />
          
          <Text { txt: 'I love', size: 22, align: 'center', font: '"Nova Square"', weight: 900, bottom: 30 } />
          
          <div id='my-hobbies' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'transparent' }}>
            <Hobby { name: 'Maths', icon: 'bx-math' } />
            <Hobby { name: 'Building', icon: 'bx-laptop' } />
            <Hobby { name: 'Brainstorming', icon: 'bx-brain' } />
            <Hobby { name: 'Music', icon: 'bxs-sun' } />
          </div>
          
          <Paragraph { text: 'I am Sodiq Tunde, a web developer dedicated to crafting innovative and user-centric digital experiences. With a focus on clean, efficient code, I transform ideas into reality.', align: 'center', size: 12 } />
        </div>
    `
  },
  stylesheet: {
    
    '#my-hobbies' : `
      width: ${ window.innerHeight < 768 ? '80%' : '50%' };
      height: ${ window.innerHeight < 768 ? '150px' : '260px' };
      background: transparent;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
      margin-top: 20px;
      margin-bottom: 70px;
    `,
    '#summary' : `
      width: ${ window.innerHeight < 768 ? '80%' : '50%' };
      height: auto;
      margin: 0 auto;
      padding-block: 20px;
      padding-inline: 10px;
      box-sizing: border-box;
      border-top: 3px solid grey;
    `,
    '#svg' : `
      width: 100%;
      height: auto;
    `,

    "@media (min-width: 768px)": {
      '#about': `
        padding-inline: 1.2em;
      `
    }
  }
});

export default AboutMe;
