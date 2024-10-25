//import other object
import{barcelona,roma,paris,ecuador} from './country.js'
//get id to html
let links=document.querySelectorAll('a'); 
//select todo los los <a>
let titleElement=document.getElementById('titleplace');
let subtitleElement=document.getElementById('subtitle');
let pElement=document.getElementById('paragraph');
//get id to labels
console.log(links);
//use for each
links.forEach(function (link){
    //listen the event click on the country
    link.addEventListener('click',function(){
        //remove active section
        links.forEach(function(link){
            link.classList.remove('active');
    });
    //Add select item
    this.classList.add('active');
    //get information
    let content=getCountry(this.textContent);
    console.log(this.textContent);
    //show dom 
    titleElement.innerHTML=content.titulo;
    subtitleElement.innerHTML=content.subtitulo;
    pElement.innerHTML=content.parrafo;  
    });
});

//Function get country, pass the argument where is a event click
function getCountry(link){
    let content={
        'Barcelona':barcelona,
        'Roma':roma,
        'Paris':paris,
        'Ecuador':ecuador
    };
    return content[link];
//when into the string return the link of that country
}