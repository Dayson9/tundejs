import { subComponent } from 'queflow';

const Stack = new subComponent("Stack", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Stack',  colored: 'Stack'} />
        <Text { text: "What's my stack?, what Technologies do I use?", align: 'center' } />
        
        <div class='bg' background={{ this.data.darkMode ? 'rgb(15, 19, 28)' : 'transparent' }} color={{ this.data.darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
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
  }
});

export default Stack;