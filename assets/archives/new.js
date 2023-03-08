var audio = document.getElementById('audio');
var audioKeybind = 'K';
var audioSource = document.getElementById('audio-source');
console.log("audio");
var video = document.getElementById("video");


var discord = document.getElementById('discord');
var savedDiscord;
var allowDiscordCopy = true;

var showingStats = false;

var homeUrl = window.location.href;

var allowContinue = false;
var songLoaded = false;
var linksLoaded = false;

function getUrl(url) {
    var http = new XMLHttpRequest();
    
    http.open('GET', url, false);
    http.send(null);
    
    return http.responseText;
}

var json = JSON.parse(getUrl('https://isolation.world/assets/json/main.json?ver=1'));

function getSongDetails() {
    var songSelected = json.songs[Math.floor(Math.random() * json.songs.length)];
    
    audioSource.src = songSelected['path'] + '?key=9rVTxm06NjtMUoOy7Cph';
    audio.load();
    
    songLoaded = true;
}


function loadLinks() {
    document.querySelector("#main > center > h3 > a:nth-child(1)").innerHTML = json.links[0]['name'];
    document.querySelector("#main > center > h3 > a:nth-child(4)").innerHTML = json.links[1]['name'];
    document.querySelector("#main > center > h3 > a:nth-child(4)").href = json.links[1]['link'];
    document.querySelector("#main > center > h3 > a:nth-child(6)").innerHTML = json.links[2]['name'];
    document.querySelector("#main > center > h3 > a:nth-child(6)").href = json.links[2]['link'];
    document.querySelector("#main > center > h3 > a:nth-child(8)").innerHTML = json.links[3]['name'];
    document.querySelector("#main > center > h3 > a:nth-child(8)").href = json.links[3]['link'];
    
    savedDiscord = json.links[0]['name'];
    
    linksLoaded = true;
}

window.onload = function() {
    loadLinks();
    getSongDetails();
    
    if(linksLoaded == true) {
        if(songLoaded == true) {
            allowContinue = true;
            audio.volume=0.1;
        }
    }
}

function proceed() {
    if(allowContinue == true) {
        audio.loop = true;
        audio.play();
        playingAudio = true;

        document.getElementById("enter").style = 'opacity: 0;';
        setTimeout("document.getElementById('enter').remove();", 250);
        
        allowContinue = false;
        video.play()
    }
}



function copyDiscord() {
    if(allowDiscordCopy == true) {
        allowDiscordCopy = false;
        navigator.clipboard.writeText(savedDiscord);
        
        discord.innerHTML = 'copied discord';
        setTimeout(() => { 
            discord.innerHTML = savedDiscord; 
            allowDiscordCopy = true; 
        }, 2000);
    }
}

function pAudio() {
    if(playingAudio != null) {
        if(playingAudio == true) {
            playingAudio = false;
            audio.pause();
        }
        else {
            playingAudio = true;
            audio.play();
        }
    }
}

function vol() {
    var a = document.getElementById("audio");
    var slider = document.getElementById("r").value;
    a.volume = slider;
}
    
document.onkeydown = function(e) {
    if(event.keyCode == 123) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
    if(e.key == ' ' || e.key == 'Enter' || e.key == 'Escape') {
        proceed();
    }
    if(e.keyCode == audioKeybind.charCodeAt(0)) {
        pAudio();
    }
}

document.addEventListener('contextmenu', event => event.preventDefault());
//Clock
function getTime() {
    var date = new Date();
    var h = (date.getHours() <= 9) ? "0" + date.getHours() : date.getHours();
    var m = (date.getMinutes() <= 9) ? "0" + date.getMinutes() : date.getMinutes();
    var s = (date.getSeconds() <= 9) ? "0" + date.getSeconds() : date.getSeconds();
    $("#time").text(`${h}:${m}:${s}`);
}
setInterval(getTime, 1000);
getTime();


//Colored Text
let colorsArr = [
    "red",
    "cyan",
    "purple",
    "orange"
]
let colori = 0;
setInterval(() => {
    document.documentElement.style.setProperty('--color', colorsArr[colori]);
    if (colori == colorsArr.length - 1) {
        colori = 0
    } else {
        colori++
    };
}, 2000);


//Hit Counter
setTimeout(() => {
    $("#visited").text(($(".hitCounter").text().replace(/^0+/, '')));
    $(".hitCounter").remove();
}, 1000);


//Dropdown Menu
let drp = false;
let alwdrp = true;

function dropDown() {
    if (!drp && alwdrp) {
        alwdrp = false;
        $("#dropDownContent").css("display", "block");
        $("#widgetContainer").css("height", "340px");
        $("#widget").css("height", "334px");
        setTimeout(() => {
            $("#dropDownContent").css("opacity", "1");
        }, 50);
        setTimeout(() => {
            $("#dropDownContent div a").each(function (i) {
                ;
                $(this).delay(100 * i).animate({
                    'opacity': 1.0
                }, 350);
            });
        }, 1250);
        drp = true;
        setTimeout(() => {
            alwdrp = true;
        }, 2050)
    } else if (drp && alwdrp) {
        alwdrp = false;
        $($("#dropDownContent div a").get().reverse()).each(function (i) {
            ;
            $(this).delay(100 * i).animate({
                'opacity': 0.0
            }, 10);
        });
        setTimeout(() => {
            $("#dropDownContent").css("opacity", "0");
            $("#widget").css("height", "29px");
            $("#widgetContainer").css("height", "38px");
            setTimeout(() => {
                $("#dropDownContent").css("display", "none");
                alwdrp = true;
            }, 2050);
            drp = false;
        }, 1400);
    }
}

//Video volume
document.getElementById("vid").volume = 0.5;


//Main Function
mainActive = false;
setTimeout(() => {
    if (document.getElementById("vid").paused) {
        $("#clickToPlay").css("opacity", "1");
    } else {
        main()
    }
}, 1000);

function main() {
    if (mainActive) return;
    mainActive = true;
    $("#clickToPlay").css("opacity", "0");
    $("#main").css("opacity", "1");
    $("#widgetContainer").css("opacity", "1");
    $(".hitCount").css("opacity", "1");
    setTimeout(() => {
        $("#clickToPlay").css("display", "none");
    }, 1050);
    document.getElementById("vid").play();

    //Border
    borderTop = 0;
    borderRight = 0;
    borderBottom = 0;
    borderLeft = 0;

    function topBorder() {
        let int = setInterval(() => {
            borderTop++;
            if (borderTop <= 100) {
                $("#borderTop").css("width", borderTop + "%");
            } else {
                rightBorder();
                clearInterval(int);
                $("#borderTop").css({
                    "left": "",
                    "right": "0"
                });
                setTimeout(() => {
                    let int = setInterval(() => {
                        borderTop--;
                        if (borderTop >= 0) {
                            $("#borderTop").css("width", borderTop + "%");
                        } else {
                            $("#borderTop").css({
                                "right": "",
                                "left": "0"
                            });
                            clearInterval(int);
                        }
                    }, 7);
                }, 250);
            }
        }, 7);
    }

    function rightBorder() {
        let int = setInterval(() => {
            borderRight++;
            if (borderRight <= 100) {
                $("#borderRight").css("height", borderRight + "%");
            } else {
                bottomBorder();
                clearInterval(int);
                $("#borderRight").css({
                    "top": "",
                    "bottom": "0"
                });

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderRight--;
                        if (borderRight >= 0) {
                            $("#borderRight").css("height", borderRight + "%");
                        } else {
                            $("#borderRight").css({
                                "bottom": "",
                                "top": "0"
                            });
                            clearInterval(int);
                        }
                    }, 5);
                }, 450);
            }
        }, 5);
    }

    function bottomBorder() {
        let int = setInterval(() => {
            borderBottom++;
            if (borderBottom <= 100) {
                $("#borderBottom").css("width", borderBottom + "%");
            } else {
                leftBorder();
                clearInterval(int);
                $("#borderBottom").css({
                    "right": "",
                    "left": "0"
                });

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderBottom--;
                        if (borderBottom >= 0) {
                            $("#borderBottom").css("width", borderBottom + "%");
                        } else {
                            $("#borderBottom").css({
                                "left": "",
                                "right": "0"
                            });
                            clearInterval(int);
                        }
                    }, 7);
                }, 250);
            }
        }, 7);
    }

    function leftBorder() {
        let int = setInterval(() => {
            borderLeft++;
            if (borderLeft <= 100) {
                $("#borderLeft").css("height", borderLeft + "%");
            } else {
                topBorder();
                clearInterval(int);
                $("#borderLeft").css({
                    "bottom": "",
                    "top": "0"
                });

                setTimeout(() => {
                    let int = setInterval(() => {
                        borderLeft--;
                        if (borderLeft >= 0) {
                            $("#borderLeft").css("height", borderLeft + "%");
                        } else {
                            $("#borderLeft").css({
                                "top": "",
                                "bottom": "0"
                            });
                            clearInterval(int);
                        }
                    }, 5);
                }, 450);
            }
        }, 5);
    }
    topBorder();
}

//Start Main Function
$("#clickToPlay").click(() => {
    main();
});