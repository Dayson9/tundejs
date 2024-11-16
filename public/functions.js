const deviceWidth = window.innerWidth,
  deviceHeight = window.innerHeight;

function runLoaderAnimation() {
  setTimeout(() => Loader.data.loadingBarWidth = 30, 700);
  setTimeout(() => Loader.data.loadingBarWidth = 70, 1700);
  setTimeout(() => Loader.data.loadingBarWidth = 100, 2500);
}