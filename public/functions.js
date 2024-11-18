  const introText = ["Hello folk 👋, my name's Tunde", "I'm a Software Engineer", "Wanna know more about me?", "Let's dive in"];

  var index = i = 0,
    anim,
    cursorAnim,
    handAnim;

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
        Loader.data.center.y = -70;
        Loader.data.center.opacity = 0;
        Loader.data.center.scale = .6;

        Loader.data.intro.y = -70;
        Loader.data.intro.opacity = 1;
        Loader.data.intro.scale = 1;
        writeLoaderText();
      }, 200);
    }, 2500);
  }

  const closeLoader = () => {
    Loader.data.stroke[1] = 100;
    clearInterval(handAnim);
    clearInterval(cursorAnim);
    
    
  }