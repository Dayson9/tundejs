const { subComponent } = QueFlow;

const Loader = new subComponent({
  data: {
    offsetY: "0",
    transition: "0"
  },
  stylesheet: {
    h2 : `
      position: absolute;
      top: 32vh;
      -webkit-text-fill-color: transparent; 
      -webkit-background-clip: text;
      `,
      
    "#loader" : `
      width: 100vw;
      height: 100vh;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #000;
      z-index: 2;`
  },
  template: () => {
    return `
      <div id='loader' top='{{ this.data.offsetY+"%" }}' transition='{{ this.data.transition }}s'>
        <h2 color='white' class='grad1' animation-duration='0.7s'>&lt;/&gt;</h2>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>
      </div>
        `
  }
});

export { Loader }