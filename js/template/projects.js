
//variables
const projectsData = JSON.parse(projectsJSON);
//JSON to JS Object
let view = document.querySelectorAll(".view");
//Button
const project = document.querySelector('#projects');
//Article

function templateProjects(){
//return the template as many time as the number of object present to the array

    let projectsTemplate = `<h2 class="reveal">Projects</h2>
<div class="art-deco-element"><img src="images/art-deco-logo-element.png" alt="decoration"></div>   


${projectsData.map(function(data){

    return `



<div class="project-container">
<img src="${data.image}" alt="screen-shot project image" class="img-heading">
<h3>${data.title}</h3>
<p>${data.description.substr(0, 180)}...</p>


<div class="button-frame">
<button data-stored="${data.title}" class="view" onclick="templateSingleProject(${data.id})">View More</button>
</div>


</div>
`

    ;

}).join(" ")}


<div class="art-deco-element"><img src="images/art-deco-logo-element.png" alt="decoration"></div>
`
    project.innerHTML = projectsTemplate;

    

};
function templateSingleProject(x){

    let projectTemplate = `

<h2 class="reveal">${projectsData[x].title}</h2>
<div class="art-deco-element"><img src="images/art-deco-logo-element.png" alt="decoration"></div>



<div class="project-container-xl">


<img src="${projectsData[x].image}" alt="screen-shot project image" class="img-heading">

<h3>${projectsData[x].title}</h3>

<p>${projectsData[x].description}</P>




<h4>Students Involved:</h4>

<div class="immage-students-cotainer">




${
    projectsData[x].studentsInvolved.map(function(data){
        
        let img = `<a href="${data.link}" target="_blank"><img src="${data.image}" alt="Student" class="student"></a>`
        return img
        
    }).join(" ")};










</div>

<div class="button-frame">
<a href="${projectsData[x].url}" target="_blank"><button data-stored="b" class="view" >View Live</button></a>
</div>



</div>




<div class="art-deco-element"><img src="images/art-deco-logo-element.png" alt="decoration"></div>

<div class="art-deco-element"><div class="button-frame-xl">
<button data-stored="b" class="view-xl" onclick="templateProjects()">View More Projects</button>
</div></div>



`

    let singleProject = projectTemplate;
     project.innerHTML = singleProject;

};

templateProjects();















