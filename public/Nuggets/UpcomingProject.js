import { Nugget } from 'queflow';

const UpcomingProject = new Nugget('UpcomingProject', {
  template: (data) => {
    return `
      <div class='upcoming' background={{ this.data.darkMode ? 'rgb(15, 19, 28)' : 'white' }}>
        <img src={{ src }} alt="{{ name }}'s Image"/>
        <div class='right'>
          <Text { text: '{{ name }}', size: 15, weight: 700, font: '"Nova Square"' } />
          <Paragraph { text: '{{ snippet }}', size: 11, weight: 300, align: 'left' } />
          <div class='row'>
          ${ data.stack.map((item) => item.src ? `<img src='${item.src}' alt='Queflow.js Logo'/>` : `<i class='bx bxl-${item.icon}' color='${item.color}'></i>`).join('\n')}
          </div>
        </div>
      </div>
    `
  },
  stylesheet: {
    '.upcoming' : `
      width: 95%;
      min-height: 120px;
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
      height: 80%;
      border-radius: 10px;
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
      justify-content: space-between;
    `,
    
    '.row img' : `
      width: 20px;
      height: 20px;
    `,
    
    '.row i' : "font-size: 20px"
  }
});

export default UpcomingProject;