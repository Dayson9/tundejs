const loader = document.querySelector("#loader");
const nav = document.querySelector(".nav");

const UI_Items = [
{ content: `
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
    <div class="wave"></div>
`,  element: "#loader"},

{ content: `
    <h1>
       "breathing life into <span class="grad">end-to-end products</span>, Fullstack Developer"
    </h1>
    <small>Crafting intuitive and engaging digital experiences.</small>
    <a href='#about'>
       <button class="btn">About me</button>
    </a>
`,  element: "#intro" },

{ content: `
    <h2 class="heading grad1 grad-text">About me</h2>
    <p class="note">
      Hello there 👋, my name is Sodiq Tunde, a fullstack Software Developer, dedicated towards building digital products that would help people in their daily lives.
    </p>
    <p class="note">
      As a fullstack Software Developer, I specialize in building user-centric digital solutions that solve real-world problems and improve daily lives. My focus is on creating intuitive and effective products that streamline processes and enhance user experiences. 
    </p>
`, element: "#about"},

{ content: `
    <h2 class="heading grad1 grad-text">
      My featured projects
    </h2>
    <p class="note">
      Here are some of my best picks
    </p>
`, element: "#projects"},

{ content: `
   <h2 class="heading grad1 grad-text">My skills</h2>
   <p class="note">What do I know? What Technologies do I use?</p>
   <div class="grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
   </div>
`, element: "#skills"}
];

