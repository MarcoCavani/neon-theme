






let view = document.querySelectorAll(".view");
const project = document.querySelector('#projects');


let projectsView = `<h2 class="reveal">Projects</h2>
<div class="art-deco-element"><img src="images/art-deco-logo-element2.png" alt="decoration"></div>


<div class="project-container">
<img src="images/project1/a.jpg" alt="screen-shot project image" class="img-heading">
<h3>Alumni blog</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>


<button data-stored="a" class="view">view</button>


</div>


<div class="project-container">
<img src="images/project1/a.jpg" alt="screen-shot project image" class="img-heading">
<h3>Alumni blog</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>


<button data-stored="a" class="view">view</button>


</div>



<div class="art-deco-element"><img src="images/art-deco-logo-element2.png" alt="decoration"></div>
`;

project.innerHTML = projectsView;

view.forEach(element => addEventListener('click', (e) => {

console.log(e.target.getAttribute("data-stored"));

if(e.target.getAttribute("data-stored") === "a"){
    
    project.innerHTML = `<h2 class="reveal">Projects</h2>
<div class="art-deco-element"><img src="images/art-deco-logo-element2.png" alt="decoration"></div>



<div class="project-container-xl">


<img src="images/project1/a.jpg" alt="screen-shot project image" class="img-heading">

<h3>Alumi NTM TAFE Blog</h3>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>

<h4>Students Involved</h4>

<div class="immage-students-cotainer">

<img src="images/download.jpg" alt="Student" class="student">
<img src="images/download.jpg" alt="Student" class="student">
<img src="images/download.jpg" alt="Student" class="student">
<img src="images/download.jpg" alt="Student" class="student">

</div>

<button data-stored="b" class="view">view more project</button>

</div>





<div class="art-deco-element"><img src="images/art-deco-logo-element2.png" alt="decoration"></div>
`
    
} else if(e.target.getAttribute("data-stored") === "b"){
    
    
    project.innerHTML = projectsView;
    
}  
    

}));


















