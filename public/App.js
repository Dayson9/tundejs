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
import Icon from './Nuggets/Icon.js';


const App = new QComponent("#app", {
  data: {
    color: 'red'
  },
  template: () => {
    return `
      <Loader/>
      <AppContent/>
       `
  },
  run: () => {
    runLoaderAnimation();
    const mainElement = document.getElementById('main'),
      audio = new Audio('./assets/audios/bg_music.mp3');

    audio.loop = true;

    mainElement.addEventListener(`${ deviceWidth < 768 ? 'touchmove' : 'mousemove' }`, (e) => moveOracleEye(e), { passive: true });

    mainElement.addEventListener(`${ deviceWidth < 768 ? 'touchend' : 'mouseend' }`, () => {
      clearTimeout(OracleEye.data.animation);
      OracleEye.data.animation = setTimeout(() => OracleEye.data.opacity = 0, 2000);
    }, { passive: true });

    mainElement.addEventListener('scroll', startAnimation, { passive: true });

    document.body.onclick = () => audio.play();
    waveHand();
  },

  stylesheet: {
    ".section": `
      max-width: 100vw;
      height: auto;
      text-align: center;
      margin-block: 5vh;
      padding-inline: 0.7em;
      padding-block: 20px;
      box-sizing: border-box;
      margin: 0 auto;
    `,

  }
});

App.render();