function titleAnimation(){
    let page1 = document.querySelectorAll(".page1 h1");
    let page1titlevideo = document.querySelector(".page1 .svg-container video");


gsap.to(page1,{
    y:-80,
    duration:1.5,
    delay:2.5,
    opacity:1,
    stagger:0.3,
})

gsap.to(page1titlevideo,{
    y:-50,
    duration:1.5,
    delay:2.5,
    opacity:1,
})
}
titleAnimation();
function arrowFunction(){
    document.querySelector(".arrow").addEventListener("click",function(){
        document.querySelector(".about").scrollIntoView({behavior: "smooth"})
    })
}
arrowFunction();
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
function menuAnimation(){
        let menu = document.querySelector("nav .menu");
        let open = document.querySelector(".open");
        let crossSVG = document.querySelector(".open .container svg");

        // By default, the third one (index 2) is active
        let active = 3;
        let currentRotation = 0;
        let previousActiveSecond = document.querySelector(".str3 .second"); // The third one by default

        // Set the third mncircle to active by default
        let previousActiveCircle = document.querySelectorAll(".mncircle")[2]; 
        gsap.to(previousActiveCircle, {
            opacity: 1, // Make the third mncircle fully visible initially
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