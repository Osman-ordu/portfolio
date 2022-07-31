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
    title:'Software Developer'
}
// -- Paragraph to be added 

const textAbout = document.getElementById('text-about')
const paragraph = document.createElement('p');

paragraph.classList ='text-center m-5';
paragraph.innerHTML =   
`I'm ${person.name},${person.age} years old ${person.title}. I am a fast learner, highly committed to being effective and fast, result oriented and self-developing in problem solving.<br> It's my job to solve complex problems.
<figcaption id="figcaption" class="blockquote-footer text-center fw-bold mt-4">
<cite title="Source Title">${person.name} ${person.sirname}</cite>
</figcaption>
<p>I love to share what I learned, you can <a title='Medium' href='https://medium.com/@orduosmann'>click here </a>for my medium account.</p>
`;
textAbout.appendChild(paragraph);

