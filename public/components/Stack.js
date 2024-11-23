import { subComponent } from 'queflow';

const Stack = new subComponent("Stack", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Stack',  colored: 'Stack'} />
        <Paragraph { text: "What's my stack?, what Technologies do I use?", align: 'center' } />
        
        <div class='stack' background={{ this.data.darkMode ? 'rgb(15, 19, 28)' : 'transparent' }} color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
          <div class='col'>
            <StackItem { icon: 'bxl-html5', label: 'HTML', color: 'yellow' }/>
            <StackItem { icon: 'bxl-css3', label: 'CSS', color: 'dodgerblue' }/>
            <StackItem { icon: 'bxl-javascript', label: 'JavaScript', color: 'gold' }/>
          </div>
          <div class='col'>
            <StackItem { icon: 'bxl-vuejs', label: 'VueJS', color: 'teal' }/>
            <StackItem { src: '././assets/queflow.png', label: 'QueFlowJS', alt: 'QueFlowJS Logo' }/>
            <StackItem { icon: 'bxl-nodejs', label: 'NodeJS', color: 'dodgerblue' }/>
          </div>
        </div>
      </div>
    `
  },
  stylesheet: {
    '.stack' : `
      width: 80%;
      height: 150px;
      padding-block: 10px;
      border: 2px solid #A1A1AA;
      margin: 0 auto;
      border-radius: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `,
    
    '.col' : `
      width: 45%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `
  }
});

export default Stack;