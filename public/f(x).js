const introText = ["Hello folk 👋, my name's Tunde", "I'm a Software Engineer", "Wanna know more about me?", "Let's dive in"];
const deviceWidth = window.innerWidth,
  day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var index = i = 0,
  anim,
  cursorAnim,
  handAnim,
  textAnim;

const addSuffix = (num) => {
  const str = new String(num),
    last = str[str.length - 1];

  switch (last) {
    case '1':
      return num + "st";
      break;
    case '2':
      return num + "nd";
      break;
    case '3':
      return num + "rd";
      break;

    default:
      return num + "th";
  }
}

const reverseText = () => {
  clearInterval(anim);

  index = introText[i].length;

  anim = setInterval(() => {
    if (index !== 0) {
      Loader.data.intro.text = introText[i].slice(0, index);
      index--;
    } else {
      i++;
      Loader.data.intro.text = "";
      clearInterval(anim);
      if (i !== introText.length) setTimeout(() => writeLoaderText(), 500);
    }
  }, 50)
}

const blinkCursor = () => {
  cursorAnim = setInterval(() => {
    if (index === introText[i].length) {
      Loader.data.intro.cursorColor = Loader.data.intro.cursorColor === "silver" ? "transparent" : "silver";
    } else {
      Loader.data.intro.cursorColor = "silver";
    }

  }, 300);

}

const writeLoaderText = () => {
  clearInterval(cursorAnim);
  blinkCursor();
  anim = setInterval(() => {
    if (index === introText[i].length) {
      if (i + 1 !== introText.length) {
        setTimeout(() => reverseText(), 1500);
      } else {
        clearInterval(anim);
        Loader.data.intro.handOpacity = 1;
        Loader.data.btnOpacity = 1;
        handAnim = setInterval(() => {
          Loader.data.intro.handY = Loader.data.intro.handY === -7 ? 0 : -7;
        }, 250);
      }
    } else {
      Loader.data.intro.text += introText[i][index];
      index++;
    }

  }, 50);
}

function runLoaderAnimation() {
  setTimeout(() => Loader.data.loadingBarWidth = 30, 700);
  setTimeout(() => Loader.data.loadingBarWidth = 70, 1700);
  setTimeout(() => {
    Loader.data.loadingBarWidth = 100;

    setTimeout(() => {
      Loader.data.center.y = -90;
      Loader.data.center.opacity = 0;
      Loader.data.center.scale = .6;

      Loader.data.intro.y = -115;
      Loader.data.intro.opacity = 1;
      Loader.data.intro.scale = 1;
      writeLoaderText();
    }, 200);
  }, 2500);
}

const closeLoader = () => {
  if (Loader.data.btnOpacity === 1) {
    clearInterval(handAnim);
    clearInterval(cursorAnim);

    setTimeout(() => {
      Loader.data.intro.y = 0;
      Loader.data.intro.opacity = 0;
      Loader.data.intro.scale = .7;
    }, 500);

    setTimeout(() => {
      Loader.data.containerY = 100;
      waveHand();
    }, 1000);

    setTimeout(() => {
      Loader.destroy();
      Loader = null;
      audio.play();
    }, 2000);
  }
}

const switchMode = () => {
  const components = [AppContent, TopBar, OracleEye, Hero, AboutMe, Stack, MyWorks, Contact, Footer, Experience];

  const _switchMode = (component) => component.data.darkMode = !component.data.darkMode;

  for (const component of components) {
    _switchMode(component);
  }

}

var menuIsOpened = false;

const openMenu = () => {
  if (!menuIsOpened) {
    TopBar.data.menuX = 0;
  }

  setTimeout(() => {
    if (!menuIsOpened) {
      TopBar.data.sliders[0] = 0;
      setTimeout(() => TopBar.data.sliders[1] = 0, 40);
      setTimeout(() => TopBar.data.sliders[2] = 0, 80);
      setTimeout(() => TopBar.data.lineH = 80, 180);
    } else {
      TopBar.data.lineH = 20;
      setTimeout(() => TopBar.data.sliders[2] = 60, 60);
      setTimeout(() => TopBar.data.sliders[1] = 60, 100);
      setTimeout(() => TopBar.data.sliders[0] = 60, 140);
      setTimeout(() => TopBar.data.menuX = window.innerWidth > 768 ? 130 : 110, 140);

    }
    menuIsOpened = !menuIsOpened;
  }, 100);
}

const moveOracleEye = (e) => {
  OracleEye.data.opacity = 1;

  const touches = e.touches[0],
    x = touches.clientX,
    finalX = (80 * x) / deviceWidth;

  OracleEye.data.x = finalX > 65 ? 65 : finalX < 15 ? 15 : finalX;
}

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

const waveHand = () => {
  setTimeout(() => Hero.data.handRotation = 35, 500);
  setTimeout(() => Hero.data.handRotation = -35, 800);
  setTimeout(() => Hero.data.handRotation = 35, 1100);
  setTimeout(() => Hero.data.handRotation = -35, 1400);
  setTimeout(() => Hero.data.handRotation = 0, 1700);
}

const animateHobbies = () => {
  setTimeout(() => AboutMe.data.outline = '4px solid rgb(50, 120, 180, .7)', 400);

  setTimeout(() => AboutMe.data.outline = '0px solid transparent', 1500);
}

const isElementInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


const IDs = [{ id: 'h-heading', func: waveHand, isAnimated: false },
  { id: 'my-hobbies', func: animateHobbies, isAnimated: false }];

const startAnimation = () => {
  setTimeout(() => {
    let t = false;
    for (const i in IDs) {
      const { id, func, isAnimated } = IDs[i];
      const el = document.getElementById(id);
      if (isElementInViewport(el) && !isAnimated) {
        func();
        IDs[i].isAnimated = true;
      }

      t = IDs[i].isAnimated;

      if (i == IDs.length - 1 && t) {
        const main = document.getElementById('main');
        main.removeEventListener('scroll', startAnimation);
      }
    }
  }, 600);
}

const tokens = 'qp1al2zmw6os8k3xne9idj04cbru57fhvtyg';

const fillWithGibberish = () => {
  let txt = '';

  for (const char of AboutSummary) {
    if (char !== ' ') {
      const index = Math.floor(Math.random() * 35);
      txt += tokens[index];
    } else {
      txt += char;
    }
  }
  return txt;
}