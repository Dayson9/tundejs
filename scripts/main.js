const { Render , Components , renderComponents } = QueFlow;


function renderUI() {
  for(ui of UI_Items){
    Render(ui.content, ui.element);
  }
}

renderUI();


setTimeout(() => loader.style.display = "none", 1000);