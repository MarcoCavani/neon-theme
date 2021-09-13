
let hamburgerMenu = document.querySelector('#hamburgerMenu');
let hamburgerElement = document.querySelectorAll('nav span');
let navigation = document.querySelector('nav');
let links = document.querySelectorAll('nav ul li a');
let switcher = true;
let students = document.querySelectorAll('.student');


function setModal(event){

    let dataStudent = event.target.getAttribute('data-services-type');
    console.log(dataStudent);
    
}

function openModal(event){
    
    
    // studentsID();


}


function menuOpen(e) {

    let closed = false;
    let opened = true;
    
    console.log(hamburgerElement);
    hamburgerElement.forEach(element => {
        console.log(element);
    });

    console.log(switcher);
    
    if(switcher){
        navigation.style.opacity = '1';
        navigation.style.height = "400px";
        navigation.style.width = "400px";
        links.forEach(element => {
            element.style.display = 'inherit';
        });
        switcher = closed;

        
        
       
    }else if (!switcher){
        navigation.style.opacity = '0';
        navigation.style.height = "0px";
        navigation.style.width = "0px";
        links.forEach(element => {
            element.style.display = 'none'
        });
        switcher = opened;
        
    }
    




}

function hamburgerInit() {

    hamburgerMenu.addEventListener('click', () => {

        
        menuOpen();


    });


    students.forEach(element => {
        element.addEventListener('click', (e) =>{
            
            setModal(e);
            openModal(e);
            
        })
    });
}

window.onload = (event) => {

    hamburgerInit();
}
