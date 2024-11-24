import { Nugget } from 'queflow';
import StackIcon from './StackIcon.js'

const ProjectCard = new Nugget("ProjectCard", {
  template: (data) => {
    return `
      <div class='project'>
        <h2 color='rgb(155, 169, 188)'>{{ name }}</h2>
        <img src={{ src }} alt='{{ name }} Logo'/>
        
        <div class='footer'>
          <div class='description'>
            <Paragraph { text: '{{ description }}', align: 'left' } />
          </div>
          <div class='stack'>
            <Paragraph { text: 'Built with:', align: 'left' } />
            <StackIcon { name: 'JS' } />
            <StackIcon { name: 'QF' } />
            <StackIcon { name: 'JS' } />
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
      margin: 0 auto;
      padding-block: 15px;
      background: rgb(15, 19, 28);
      box-sizing: border-box;
    `,
    
    'img' : `
      width: 90%;
      height: 55vh;
      border: inherit;
      border-radius: inherit;
      
    `,
    
    '.footer' : `
      width: 90%;
      min-height: 20vh;
      border-radius: 15px;
      border: inherit;
      background: inherit;
      margin-inline: auto;
      margin-top: 20px;
      margin-bottom: 30px;
      box-sizing: content-box;
    `,
    '.description, .stack' : `
      width: 100%;
      height: auto;
      padding-left 7px;
      padding-block: 10px;
      white-space: wrap;
    `,
    '.footer .description' : `
      border-radius: 15px 15px 0px 0px;
      border-bottom: 1.3px solid rgb(45, 59, 78);
      box-sizing: border-box;
    `,
    '.footer .stack' : `
      border-radius: 0px 0px 15px 15px;
      text-align: left;
    `,
    
    ".stack *" : `
      display: inline;
    `
  }
});

export default ProjectCard;