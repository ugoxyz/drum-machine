function play(str) {
    var audio = document.getElementById(str);
    audio.play();

    let mydisplay = document.getElementById("top-display");

    switch (str) {
        case "Q" || "q":
            mydisplay.innerHTML = "Beat 1";
            break;
        case "W" || "w":
            mydisplay.innerHTML = "Beat 2";
            break;
        case "E" || "e":
            mydisplay.innerHTML = "Beat 3";
            break;
        case "A" || "a":
            mydisplay.innerHTML = "Beat 4";
            break;
        case "S" || "s":
            mydisplay.innerHTML = "Beat 5";
            break;
        case "D" || "d":
            mydisplay.innerHTML = "Beat 6";
            break;
        case "Z" || "z":
            mydisplay.innerHTML = "Beat 7";
            break;
        case "X" || "x":
            mydisplay.innerHTML = "Beat 8";
            break;
        case "C" || "c":
            mydisplay.innerHTML = "Beat 9";
            break;
        default:
            mydisplay.innerHTML = "No beat for you!";
    }
}

window.document.onkeyup = function (event) {
    let mykeystroke = event.key;

    switch (mykeystroke) {
        case "q":
            play("Q");
            break;
        case "w":
            play("W");
            break;
        case "e":
            play("E");
            break;
        case "a":
            play("A");
            break;
        case "s":
            play("S");
            break;
        case "d":
            play("D");
            break;
        case "z":
            play("Z");
            break;
        case "x":
            play("X");
            break;
        case "c":
            play("C");
            break;
        default:
            console.log("Please enter Q W E A S D Z X or C");
    }
   

}

 const audioPlayer = document.getElementById('myVolume')
function setVolume() {
    audioPlayer.volume = 0.1
}