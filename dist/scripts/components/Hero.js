
const { subComponent } = QueFlow;

const Hero = new subComponent({
  stylesheet: {
    "#intro" : `
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-items: center;
      align-items: center;
      color: white;
      text-align: left;
      margin-top: 160px;
    `,
    
    "button" : `
      display: block;
      margin-top: 30px;
      transform: translateX(-90px);
    `,
    
    ".btn:hover" : `
      background: #15161C;
      border-color: cornflowerblue;
    `,
    
    "#intro h1, span" : `
          width: 80%;
          font-size: 35px;
          font-weight: 900!important;
          font-family: "Legion";
          text-align: left;
        `
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