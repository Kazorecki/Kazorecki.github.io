window.onload = function () {
    document.querySelectorAll("#loader h1 span").forEach((obj, i) => {
        obj.style.animationDelay = 0.1 * i + "s";
    })
    window.setInterval(() => {
        document.querySelector("#loader").classList.add("hide");
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



    document.querySelector("#skillHTML").addEventListener("click",()=>{
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
    document.querySelector("#skillCSS").addEventListener("click",()=>{
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
    document.querySelector("#skillJS").addEventListener("click",()=>{
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
}