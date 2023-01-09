let count = 0;

function change(x){
    count = count + x;
    slider(count)
}

slider(count);

function slider(num) {
    let slides = document.getElementsByClassName('slide');
    if (num == slides.length) {
        count = 0
        num = 0
    } 
    if(num<0) {
        count = slides.length-1
        num = slides.length-1
        
    }
    // for (let num = 0; num < slides.length; num++) {
    //     slides[num].style.display="none"                     
    // }
    for(let p of slides){
        p.style.display= "none"          
    }
    
    slides[num].style.display = "block";

    
}
// setInterval(slider,2000)



