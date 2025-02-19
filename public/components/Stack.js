import { Component } from 'queflow';

const Stack = new Component("Stack", {
  data: {
    darkMode: true
  },
  template: () => {
    return `
      <div class='section' color={{ darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
        <Heading { text: 'My Stack',  colored: 'Stack'} />
        <Text { txt: "What's my stack?, what Technologies do I use?", align: 'center', size: 12 } />
        
        <div class='bg' background={{ darkMode ? 'rgba(15, 19, 28, .7)' : 'transparent' }} color={{ darkMode ? 'rgb(155, 169, 188)' : 'rgb(5,11,57)' }}>
          <div class='col'>
            <StackItem { icon: 'bxl-html5', label: 'HTML', color: 'yellow', size: 12 }/>
            <StackItem { icon: 'bxl-css3', label: 'CSS', color: 'dodgerblue', size: 12 }/>
            <StackItem { icon: 'bxl-javascript', label: 'JavaScript', color: 'gold', size: 12 }/>
          </div>
          <div class='col'>
            <StackItem { icon: 'bxl-vuejs', label: 'VueJS', color: 'teal', size: 12 }/>
            <StackItem { src: '././assets/images/queflow.webp', label: 'QueFlowJS', alt: 'QueFlowJS Icon' }/>
            <StackItem { icon: 'bxl-nodejs', label: 'NodeJS', color: 'dodgerblue', size: 12 }/>
          </div>
        </div>
      </div>
    `
  }
});

export default Stack;