import { subComponent } from "queflow";

const Footer = new subComponent({
  stylesheet: {
    "b > span" : "font-size: 15px;",
    ".footer" : `
      width: 100%;
      height: auto;
      padding-top: 20px;
      padding-bottom: 35px;
      text-align: center;
      margin-top: 50px;
    `,
    ".footer span" : `
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    `,

  ".footer b" : `
      color: white;
  `,

  ".footer a" : `
      color: dodgerblue;
`

  },
  template: () => `
      <footer class="footer">
        <b>Built with <span class="grad1">(ax² + bx + c)</span> by <a href="#">Tunde</a></b>
      </footer>
  `
});

export { Footer }