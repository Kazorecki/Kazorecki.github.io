window.onload = function () {
    document.querySelectorAll("#loader h1 span").forEach((obj, i) => {
        obj.style.animationDelay = 0.1 * i + "s";
    })
    window.setInterval(() => {
        document.querySelector("#loader").classList.add("hide");
        document.querySelector("body").classList.add("play");
    }, 4000);




    document.querySelectorAll(".animBlockReveal").forEach((obj, i) => {
        obj.style.animationDelay = 2 + 0.1 * i + "s";
    })






    let ageSpan = document.querySelector("#age");
    let birthday = new Date("03-11-2001");
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    ageSpan.innerHTML = ageDate.getUTCFullYear() - 1970;









    var skillChartAnimation = anime({
        targets: "#skillChartStroke",
        points: [
            { value: '3,111  66.5,28 90,89' },
            { value: '66.5,28  90,89 3,111' },
        ],
        easing: 'easeOutQuad',
        duration: 2000,
        loop: true
    })



    // TODO REMOVE ANIMATION BEFORE STARTING NEXT ONE!!! (causes bugs)



    document.querySelector("#skillHTML").addEventListener("click", () => {
        skillChartAnimation.remove('#skillChartStroke');
        skillChartAnimation = anime({
            targets: "#skillChartStroke",
            points: [
                { value: '3,111  66.5,28 90,89' },
                { value: '66.5,28  90,89 3,111' },
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: true
        })
    })
    document.querySelector("#skillCSS").addEventListener("click", () => {
        skillChartAnimation.remove('#skillChartStroke');
        skillChartAnimation = anime({
            targets: "#skillChartStroke",
            points: [
                { value: '100,111  50.5,28 0,89' },
                { value: '0,89  100,111 50.5,28' },
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: true
        })
    })
    document.querySelector("#skillJS").addEventListener("click", () => {
        skillChartAnimation.remove('#skillChartStroke');
        skillChartAnimation = anime({
            targets: "#skillChartStroke",
            points: [
                { value: '100,111  50.5,28 0,89' },
                { value: '0,89  100,111 50.5,28' },
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            loop: true
        })
    })







    /*  
  .oooooo.                                                    
 d8P'  `Y8b                                                   
888          oooo  oooo  oooo d8b  .oooo.o  .ooooo.  oooo d8b 
888          `888  `888  `888""8P d88(  "8 d88' `88b `888""8P 
888           888   888   888     `"Y88b.  888   888  888     
`88b    ooo   888   888   888     o.  )88b 888   888  888     
 `Y8bood8P'   `V88V"V8P' d888b    8""888P' `Y8bod8P' d888b    
                                                              
                                                              
                                                              */
    var cursor = document.querySelector("#cursorCircle");
    document.body.addEventListener("mousemove",e=>{
        let x = e.pageX;
        let y = e.pageY;
        cursor.style.cssText = `top: ${y}; left: ${x};`;
    })
    let hoverBtns = document.querySelectorAll(".btn");
    console.log(hoverBtns);
    hoverBtns.forEach(e=>{
        console.log(e);
        e.addEventListener("mouseenter",()=>{
            console.log("scale 4");
            cursor.classList.add("cursorScale");
        })
        e.addEventListener("mouseleave",()=>{
            console.log("scale 4");
            cursor.classList.remove("cursorScale");
        })
    })
}