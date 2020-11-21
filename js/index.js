const details = document.querySelectorAll('details');
const summary = document.querySelectorAll('summary');
const arroba = document.getElementById('arroba-img');
const media = window.matchMedia("(max-width: 420px)");
 

summary.forEach( (sum) => {
    sum.addEventListener('mouseover', () => { 
        if(media.matches){
            arroba.style.left = "-171px";  
            arroba.style.transition = "all 0.5s" 
        }else{
            arroba.style.left = "-572px";  
            arroba.style.transition = "all 0.5s"  
        }       
    });
    sum.addEventListener('mouseout', () => {   
        if(media.matches){
            arroba.style.left = "-161px";
        }else{
            arroba.style.left = "-552px";
        }     
    });
});

details.forEach( targetDetail => {
    targetDetail.addEventListener('click', () => {
        details.forEach( detail => {
            if( detail !== targetDetail ){
                detail.removeAttribute("open");
            }
        });
    });
})