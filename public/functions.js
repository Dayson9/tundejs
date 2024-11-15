const deviceWidth = window.innerWidth,
  deviceHeight = window.innerHeight;

function runLoaderAnimation() {
  const svgHeight = (deviceHeight * 70) / 100,
    midY = (svgHeight / 2),
    svgWidth = (deviceWidth * 80) / 100,
    midX = (deviceWidth / 2) - (deviceWidth > 768 ? deviceWidth / 12 : deviceWidth / 15);


  Loader.data.waveData = `M57.6,95.55 L116,95.55 L121,85.55 L131,110.55 L146,65.55 L156,95.55 L221.53846153846152,95.55`;

  const path1 = document.getElementById("first");

  path1.style.strokeDasharray = 400;
  path1.style.strokeDashoffset = 400;

  setTimeout(() => path1.style.strokeDashoffset = 0, 300);
}