
const { subComponent } = QueFlow;

const Hero = new subComponent({
  stylesheet: {

  },
  template: () => {
    return `
      <div id='intro'>
        <h1>
       "breathing life into <span class="grad">end-to-end products</span>, Fullstack Developer"
        </h1>
        <small>Crafting intuitive and engaging digital experiences.</small>
        <a href='#about'>
          <button class="btn">About me</button>
        </a>
      </div>
        `
  }
});

export { Hero }