// cRAEATE an array of songs

let songs = [ "./audio-file/jireh.mp3","./audio-file/build_your_church.mp3","./audio-file/old_church_basement.mp3","./audio-file/shall_not_want.mp3" ];


let album_photos = [ "./img/Photo1.png", "./img/Photo2.png", "./img/Photo3.png", "./img/Photo4.png" ];



let songTitle = document.getElementById('songTitle');
let fillBar = document.getElementById('fill');


let song = new Audio();
let currentSong = 0;


window.onload = playSong;

function playSong() {
    song.src = songs[currentSong];
    // console.log(song.src);
    songTitle.textContent = songs[currentSong].replace('./audio-file/','').replace('.mp3','').replace('_',' ').replace('_',' ');
    // songTitle.textContent = songs[currentSong];
    //Remove ./audio-file/

    // console.log(songTitle.textContent);

    song.play();
}


    function playOrPauseSong(){
        if(song.paused){
            song.play();
            // document.getElementById('play-pause').setAttribute.src = '../img/Pause.png';
            $("#play img").attr('src', './img/Pause.png');
        }else{
            song.pause();
            // document.getElementById('play-pause').setAttribute.src = '../img/Play.png';
            $("#play img").attr('src', './img/Play.png');
        }
 
    }

    song.addEventListener('timeupdate', function(e) {
        let = position = (song.currentTime/song.duration);
        fillBar.style.width = position * 100 + '%';
        // console.log(song.currentTime);
        // song_duration = Math.round(song.duration/60);


        document.getElementsByClassName('timey_right')[0].innerHTML = Math.round((song.duration/60)*100)/100;
        
        if((Math.round((song.currentTime/60)*100)/100)<10){
            document.getElementsByClassName('timey_left')[0].innerHTML = '0'+Math.round((song.currentTime/60)*100)/100 ;
        }else{
            document.getElementsByClassName('timey_left')[0].innerHTML = Math.round((song.currentTime/60)*100)/100 ;
        }

    });

    function next(){
        currentSong++; //
        if(currentSong>songs.length-1){
            currentSong =0;
        }
        playSong(); //
        $("#play img").attr('src', './img/Pause.png');
        $("#image img").attr('src', album_photos[currentSong]);
        $("#bg img").attr('src', album_photos[currentSong]);
        
    }



    function pre(){
        currentSong--; //
        if(currentSong<0){
            currentSong =songs.length-1;
        }
        playSong(); //
        $("#play img").attr('src', './img/Pause.png');
        $("#image img").attr('src', album_photos[currentSong]);
        $("#bg img").attr('src', album_photos[currentSong]);    
    }



