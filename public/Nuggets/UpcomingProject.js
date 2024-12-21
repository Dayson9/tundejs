import { Nugget } from 'queflow';

const UpcomingProject = new Nugget('UpcomingProject', {
  template: (data) => {
    return `
      <div class='upcoming' background={{ this.data.darkMode ? 'rgba(15, 19, 28, .7)' : 'white' }}>
        <img src={{ src }} alt="{{ name }}'s Image"/>
        <div class='right'>
          <Text { txt: '{{ name }}', size: 15, weight: 700, font: '"Nova Square"' } />
          <Paragraph { text: '{{ snippet }}', size: 11, weight: 300, align: 'left' } />
          <div class='row' justify-content="${ data.stack.length > 1 ? 'start' : 'space-between' }">
          ${ data.stack.map((item) => item.src ? `<img src='${item.src}' alt='Queflow.js Logo'/>` : `<Icon { class: 'bx bxl-${item.icon}', color: '${item.color}', size: 20 } />`).join('\n')}
          </div>
        </div>
      </div>
    `
  },
  stylesheet: {
    '.upcoming' : `
      width: ${ window.innerHeight < 768 ? '95%' : '55%' };
      min-height: ${ window.innerHeight < 768 ? '120px' : '150px' };
      border: 1px solid rgb(45, 59, 78);
      margin: 0 auto;
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
      margin-top: 20px;
    `,
    
    '.upcoming img' : `
      width: 30%;
      height: 90%;
      border-radius: 10px;
      border: inherit;
    `,
    
    '.right' : `
      width: 60%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-between;
      padding-block: 5%;
      padding-left: 2%;
      box-sizing: border-box;
    `,
    
    '.right > .row' : `
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: row;
      align-items: center;
    `,
    
    '.row img' : `
      width: 20px;
      height: 20px;
    `
  }
});

export default UpcomingProject;