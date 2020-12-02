const details = document.querySelectorAll('details');
const summary = document.querySelectorAll('summary');
const principalContainer = document.querySelector('.principal-container');
const principal = document.querySelector('.principal');
const shadow = document.querySelector('#shadow');
const images = document.querySelector('.images');
const arroba = document.getElementById('arroba-img');
const media = window.matchMedia("(max-width: 420px)");

// Change the order of the nodes, for better design implementation
if(media.matches){
    let newShadow = shadow.cloneNode(true);
    shadow.remove();
    principal.prepend(newShadow);
    let newImages = images.cloneNode(true);
    images.remove();
    principalContainer.prepend(newImages);
}
 
// For mouse hovering, with media querys covered 
summary.forEach( (sum) => {
    sum.addEventListener('mouseover', () => { 
        if(media.matches){
            arroba.style.left = "-10px";  
            arroba.style.transition = "all 0.5s" 
        }else{
            arroba.style.left = "-572px";  
            arroba.style.transition = "all 0.5s"  
        }       
    });
    sum.addEventListener('mouseout', () => {   
        if(media.matches){
            arroba.style.left = "0";
        }else{
            arroba.style.left = "-552px";
        }     
    });
});

// For closing the other details when one is clicked
details.forEach( targetDetail => {
    targetDetail.addEventListener('click', () => {
        details.forEach( detail => {
            if( detail !== targetDetail ){
                detail.removeAttribute("open");
            }
        });
    });
})