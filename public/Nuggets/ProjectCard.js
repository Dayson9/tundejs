import { Nugget } from 'queflow';
import StackIcon from './StackIcon.js'

const ProjectCard = new Nugget("ProjectCard", {
  template: (data) => {
    return `
      <div class='project' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'white' }}>
      
        <img src={{ src }} alt='{{ name }} Logo'/>
        
        <h2 text-align='left' padding-left='5%'>{{ name }} <a href='https://{{ url }}' target='_blank' rel='noreferrer' class='bx bx-right-top-arrow-circle' aria-label='Preview project' color='rgba(50, 101, 170)'></a>
        </h2>
        
        <div class='footer'>
          <div class='description'>
            <Paragraph { text: '{{ description }}', align: 'left' } />
          </div>
          <div class='stack'>
            <Text { text: 'Built with:', align: 'left', size: 12 } />
            ${data.stack.map((item) => {
              switch (item) {
                case 'js':
                  return "<StackIcon { name: 'JavaScript', icon: 'javascript' } />";
                  break;
                case 'qf':
                  return "<StackIcon { name: 'QueFlow.js', img: './assets/queflow.webp' } />";
                  break;
                case 'vue':
                  return "<StackIcon { name: 'Vue.js', icon: 'vuejs' } />";
                  break;
                
                
              }
            }).join('\n') }
          </div>
        </div>
      </div>
    `
  },

  stylesheet: {
    '.project': `
      width: 300px;
      height: auto;
      border-radius: 25px;
      border: 1px solid rgb(45, 59, 78);
      margin: 0px auto;
      padding-block: 20px;
      box-sizing: border-box;
      margin-bottom: 40px;
    `,

    '.project > img': `
      width: 90%;
      height: ${ window.innerHeight > 768 ? '23vh' : '50vh' };
      border: inherit;
      border-radius: inherit;
      
    `,
    '.project a': `
      color: inherit;
      text-decoration: none;
      transform: translateY(2px);
    `,
    '.footer': `
      width: 90%;
      height: auto;
      border-radius: 15px;
      border: inherit;
      background: inherit;
      margin-inline: auto;
      margin-top: 20px;
      box-sizing: content-box;
    `,
    '.description, .stack': `
      width: 100%;
      height: auto;
      padding-inline: 7px;
      padding-block: 4px;
    `,
    '.footer .description': `
      border-radius: 15px 15px 0px 0px;
      border-bottom: 1.3px solid rgb(45, 59, 78);
      box-sizing: border-box;
    `,
    '.footer .stack': `
      border-radius: 0px 0px 15px 15px;
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    `,

    ".stack *": `
      display: inline;
    `,
    "@media (min-width: 768px)": {
      '.project' : `
        height: 33vh;
      `
    }
  }
});

export default ProjectCard;