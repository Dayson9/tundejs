import { Nugget } from 'queflow';

const GradientText = new Nugget("GradientText", {
  template: () => {
    return `<span style='background: linear-gradient({{ deg }}deg, {{ from }}, {{ to }}); -webkit-text-fill-color: transparent; -webkit-background-clip: text;'>{{ text }}</span>`
  }
});

export default GradientText;