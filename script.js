//Initiate the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Gabru-Karan Aujila", filePath: "songs/1.mp3", coverPath: "cover2.jpg"},
    {songName: "Lofer-Masoom sharma", filePath: "songs/2.mp3", coverPath: "cover3.jpg"},
    {songName: "Sajde-Faheem Abdulla", filePath: "songs/3.mp3", coverPath: "cover4.jpg"},
    {songName: "60 mukadme-Masoom sharma", filePath: "songs/4.mp3", coverPath: "cover5.jpg"},
    {songName: "Dil_Laga_Liya_Maine_Tumse_Pyaar_Karke", filePath: "songs/5.mp3", coverPath: "cover6.jpg"},
    {songName: "Dil_Mera_Tod_Tod_Diya_Usne_Alka_Yagnik__", filePath: "songs/6.mp3", coverPath: "cover1.jpg"},
    {songName: "Ek_Bewafaa_Hai_", filePath: "songs/7.mp3", coverPath: "cover1.jpg"},
    {songName: "Ek_Mulakat_Zaruri_Hai_Sanam_", filePath: "songs/8.mp3", coverPath: "cover1.jpg"},
    {songName: "Kaali_Activa_-_Pind_De_Gerhe(256k)", filePath: "songs/9.mp3", coverPath: "cover1.jpg"},
    {songName: "Rangroot___Diljit_Dosanjh___", filePath: "songs/10.mp3", coverPath: "cover1.jpg"},

]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handle play/pouse click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play'); 
        gif.style.opacity = 0;
    }
})

//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})


