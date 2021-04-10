window.onload = function () {
    document.querySelectorAll("#loader h1 span").forEach((obj, i) => {
        obj.style.animationDelay = 0.1 * i + "s";
    })
    window.setInterval(() => {
        document.querySelector("#loader").classList.add("hide");
    }, 00);
    document.querySelectorAll(".animBlockReveal").forEach((obj, i) => {
        obj.style.animationDelay = 2 + 0.1 * i + "s";
    })
    let ageSpan = document.querySelector("#age");
    let birthday = new Date("03-11-2001");
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs);
    ageSpan.innerHTML = ageDate.getUTCFullYear() - 1970;


    // anime({
    //     targets: "#skillChartStroke",
    //     points: [
    //         { value: '1.5 112.5,66.5 25.5,88.5 88.5,1.5 112.5' },
    //         { value: '1 89,66.5 1.5,131.5 89,66.5,1' },
    //     ],
    //     easing: 'easeOutQuad',
    //     duration: 2000,
    //     loop: true
    // })
}