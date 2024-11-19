import { Nugget } from 'queflow';

const SlidingText = new Nugget("SlidingText", {
  template: () => {
    return `
      <span transform={{ x }} onclick={{ click }}>
        {{ text }}
      </span>`
  },

  stylesheet: {
    "span": `
      font-size: 15px;
      font-weight: 500;
      font-family: "Nova Square";
      display: block;
      color: white;
    `
  }
});

export default SlidingText;