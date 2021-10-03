let video = document.getElementById('video');

const backward=()=>{
    video.currentTime -= 15
}

const forward=()=>{
    video.currentTime += 15
}

const decrease=()=>{
    video.playbackRate -= .1

}

const increase=()=>{
    video.playbackRate += .1

}

const play=()=>{
    video.classList.toggle('playing')
    if(video.classList.contains('playing')){
        video.pause()
    } else {
        video.play()
    }
}

const stop=()=>{
    video.pause()
    video.currentTime = 0;
}

// Controles sumirem
let player = document.querySelector('.container')
let controls = document.querySelector('.controls');

player.addEventListener('mouseover', (event)=>{
    controls.style.visibility = 'visible'
    console.log('entrou');
})

controls.addEventListener('mouseleave', (event)=>{
    console.log('saiu');
    setTimeout(()=>{
        controls.style.visibility = 'hidden'
        // event.target.style.display = 'none';
    }, 1000)
})

