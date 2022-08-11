'use strict'

let baseId = 0;
const getProjectId = () => ++baseId;


// -- Project object
const projects = [
     {
        id:1,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/guess-my-number.png',
                projectName:'Guess The Number',
                description:'A number guessing game. It helps to find the answer with the clues it gives.',
                projectUrl:'https://github.com/Osman-ordu/Guess-the-number',
                demoUrl:'https://osman-ordu.github.io/Guess-the-number/'
            }
        
    },
    {
        id:2,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/random-choice-picker.png',
                projectName:'Random Choice Picker',
                description:'With event listener support, clicking "Enter" will randomly loop through the entered values.',
                projectUrl:'https://github.com/Osman-ordu/Random-choice-picker',
                demoUrl:'https://osman-ordu.github.io/Random-choice-picker/'
            }
        
    },
    {
        id:3,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/weather-app.png',
                projectName:'Weather App',
                description:'An API application that shows the weather of all cities.',
                projectUrl:'https://github.com/Osman-ordu/Global-weather-app',
                demoUrl:'https://osman-ordu.github.io/Global-weather-app/'
            }
        
    },
    {
        id:4,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/covid-19-tracker.png',
                projectName:'Covid-19 Tracker',
                description:'It is an api project that shows the total number of cases and instant deaths and cases that died from the covid-19 virus around the world.',
                projectUrl:'https://github.com/Osman-ordu/Covid-19-Tracker',
                demoUrl:'https://osman-ordu.github.io/Covid-19-Tracker/'
            }
        
    },
    {
        id:5,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/go-screen.png',
                projectName:'Go Screen',
                description:'When the user starts the video, the video is stopped at the scheduled minute interval and the answer buttons are displayed.',
                projectUrl:'https://github.com/Osman-ordu/Go-screen',
                demoUrl:'https://osman-ordu.github.io/Go-screen/'
            }
        
    },
    {
        id:6,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/shopping-cart.png',
                projectName:'Shopping Cart',
                description:'A shopping cart application that includes all the stages of adding a card.',
                projectUrl:'https://github.com/Osman-ordu/Shopping-cart',
                demoUrl:'https://osman-ordu.github.io/Shopping-cart/'
            }
        
    },
    {
        id:7,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/to-do-list.png',
                projectName:'To Do List',
                description:'A to-do list app coded with "Pure JS" designed with "Bootstrap UI"',
                projectUrl:'https://github.com/Osman-ordu/To-do-list',
                demoUrl:'https://osman-ordu.github.io/To-do-list/'
            }
        
    },
    {
        id:8,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/netflix-clone.png',
                projectName:'Netflix Clone',
                description:'A clone project, a single netflix page design.',
                projectUrl:'https://github.com/Osman-ordu/Netflix-clone',
                demoUrl:'https://osman-ordu.github.io/Netflix-clone/'
            }
        
    },
    {
        id:9,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/key-code.png',
                projectName:'Key code',
                description:'An application that shows the code properties of keyboard keys.',
                projectUrl:'https://github.com/Osman-ordu/Keycode',
                demoUrl:'https://osman-ordu.github.io/Keycode/'
            }
        
    },
    {
        id:10,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/exchange-rate.png',
                projectName:'Exchange Rate App',
                description:'It is an API project that shows the instant exchange rate of the Turkish lira.',
                projectUrl:'https://github.com/Osman-ordu/Exchange-rate-app',
                demoUrl:'https://osman-ordu.github.io/Exchange-rate-app/'
            }
        
    },
    {
        id:11,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/pick-game.png',
                projectName:'Pick Game',
                description:'When the user rolls the dice, if a 1 is rolled, the score is reset and the turn of the dice passes to the opposing user, the user with 50 points wins. ',
                projectUrl:'https://github.com/Osman-ordu/Pick-game',
                demoUrl:'https://osman-ordu.github.io/Pick-game/'
            }
        
    },
    {
        id:12,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/password-generator.png',
                projectName:'Password Generator',
                description:'This application, which generates different random passwords from each other, generates unique passwords. It has many features.',
                projectUrl:'https://github.com/Osman-ordu/Password-generator',
                demoUrl:'https://osman-ordu.github.io/Password-generator/'
            }
        
    },
    {
        id:13,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/img-monster-rolodex.png',
                projectName:'Monster Rolodex',
                description:'A monster API was used. A react.js app that filters calls returns a monster based on the text entered in the calls.',
                projectUrl:'https://github.com/Osman-ordu/monster-rolodex',
                demoUrl:'https://github.com/Osman-ordu/monster-rolodex'
            }
        
    },
    {
        id:14,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/pokodex.png',
                projectName:'Pokedex',
                description:'Each of these pokedex cards made with dynamic code carries a color code. It is divided into different types of Pokemon, and a total of 150 cards were created, respectively.',
                projectUrl:'https://github.com/Osman-ordu/pokedex',
                demoUrl:'https://osman-ordu.github.io/pokedex/'
            }
        
    },
    {
        id:15,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'./images/project-photo/poke.png',
                projectName:'Pokemon Cards',
                description:'Pokemon cards that create items from objects using onmouse events',
                projectUrl:'https://github.com/Osman-ordu/pokemon-cards',
                demoUrl:'https://github.com/Osman-ordu/pokemon-cards'
            }
        
    }, 

]



