const { subComponent } = QueFlow;

const Loader = new subComponent({
  data: {
    y: 0
  },
  stylesheet: {
    
  },
  template: () => {
    return `
      <div id='loader' top='{{ this.data.y+"%" }}'>
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