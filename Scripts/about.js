function loaderAnimation(){
    let tl = gsap.timeline();

    tl.to(".text-loader",{
        opacity:1,
        duration:0.09,
        stagger:{
            each:0.14,
            repeat:1,
            yoyo:true
        }
    })
    let loader = document.querySelector(".loader");
    setTimeout(function(){
        loader.style.top = "-110%"
    }, 2600)
}
loaderAnimation();

function menuAnimation() {
    let menu = document.querySelector("nav .menu");
    let open = document.querySelector(".open");
    let crossSVG = document.querySelector(".open .container svg");

    // By default, the second one (index 1) is active for About
    let active = 2;
    let currentRotation = 0;
    let previousActiveSecond = document.querySelector(".str2 .second"); // The second one (About) by default

    // Set the second mncircle and the About link to active by default
    let previousActiveCircle = document.querySelectorAll(".mncircle")[1]; 
    gsap.to(previousActiveCircle, {
        opacity: 1, // Make the second mncircle fully visible initially
        ease: Expo.easeInOut,
        duration: 1
    });

    // Make the "About" link visible by default
    gsap.to(previousActiveSecond, {
        opacity: 1, // Fully visible
        ease: Expo.easeInOut,
        duration: 1
    });

    // Make sure the "Home" link and its corresponding mncircle are inactive
    let homeSecond = document.querySelector(".str3 .second"); // Home link
    let homeCircle = document.querySelectorAll(".mncircle")[2]; // Home mncircle

    // Set Home link and circle to inactive (opacity to 0.1)
    gsap.to(homeSecond, {
        opacity: 0.1, // Make it inactive
        ease: Expo.easeInOut,
        duration: 1
    });
    gsap.to(homeCircle, {
        opacity: 0.1, // Make it inactive
        ease: Expo.easeInOut,
        duration: 1
    });

    menu.addEventListener("click", function () {
        open.style.right = 0;

        // Circle ko rotate karna hai jab menu par click ho
        gsap.to(".circle", {
            rotate: 0,
            ease: Expo.easeInOut,
            duration: 2
        });

        let mncircles = document.querySelectorAll(".mncircle");
        let stripes = document.querySelectorAll(".stripe .second");

        mncircles.forEach(function (value, index) {
            value.addEventListener("click", function () {
                // Calculate new rotation angle based on current index
                let newRotation = (active - (index + 1)) * 10;

                // Determine the direction of rotation (upward or downward)
                let rotationDifference = newRotation - currentRotation;

                // Rotate the circle to the new position
                gsap.to(".circle", {
                    rotate: currentRotation + rotationDifference,
                    ease: Expo.easeInOut,
                    duration: 1
                });

                // Update the current rotation angle
                currentRotation += rotationDifference;

                // Reset the opacity of the previously active .second and .mncircle
                if (previousActiveSecond) {
                    gsap.to(previousActiveSecond, {
                        opacity: 0.1, // Default opacity
                        ease: Expo.easeInOut,
                        duration: 1
                    });
                }
                if (previousActiveCircle) {
                    gsap.to(previousActiveCircle, {
                        opacity: 0.1, // Default opacity
                        ease: Expo.easeInOut,
                        duration: 1
                    });
                }

                // Set the opacity of the current .second and .mncircle to 1
                gsap.to(stripes[index], {
                    opacity: 1,
                    ease: Expo.easeInOut,
                    duration: 1
                });
                gsap.to(mncircles[index], {
                    opacity: 1,
                    ease: Expo.easeInOut,
                    duration: 1
                });

                // Update the previous active items
                previousActiveSecond = stripes[index];
                previousActiveCircle = mncircles[index];
            });
        });
    });

    crossSVG.addEventListener("click", function () {
        open.style.right = "-100%";
    });

}
menuAnimation();

function titleAnimation(){
    let page1 = document.querySelectorAll(".page1 h1");

    gsap.to(page1,{
        y:-80,
        duration:1.5,
        delay:2.5,
        opacity:1,
        stagger:0.3,
        ease:"Expo.inOut"
    })
}
titleAnimation();

function resopenAnimation() {
    let menuI = document.querySelector("nav .menu i");
    let resopen = document.querySelector(".resopen");
    let resopenSVG = document.querySelector(".resopen svg");
    
    menuI.addEventListener("click", function(){
        resopen.style.right = 0;
    })
    
    resopenSVG.addEventListener("click", function(){
        resopen.style.right = "-100%";
    })    
}
resopenAnimation();

function locomotiveAnimation(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
}
locomotiveAnimation();

function cursorAnimation(){
    
    let cursor = document.querySelector(".cursor");
    let main = document.querySelector("#main");
    
    
    main.addEventListener("mousemove",function(details){
        gsap.to(cursor,{
            x:details.clientX,
            y:details.clientY
        })
    })
    
    main.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:1,
            opacity:1
        })
    })
    
    main.addEventListener("mouseleave",function(details){
        gsap.to(cursor,{
            scale:0,
            opacity:0
        })
    })
}
cursorAnimation();