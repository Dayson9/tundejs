const { Render , Component , renderComponent } = QueFlow;

let project_template = Component("projects", `
    <div class="project">
      <img src="{{src}}" alt="Sodiq Tunde's projects">
      <h3>{{project_name}}</h3>
      <p>{{project_des}}</p>
      <a href="{{href}} target="_blank>
         <button class="pill">View demo</button>
      </a> 
    </div>
`);


function renderUI() {
  for (ui of UI_Items){
    if (ui.element != "#projects") {
      Render(ui.content, ui.element, "append");
    } else {
      Render(ui.content, ui.element, "prepend"); 
    }
  }
}

renderUI();

// Render projects UI
renderComponent("projects", {
    src: "./images/pp.jpg", 
    project_name: "Graph2Code", 
    project_des: "A simple web app which features a simple way to design html elements and also access their equivalent HTML/CSS codes on the go.", 
    href: "https://graph2code.vercel.app"
}, "#projects");

renderComponent("projects", {
    src: "./images/pp.jpg", 
    project_name: "QueFlowJS", 
    project_des: "A mini JavaScript library that provides a simple way of rendering reactive state UI. Automatically reacts to changes in data and updates the DOM based on the changes.",
    href: "https://queflowjs.onrender.com"
}, "#projects");


setTimeout(() => {
  loader.style.display = "none";
  nav.style.zIndex = 1;
}, 2000);