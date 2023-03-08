var audio = document.querySelector('audio');
var audioKeybind = 'K';
var audioMode = 1;
var audioSource = document.querySelector('audio > source');

var discord = document.getElementById('discord');
var allowDiscordCopy = true;

var homeUrl = window.location.href;

var savedDiscord, allowContinue, songSelected;

function getUrl(url) {
    var http = new XMLHttpRequest();
    
    http.open('GET', url, false);
    http.send(null);
    
    return http.responseText;
}

var json = JSON.parse(getUrl('https://isolation.world/assets/json/main.json?ver=6'));

function getSongDetails() {
    songSelected = json.songs[Math.floor(Math.random() * json.songs.length)];
    
    audioSource.src = songSelected['path'] + '?key=cmZkc3l0YnluNDM4aGQ';
    audio.load();
}

function loadLinks() {
    document.querySelector(".spider > a:nth-child(1)").innerHTML = json.links[0]['name'];
    document.querySelector(".spider > a:nth-child(2)").innerHTML = json.links[1]['name'];
    document.querySelector(".spider > a:nth-child(2)").href = json.links[1]['link'];
    document.querySelector(".spider > a:nth-child(3)").innerHTML = json.links[2]['name'];
    document.querySelector(".spider > a:nth-child(3)").href = json.links[2]['link'];
    document.querySelector(".spider > a:nth-child(4)").innerHTML = json.links[3]['name'];
    document.querySelector(".spider > a:nth-child(4)").href = json.links[3]['link'];
    document.querySelector(".spider > a:nth-child(5)").innerHTML = json.links[4]['name'];
    document.querySelector(".spider > a:nth-child(5)").href = json.links[4]['link'];
    
    savedDiscord = json.links[0]['name'];
}

document.querySelector(".enter").onclick = function() {
    proceed();
}

window.onload = function() {
    audio.volume = 0.3;
    loadLinks();
    getSongDetails();
    
    document.querySelector(".enter").style.opacity = 1;
        allowContinue = true;
}

function vol() {
    var a = document.getElementById("audio");
    var slider = document.getElementById("r").value;
    a.volume = slider;
}

audio.onended = function() {
    newSong = json.songs[Math.floor(Math.random() * json.songs.length)];
    
    audioSource.src = newSong['path'] + '?key=cmZkc3l0YnluNDM4aGQ';
    audio.load();
    audio.play();
}

function proceed() {
    if(allowContinue == true) {
        audio.loop = false;
        
        document.getElementById("main").style.opacity = 1;
        document.querySelector(".enter").style.opacity = 0;
        
        setTimeout(function() {
            audio.play();
            playingAudio = true;
        }, 250);
    
        setTimeout(function() {
            document.querySelector(".enter").remove()
        }, 1000);
        
        allowContinue = false;
    }
}

function copyDiscord() {
    if(allowDiscordCopy == true) {
        allowDiscordCopy = false;
        navigator.clipboard.writeText(savedDiscord);
        
        discord.innerHTML = '  copied  ';
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

audio.onerror = function() {
  location.reload();
};