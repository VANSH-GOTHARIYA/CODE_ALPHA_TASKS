const songs = [
{
    title: "Song 1",
    artist: "Artist 1",
    src: "songs/song1.mp3",
    cover: "images/cover1.jpg"
},
{
    title: "Song 2",
    artist: "Artist 2",
    src: "songs/song2.mp3",
    cover: "images/cover2.jpg"
},
{
    title: "Song 3",
    artist: "Artist 3",
    src: "songs/song3.mp3",
    cover: "images/cover3.jpg"
}
];

let currentSong = 0;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");

const progress = document.getElementById("progress");
const volume = document.getElementById("volume");

function loadSong(index){

audio.src = songs[index].src;
title.textContent = songs[index].title;
artist.textContent = songs[index].artist;
cover.src = songs[index].cover;

}

loadSong(currentSong);

playBtn.onclick = function(){

if(audio.paused){

audio.play();
playBtn.textContent="⏸";

}else{

audio.pause();
playBtn.textContent="▶";

}

};

nextBtn.onclick=function(){

currentSong++;

if(currentSong>=songs.length){

currentSong=0;

}

loadSong(currentSong);
audio.play();
playBtn.textContent="⏸";

};

prevBtn.onclick=function(){

currentSong--;

if(currentSong<0){

currentSong=songs.length-1;

}

loadSong(currentSong);
audio.play();
playBtn.textContent="⏸";

};

audio.addEventListener("timeupdate",()=>{

progress.max=audio.duration;
progress.value=audio.currentTime;

});

progress.oninput=function(){

audio.currentTime=progress.value;

};

volume.oninput=function(){

audio.volume=volume.value;

};

audio.onended=function(){

nextBtn.click();

};
