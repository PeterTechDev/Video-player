let videoAnime = document.getElementById('videoAnime');

const backward=()=>{
    videoAnime.currentTime -= 15
}

const forward=()=>{
    videoAnime.currentTime += 15
}

const decrease=()=>{
    videoAnime.playbackRate -= .1

}

const increase=()=>{
    videoAnime.playbackRate += .1

}

const play=()=>{
    videoAnime.play()
}

const stop=()=>{
    videoAnime.pause()
    videoAnime.currentTime = 0;
}