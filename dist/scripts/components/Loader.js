const { subComponent } = QueFlow;

const Loader = new subComponent({
  data: {
    offsetY: "0",
    transition: "0"
  },
  stylesheet: {
    
  },
  template: () => {
    return `
      <div id='loader' top='{{ this.data.offsetY+"%" }}' transition='{{ this.data.transition }}s'>
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