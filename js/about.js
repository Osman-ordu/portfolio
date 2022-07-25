'use strict'

// -- Calculate age 

const calculateAge = (year) => {
    const currentYear = new Date(); 
    return currentYear.getFullYear() - year;
}

// -- Person object

const person = {
    name:'Osman',
    sirname:'Ordu',
    age:calculateAge(1996),
    title:'Yazılım Geliştirici'
}
// -- Paragraph to be added 

const textAbout = document.getElementById('text-about')
const paragraph = document.createElement('p');

paragraph.classList ='text-center m-5';
paragraph.innerHTML = 
`Ben ${person.name}, ${person.age} yaşında bir ${person.title}yim.Hızlı öğrenen Efektif ve hızlı olmak konusunda son derece özverili, sonuç odaklı ve problem çözme konusunda kendini geliştirmiş biriyim.Yeni teknolojileri takip eden ve kendini sürekli yenileyen çağa ayak uyduran bir yapım var.<br>Karmaşık sorunları çözmek benim işim.
<figcaption id="figcaption" class="blockquote-footer text-center fw-bold mt-4">
<cite title="Source Title">${person.name} ${person.sirname}</cite>
</figcaption>`;
textAbout.appendChild(paragraph);