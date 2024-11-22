import { subComponent } from 'queflow';

const Stack = new subComponent("Stack", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Stack',  colored: 'Stack'} />
        <Paragraph { text: "What's my stack?, what do I use?", align: 'center' } />
        
        <div class='stack' color={{ this.data.darkMode ? 'white' : 'rgb(5,11,57)' }}>
          <StackItem { icon: 'bx-car', text: 'Hello', label: 'Money' }/>
        </div>
      </div>
    `
  },
  stylesheet: {
    '.stack' : `
      width: 80%;
      height: auto;
      padding-block: 10px;
      border: 1px solid silver;
      margin: 0 auto;
    `
  }
});

export default Stack;