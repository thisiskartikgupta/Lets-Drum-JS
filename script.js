if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    alert("Since phones don't have keyboards. You may not have a pleasant experience.");
}

window.addEventListener("keydown", function(f) {

    let audio = document.querySelector(`audio[data-key="${f.keyCode}"]`);

    let leftKeySelector = document.querySelector(`.key-l[data-key="${f.keyCode}"]`);
    let rightKeySelector = document.querySelector(`.key-r[data-key="${f.keyCode}"]`);
    let SpacekeySelector = document.querySelector(`.key-space[data-key="${f.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();

    if(leftKeySelector != null && rightKeySelector == null && SpacekeySelector == null) {
        console.log("Left Side");
        
        leftKeySelector.classList.add("playing");

        setTimeout(function(f1) {
            leftKeySelector.classList.remove("playing");
        }, 100);
    }

    else if(leftKeySelector == null && rightKeySelector != null && SpacekeySelector == null) {
        console.log("Right Side");

        rightKeySelector.classList.add("playing");

        setTimeout(function(f1) {
            rightKeySelector.classList.remove("playing");
        }, 100);
    } 

     else if(leftKeySelector == null && rightKeySelector == null && SpacekeySelector != null) {
        console.log("Space Side");
        SpacekeySelector.classList.add("playing");

        setTimeout(function(f1) {
            SpacekeySelector.classList.remove("playing");
        }, 100);
    }

});
