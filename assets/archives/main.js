var styles = `
@import 'https://fonts.googleapis.com/css2?family=Poppins:wght@500&amp;display=swap';

.noise {
    z-index: 1
}
.fixed-fluid {
    top: 0;
    left: 0;
    opacity: 0.12;
    width: 100%;
    height: 100%;
    position: absolute;
    pointer-events: none
}

#overlay-toggle {
    position:absolute;
    display: none;
}
.overlay {
    background-color: black;
}
.overlay label {
    display: grid;
    width: 100vw;
    height: 100vw;
    color: rgb(255, 255, 255);
    font-size: 2rem;
}
#overlay-toggle:checked ~ .overlay {
    animation-fill-mode: forwards;
    animation-name: fade, hide;
    animation-delay: 0s, 600ms;
    animation-duration: 600ms, 1ms;
}
#overlay-toggle:checked ~ .overlay label {
    animation-fill-mode: forwards;
    animation-name: fade;
    animation-delay: 0s;
    animation-duration: 500ms;
}
.bg-video {
    z-index: -1;
    filter: brightness(40%) blur(1px);
}

html {
    height: -webkit-fill-available
}

body {
    background-color: rgb(6, 6, 6) !important;
    user-select: none;
    padding: 0;
    margin: 0;
    height: 100%;
    overflow-y: hidden;
    max-width: 100%;
    overflow-x: hidden;
    background-position: center top;
    object-fit: cover;
    margin: 0 !important;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: -webkit-fill-available
}

#main {
    display: block !important;
}

#main > h3 {
    display: grid !important;
    text-align: center;
}

.footer {
    position: absolute;
    bottom: 0;
    right: 5px;
}

#enter {
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 1;
    width: 100%;
    height: 100vh;
    cursor: pointer;
    position: fixed;
    text-align: center;
    background-color: #060707;
    transition: opacity 0.25s;
}

.begin {
    top: 50%;
    left: 50%;
    color: #fff;
    position: absolute;
    font-weight: normal;
    font-size: 20px;
    transform: translate(-50%, -50%); 
    font-family: "Segoe UI", "Source Sans Pro", Calibri, Candara, Arial, sans-serif;
}

#main {
    z-index: 2
}

#video {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    object-position: center center;
    min-height: -webkit-fill-available
}

a {
    color: white !important; 
}

a:link,
a:visited {
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  background-color: transparent;
  text-decoration: underline;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #070706;
  color: #242526;
  text-align: center;
}

.row-centered {
    text-align: center;
}

h2 {
    margin: 100px 0 0 0;
    font-size: 26px;
}

.description {
    font-size: 17px;
}

input[type=text] {
    background-color: rgb(44, 44, 44);
    padding: 5px 8px;
    font-size: 16px;
    border: solid 1px rgb(133, 133, 133);
    border-radius: 3px;
    color: white;
    width: 250px;
}

input[type=number] {
    background-color: rgb(44, 44, 44);
    padding: 5px 8px;
    font-size: 16px;
    border: solid 1px rgb(133, 133, 133);
    border-radius: 3px;
    color: white;
    width: 40px;
}

input[type=text]:focus {
    outline: none;
}

input[type=submit] {
    padding: 5px 8px;
    font-size: 16px;
    border: solid 1px rgb(133, 133, 133);
    background-color: rgb(61, 61, 61);
    border-radius: 3px;
    color: white;
}

div .lookup {
    margin-top: 30px;
    width: 50%;
    text-align: center;
    display: inline-block;
}

div .results {
    width: 50%;
    background-color: rgb(61, 61, 61);
    border: solid 1px gray;
    border-radius: 3px;
    display: inline-block;
    padding: 6px 0;
}

div .result span {
    display: inline-block;
    width: 50%;
    padding: 2px;
    box-sizing: border-box;
}

span .left {
    font-weight: bold;
}

h4 {
    margin: 30px 0 0 0;
    font-size: 20px;
}

.sidebar small {
    color: #b5b5b5;
    font-weight: bold;
    margin-left: 20px;
}

.sidebar h1 {
    font-size: 140%;
}

.sidebar h1, .sidebar p, .sidebar small {
    font-family: monospace !important;
    text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.75), 0px 0px 5px rgba(0, 0, 0, 0.75);
}

.cw {
    height: 100%;
    min-height: 100%;
}

#p {
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 100%;
}

h1, 
h2, 
h3, 
h4 {
    color: rgb(240, 240, 240);
}

.sub {
    font-size: 80%;
}

.link:before {
    content: "[ ";
}

.link:after {
    content: " ]";
}

.hanginggirl {
    margin-top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden !important;
    max-height: 400px;
    filter: grayscale(1) contrast(200%);
}

.spoiler {
    background-color: white;
    color: white;
}

.spoiler:hover {
    background-color: black;
}

p, span {
    color: white;
    font-family: monospace;
}

.nodrag {
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
}

.link, 
.link:visited {

    color: white;
    text-transform: uppercase;
    font-family: monospace;
    white-space: pre;
    margin-left: 5px;
    margin-right: 5px;
    outline: none;
}

.link:hover {
    color: #f4ab21;
    text-decoration: none;
    text-underline: none;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

@import url(https://fonts.googleapis.com/css?family=Raleway:500);

$primary-color: #2ecc71;

body {
	background: #2a2a2a;
	font-family: Raleway;
}
	
h1 {
	text-align: center;
	font-size: 34px;
	padding-top: 40px;
	color: #FFF;
}
	
p {
	color: #999;
	text-align: center;
	font-size: 15px;
	
	a {
		color: $primary-color;
		text-decoration: none;
		padding: 1px 2px 0px 2px;
		border-bottom: 2px solid rgba(0, 0, 0, .0);
		transition: all .1s ease;
		
		&:hover {
			padding: 1px 2px 1px 2px;
			border-bottom: 2px solid #555;
		}
	}
}

@import url(https://fonts.googleapis.com/css?family=Raleway:500);

$primary-color: #2ecc71;

body {
	background: #2a2a2a;
	font-family: Raleway;
}
	
h1 {
	text-align: center;
	font-size: 34px;
	padding-top: 40px;
	color: #FFF;
}
	
p {
	color: #999;
	text-align: center;
	font-size: 15px;
	
	a {
		color: $primary-color;
		text-decoration: none;
		padding: 1px 2px 0px 2px;
		border-bottom: 2px solid rgba(0, 0, 0, .0);
		transition: all .1s ease;
		
		&:hover {
			padding: 1px 2px 1px 2px;
			border-bottom: 2px solid #555;
		}
	}
}

body,
html {
  background: #141414;
  font-family: Roboto Slab
}

.player {
    top: 0;
    left: 0;
    z-index: 3;
    opacity: 1;
    width: 100%;
    height: 100vh;
    cursor: pointer;
    position: absolute;
    transition: opacity 0.25s;
    margin: 36px 20px 20px;
    
}

input[type=range] {
  -webkit-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 300px;
  height: 2px;
  border: none;
  border-radius: 3px
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 12px;
  width: 12px;
  border-radius: 510%;
  background: #141414;
  border: 2px solid #515151;
  margin-top: -5px;
  cursor: pointer
  
}

.focused::-webkit-slider-thumb {
  box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.15)
}

.clicked::-webkit-slider-thumb {
  -webkit-transform: scale(1.5)
}

.disabled::-webkit-slider-thumb {
  -webkit-transform: scale(0.9);
  box-shadow: 0 0 0 3px #141414;
  background: #515151 !important;
  border-color: #515151 !important
}

input[type=range]:focus {
  outline: none
}

.rangeM input[type=range].disabled::-webkit-slider-runnable-track {
  background: #515151!important
}

.rangeM input[type=range]::-webkit-slider-thumb {
  background: #3f51b5;
  border-color: #3f51b5
}

.range:hover input[type=range]:before {
  color: white;
  content: '50';
  font-family: Roboto Slab;
  top: -49px;
  background: #3f51b5;
  padding: 8px 0 3px;
  font-size: 14px;
  width: 30px;
  border-radius: 100% 100% 0 0
}

.range:hover input[type=range]:after {
  content: '';
  top: -19px;
  left: 50px;
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  border-top: 8px solid #3f51b5;
  font-family: Roboto Slab
}
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)
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
