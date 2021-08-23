window.onscroll = function() {myFunction()};
        
    var navbar = document.querySelector('#nav-bar');
    var sticky = 45;
    
    function myFunction() {
        
        if (window.pageYOffset >= sticky) {
            navbar.style.position = 'fixed';
            navbar.style.top = 0;
            
        } else {
            navbar.style.position = 'relative';
            navbar.style.top = 0;
        }
        console.log();
    }

    // toggle for navbar
    function toggle_list() {
        var parent = document.getElementById('menu-list');
        var status = parent.style.display;
        var wid = parent.style.width;
        if( status !== 'none') 
        {
            parent.style.display = "none";
        }
        else parent.style.display = "inline";

        if(wid > '1000px') parent.style.display = 'none';
    }

    // fade in for text
    const txts=document.querySelector("#animate-text").children,
            txtsLen=txts.length;
        let index=0;
        const textInTimer=4000,
            textOutTimer=3500;

        function animateText() {
        for(let i=0; i<txtsLen-1; i++){
            txts[i].classList.remove("text-in","text-out");  
        }
        txts[index].classList.add("text-in");

        setTimeout(function(){
            txts[index].classList.add("text-out");              
        },textOutTimer)

        setTimeout(function(){

            if(index == txtsLen-2){
                index=0;
            }
            else{
                index++;
                }
            animateText();
        },textInTimer); 
        }
        
        window.onload=animateText;


    //  Carousel
    
    const slides = document.getElementsByClassName("car-slide");
    const dots = document.getElementsByClassName("dot");
    let currentSlide = 0;
    
    dots[currentSlide].className += " active"
    function Slides(slideIndex) {
        currentSlide = showSlides(slideIndex, currentSlide, 1);
    }

    function showSlideNo(slideIndex) {
        currentSlide = showSlides(slideIndex, currentSlide, 0);
    }

    function showSlides(slideIndex, currentSlide, l) {
        let i;
        var newSlideIndex;
        if ( l != 0 ){
            newSlideIndex = currentSlide + slideIndex;
        } else {
            
            newSlideIndex = slideIndex;
        }
        if (newSlideIndex > slides.length - 1) {newSlideIndex = 0}
        if (newSlideIndex < 0) {newSlideIndex = slides.length-1}

        for ( i = 0; i < dots.length; i++ ){
            if ( i !== newSlideIndex ){
                dots[i].className = "dot ";
            }
        }
        
        console.log(newSlideIndex);
        
        let img1 = slides[currentSlide].getElementsByClassName('car-img')[0];
        let img2 = slides[newSlideIndex].getElementsByClassName('car-img')[0];
        dots[newSlideIndex].className += " active";
        slides[newSlideIndex].style.display = "inline-flex";
        img1.className += ' car-img-sliding';
        img2.className += ' car-img-sliding';
        if ( currentSlide < newSlideIndex ){
            slides[currentSlide].className += " car-slide-out-inc ";
            slides[newSlideIndex].className += " car-slide-in-inc ";
            setTimeout(() => {
                slides[currentSlide].style.display = "none";
            }, 600)
            setTimeout(() => {
                slides[currentSlide].className.replace(" car-slide-out-inc ", "");
                slides[newSlideIndex].className.replace(" car-slide-in-inc ", "");
                img1.className = "car-img";
                img2.className = "car-img";
            }, 500);
        } else {
            slides[currentSlide].className += " car-slide-in-dec ";
            slides[newSlideIndex].className += " car-slide-out-dec ";
            setTimeout(() => {
                slides[currentSlide].style.display = "none";
            }, 600)
            setTimeout(() => {
                slides[currentSlide].className.replace(" car-slide-in-dec ", "");
                slides[newSlideIndex].className.replace(" car-slide-out-dec ", "");
                img1.className = "car-img";
                img2.className = "car-img";
            }, 500);
        }
        return newSlideIndex;
    }