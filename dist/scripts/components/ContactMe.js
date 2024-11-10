import { subComponent } from "queflow";

const ContactMe = new subComponent({
  stylesheet: {},
  template: () => {
    return `
     <div class="container" id="in-touch">
        <h1 class="heading grad1 grad-text">Wanna say something to me?</h1>
        <p class="note">Here are my contact infos</p>
        <div class="grid" style="margin-bottom: 60px;">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class="note">Or simply send a message >></p>
        <div class="message">
          <input type="text" placeholder="John Doe" />
          <input type="email" placeholder="name@example.com" />
          <textarea placeholder="Enter message:"></textarea>
          <button>Send message</button>
        </div>
      </div>`
  }
})


export { ContactMe }