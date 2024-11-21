import { subComponent } from 'queflow';

const Stack = new subComponent("Stack", {
  data: {

  },
  template: () => {
    return `
      <div class='section'>
        <Heading { text: 'My Stack',  colored: 'Stack' } />
        <Paragraph { text: "What's my stack?, what do I use?", align: 'center' } />
        
        <div class='stackgrid'>
          
        </div>
      </div>
    `
  },
  stylesheet: {
    '.stackgrid' : `
      width: 80%;
      height: auto;
      padding-block: 10px;
      border: 1px solid silver;
    `
  }
});

export default Stack;