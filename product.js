
        function scrollBar(){
            let links = document.getElementById('active-screen-view').querySelectorAll('div');
            let db = document.getElementById('database');
            let vw = document.getElementById('view');
            let ap = document.getElementById('apps');
            let auto = document.getElementById('automation');
            let sync = document.getElementById('sync');
            let li = [db, vw, ap, auto, sync];
            for ( let j = 0; j < li.length; j++ ){
                if ( window.pageYOffset >= li[j].offsetTop-100 ){
                    for ( let k = 0; k < links.length; k++ ){
                        links[k].getElementsByTagName('a')[0].style.color = 'black';
                    }
                    links[j].getElementsByTagName('a')[0].style.color = "#2d7ff9";
                }
            }
        }

        // NavBar
        window.onscroll = function() {myFunction()};
        
        var navbar = document.querySelector('nav');
        var sticky = 0;
        var activeBar = document.getElementById('header-active-screen');
        var sticky2 = 305;
        var header = document.getElementById('header');
        var logo = document.getElementById('airtable-logo');
        var signUpBtn = document.getElementById('signup-btn-header')      

        function myFunction() {
            if ( window.pageYOffset > sticky ){
                navbar.className = header.className.replace(" without-scroll-header", "");
                signUpBtn.className = signUpBtn.className.replace(" sign-up-btn-blue", "");
                logo.setAttribute('src', './Public/header_logo.jpg');
            } else {
                navbar.className += " without-scroll-header";
                signUpBtn.className += " sign-up-btn-blue";
                logo.setAttribute('src', './Public/blue_logo.jpg');
            }
            
            if (window.pageYOffset > sticky) {
                navbar.style.position = 'fixed';
                navbar.style.top = 0;
            } else {
                navbar.style.position = 'relative';
                navbar.style.top = 0;
            }
            
            if (window.pageYOffset >= sticky2) {
                activeBar.style.position = 'fixed';
                activeBar.style.top = '62px';
                
            } else {
                activeBar.style.position = 'relative';
                activeBar.style.top = 0;
            }
            
            
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

        // for slideshow
        var slideIndex1 = 0;
        var slideIndex2 = 0;
        var slideIndex3 = 0;
        var slideIndex4 = 0;
        var flag1 = true;
        var flag2 = true;
        var flag3 = true;
        var flag4 = true;
        showSlides(slideIndex1, flag1, "slider1");
        showSlides(slideIndex2, flag2, "slider2");
        showSlides(slideIndex3, flag3, "slider3");
        showSlides(slideIndex4, flag4, "slider4");

        function showSlides(n, flag, id) {
            var i;
            let Id = document.getElementById(id);
            let slides = Id.getElementsByClassName("slides");
            let dots = Id.getElementsByClassName("sliderText");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            n++;
            if (n > slides.length) {n = 1}    
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active1 ", "");
            }
            slides[n-1].style.display = "block";  
            dots[n-1].className += " active1 ";
            
            setTimeout(() => {
                if ( flag ){
                    showSlides(n, flag, id)
                }
            }, 3000); // Change image every 2 seconds
        }

        window.addEventListener('scroll', scrollBar)