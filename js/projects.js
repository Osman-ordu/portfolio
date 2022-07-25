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
                projectImg:'/images/project-photo/random-choice-picker.png',
                projectName:'Random Choice Picker',
                description:'Girilen ifadeler virgüllerle birbirinden ayrılarak birbirinden farklı metin veya sayılardan oluşabilir. Olay dinleyicisi sayesinde "Enter" tuşuna tıklanıldığında girilen değerler arasında rastgele seçim yapan bir döngü oluşturur.',
                projectUrl:'https://github.com/Osman-ordu/Random-choice-picker',
                demoUrl:'https://osman-ordu.github.io/Random-choice-picker/'
            }
        
    },
    {
        id:2,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/weather-app.png',
                projectName:'Weather App',
                description:'Dünyadaki tüm şehirlerin hava durumu derecelendirmelerini ve hava durumu açıklamasını gösterir.',
                projectUrl:'https://github.com/Osman-ordu/Global-weather-app',
                demoUrl:'https://osman-ordu.github.io/Global-weather-app/'
            }
        
    },
    {
        id:3,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/pick-game.png',
                projectName:'Pick Game',
                description:'Bir zar atma oyunudur,iki kullanıcı vardır ,kullanıcılar zarı attığında 1 gelirse skor sıfırlanır ve zar atma sırası rakip kullanıcıya geçer, skoru 50 olan kullanıcı kazanır. ',
                projectUrl:'https://github.com/Osman-ordu/Pick-game',
                demoUrl:'https://osman-ordu.github.io/Pick-game/'
            }
        
    },
    {
        id:4,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/go-screen.png',
                projectName:'Go Screen',
                description:'Kullanıcı videoyu başlattığında, video planlanan dakika aralığında durdurulur. Cevap butonları görüntülenir. Seçilen buton değeri 1 artar. Video bittiğinde puan sonuçları görüntülenir.',
                projectUrl:'https://github.com/Osman-ordu/Go-screen',
                demoUrl:'https://osman-ordu.github.io/Go-screen/'
            }
        
    },
    {
        id:5,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/shopping-cart.png',
                projectName:'Shopping Cart',
                description:'Bir sepete ekleme uygulamasıdır.Kartların olduğu arayüzde satın alınacak ürünü sepete eklediğimizde Navbar kısmında "Added to card" yazısı animasyonlu bir şekilde karşımıza çıkar.Sepet değeri her kart eklendiğinde eklenilen ürün kadar artar ve silinildiğinde sepetin uzunluğu kadar silinir. ',
                projectUrl:'https://github.com/Osman-ordu/Shopping-cart',
                demoUrl:'https://osman-ordu.github.io/Shopping-cart/'
            }
        
    },
    {
        id:6,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/to-do-list.png',
                projectName:'To Do List',
                description:'Yapılacaklar listesi',
                projectUrl:'https://github.com/Osman-ordu/To-do-list',
                demoUrl:'https://osman-ordu.github.io/To-do-list/'
            }
        
    },
    {
        id:7,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/netflix-clone.png',
                projectName:'Netflix Clone',
                description:'Netflix Arayüzü',
                projectUrl:'https://github.com/Osman-ordu/Netflix-clone',
                demoUrl:'https://osman-ordu.github.io/Netflix-clone/'
            }
        
    },
    {
        id:8,
        project: 
            {
                id:getProjectId(),
                isRight: true,
                projectImg:'/images/project-photo/key-code.png',
                projectName:'Key code',
                description:'Tüm klavye tuşlarını bir özelliğinin olduğunu gösteren arayüz.',
                projectUrl:'https://github.com/Osman-ordu/Keycode',
                demoUrl:'https://osman-ordu.github.io/Keycode/'
            }
        
    },

]



