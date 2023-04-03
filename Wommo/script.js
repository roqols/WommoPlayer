var sounds = [

{titulo:'Paradise', src:'Musics/Coldplay - Paradise (Official Video).mp3'},
{titulo:'Hymn For The Weekend', src:'Musics/Coldplay - Hymn For The Weekend (Official Video).mp3'},
{titulo:'Heat Waves', src:'Musics/Heat Waves.mp3'},



]

var musica = document.querySelector('audio');
var Play = document.getElementById(".Play");
var volumeBar = document.querySelector(".volume2");
let barra = document.querySelector('.music')
let indexmusic = 0;
var nomemusica = document.querySelector('.MusicName')

RenderMusic(indexmusic);

document.querySelector('.Play').addEventListener('click', Playmusic);

document.querySelector('.Pause').addEventListener('click', Pausemusic);

document.querySelector('.Back').addEventListener('click', () => {
    indexmusic--;
    if (indexmusic < 0) {
        indexmusic = sounds.length - 1;
    }
    RenderMusic(indexmusic);
});

document.querySelector('.Skip').addEventListener('click', () => {
    indexmusic++;
    if (indexmusic > sounds.length - 1) {
        indexmusic = 0;
    }
    RenderMusic(indexmusic);
});


function RenderMusic(index){
    musica.setAttribute('src', sounds[index].src);
    musica.addEventListener('loadeddata',  () => {
        musica.play();
        nomemusica.textContent = sounds[index].titulo;
    });
}

musica.addEventListener('timeupdate', Updatebar);

function Playmusic(){
    musica.play();
    document.querySelector('.Pause').style.display = "flex";
    document.querySelector('.Play').style.display = "none";
}
function Pausemusic(){
    musica.pause();
    document.querySelector('.Pause').style.display = "none";
    document.querySelector('.Play').style.display = "flex";
}

function Updatebar(){
    var percent = (musica.currentTime / musica.duration) * 100;
    barra.value = percent;
}

barra.addEventListener("input", function() {
    var time = (barra.value / 100) * musica.duration;
    musica.currentTime = time;
});

volumeBar.addEventListener("input", function() {
    musica.volume = volumeBar.value;
    if (musica.volume == 0) {
    } else {
    }
});
