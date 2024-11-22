import { QComponent } from "queflow";
import Loader from './components/Loader.js';
import AppContent from './components/AppContent.js';

// Import Nuggets 
import Heading from './Nuggets/Heading.js';
import Paragraph from './Nuggets/Paragraph.js';
import GradientText from './Nuggets/GradientText.js';
import Button from './Nuggets/Button.js';
import PillButton from './Nuggets/PillButton.js';
import SlidingText from './Nuggets/SlidingText.js';
import Text from './Nuggets/Text.js';
import StackItem from './Nuggets/StackItem.js';

const MyPortfolio = new QComponent("#app", {
  data: {

  },
  template: () => {
    return `
         <Loader/>
         <AppContent/>
       `
  },
  run: () => {
    //runLoaderAnimation();
  },

  stylesheet: {
    "*": `
      font-family: 'Nova Square';
  `,
    ".section": `
      width: 100%;
      height: auto;
      text-align: center;
      margin-top: 5vh;
      padding-inline: 0.7em;
      padding-block: 20px;
      box-sizing: border-box;
    `,

  }
});

MyPortfolio.render();