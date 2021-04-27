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













    var skillChartObj = {
        first: { value: '3,111  66.5,28 90,89' },
        second: { value: '66.5,28  90,89 3,111' }
    }


    function skillChartAnime(){
        anime({
            targets: "#skillChartStroke",
            points: [
                skillChartObj.first,
                skillChartObj.second
            ],
            easing: 'easeOutQuad',
            duration: 2000,
            complete: skillChartAnime
        })
    }

    skillChartAnime();

    // TODO REMOVE ANIMATION BEFORE STARTING NEXT ONE!!! (causes bugs)



    document.querySelector("#skillHTML").addEventListener("click", () => {
        document.querySelector("#skillChartTriangle1").style.fill = "#d35400";
        document.querySelector("#skillChartTriangle2").style.fill = "#e67e22";
        document.querySelector("#skillChartTriangle3").style.fill = "#df9d64";
        
        skillChartObj = {
            first: { value: '3,111  66.5,28 90,89' },
            second: { value: '66.5,28  90,89 3,111' }
        }
        
    })
    document.querySelector("#skillCSS").addEventListener("click", () => {
        document.querySelector("#skillChartTriangle1").style.fill = "#2980b9";
        document.querySelector("#skillChartTriangle2").style.fill = "#3498db";
        document.querySelector("#skillChartTriangle3").style.fill = "#6aa8d1";
        
        skillChartObj = {
            first: { value: '100,111  50.5,28 0,89' },
            second: { value: '0,89  100,111 50.5,28' }
        }




        
        
    })
    document.querySelector("#skillJS").addEventListener("click", () => {
        document.querySelector("#skillChartTriangle1").style.fill = "#f39c12";
        document.querySelector("#skillChartTriangle2").style.fill = "#f1c40f";
        document.querySelector("#skillChartTriangle3").style.fill = "#f0d97d";
        
        skillChartObj = {
            first: { value: '100,111  50.5,28 0,89' },
            second: { value: '0,89  100,111 50.5,28' }
        }
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
            cursor.classList.add("cursorScale");
        })
        e.addEventListener("mouseleave",()=>{
            cursor.classList.remove("cursorScale");
        })
    })





    let dataScroll = document.querySelectorAll("[data-scroll]");

    dataScroll.forEach(obj => {
        let rect = obj.getBoundingClientRect();
        document.querySelector("#scroll").addEventListener("scroll", ()=>{
            onScreen(rect.top, obj);
        })

    })


}





function onScreen(elYTop, obj){
    if(document.querySelector("#scroll").scrollTop >= parseInt(elYTop) && document.querySelector("#scroll").scroll){
        obj.classList.add("play")
    }
}

// if(document.body.classList.contains = "scroll"){
//     console.log("scroll");
// }else if(obj.dataset.scroll != ""){
//     document.body.classList.add("scroll");
//     document.body.classList.add("scrollSide" + obj.dataset.scroll);
// }