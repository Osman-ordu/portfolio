'use strict'

// -- Element selectors

const portfolioProjects = document.querySelector('.portfolio-cards');
const projectsPath = document.getElementById('projects-path');
const homePagePath = document.getElementById('home-page-path');
const aboutPath = document.getElementById('about-path');
const contactPath = document.getElementById('contact-path');
const wrapHomePage = document.getElementById('wrap-home-page');
const formPath = document.getElementById('form-path');
const footerPath = document.querySelector('.footer-dark')

let projectPrefix = 'qm-';




// -- Smooth scroll JS
const links = document.getElementsByClassName('.nav-link');

function smoothScroll(e){
    e.preventDefault();
    const href = this.getAttribute('href');
    document.querySelector(href).scrollIntoView({
        behavior: "smooth",
    });
}

for(let link of links){
    link.addEventListener('click', smoothScroll);
}

// -- Path movements within the page 

projectsPath.addEventListener('click',function(){
    portfolioProjects.style.display = 'flex';
    wrapHomePage.style.display = 'none';
    formPath.style.display = 'none';
    footerPath.style.display = 'block';

})
homePagePath.addEventListener('click',function(){
    portfolioProjects.style.display = 'none';
    wrapHomePage.style.display = 'block';
    formPath.style.display = 'none';
    footerPath.style.display = 'block';

})
aboutPath.addEventListener('click',function(){
    formPath.style.display ='none';
    portfolioProjects.style.display = 'none';
    wrapHomePage.style.display = 'block';
    footerPath.style.display = 'block';

})
contactPath.addEventListener('click',function(){
    formPath.style.display ='flex';
    portfolioProjects.style.display = 'none';
    wrapHomePage.style.display = 'none';
    footerPath.style.display = 'none';

})

// -- Scroll animation

window.sr = new ScrollReveal();

sr.reveal('.navbar',{
    delay:500,
    distance:'10px',
    origin:'top',
})

sr.reveal('.text-about',{
    opacity:0,
    scale:0.8,
    duration:2000
    
})
sr.reveal('.card-item',{
   opacity:0,
   interval:50,
   rotate:{x:100, y:2000}
})

sr.reveal('.text-center',{
    opacity:0,
    scale:0.8,
    duration:2000
    

})
sr.reveal('.contact',{
    opacity:0,
    scale:0.8,
    duration:2000
    
})
sr.reveal('.fa-code',{
    opacity:0,
    scale:0.2,
    duration:3000
    
})

// -- Creating a card by pulling information from the 'projects object'

projects.forEach((p) => {
    const project = p.project;
    const identity = p.id;
    if(identity === project.id){
            const newCard = document.createElement('div');
            newCard.classList = 'portfolio-card m-4';
            newCard.innerHTML = `
                  <div id="${projectPrefix}${project.id}" class="card-body project-body"> 
                  <div class="card-header">
                  <h3 class="text-end project-title">${project.projectName}</h3>
                  <img id="card-img" class="img-fluid card-img mt-1 mb-4" src="${project.projectImg}" alt="">
                  <div class="overlay">
                  <a class="text-start m-2 fw-normal" href="${project.demoUrl}">Demo</a>
                  <a class="text-start fw-normal" href="${project.projectUrl}">Code</a>
                  <h3 class="text-end mx-4">${project.projectName}</h3>
                  <div class="text">${project.description}</div>
                  </div>
                  </div>
                  </div>`;
        
        portfolioProjects.style.display = "none";
        portfolioProjects.appendChild(newCard);
    }
})







