const { Nugget, subComponent } = QueFlow;

const ProjectTemplate = new Nugget({
  stylesheet: {},
  template: () => {
    return `
        <div class="project">
          <img src="{{ src }}" alt="Sodiq Tunde's projects">
          <h3>{{ project_name }}</h3>
          <p>{{ project_des }}</p>
          <a href="{{ href }}" target="_blank">
            <button class="pill">View demo</button>
          </a> 
        </div>
        `
  }
});

globalThis.ProjectTemplate = ProjectTemplate;

const MyProjects = new subComponent({
  stylesheet: {
    
  },
  template: () => {
    return `
       <div class="container" id="projects">
          <h2 class="heading grad1 grad-text">
           My featured projects
         </h2><p class="note">Here are some of my best picks</p>  
   
        <ProjectTemplate {
          src: "./images/pp.jpg",
          project_name: "Graph2Code",
          project_des: "A simple web app which features a simple way to design html elements and also access their equivalent HTML/CSS codes on the go.",
          href: "https://graph2code.vercel.app" }/>
      
        <ProjectTemplate {
          src: "./images/pp.jpg", 
          project_name: "QueFlowJS", 
          project_des: "A mini JavaScript library that provides a simple way of rendering reactive state UI. Automatically reacts to changes in data and updates the DOM based on the changes.",
          href: "https://queflowjs.onrender.com" }/>
      </div>
        `
  }
});

export { MyProjects }