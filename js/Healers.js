let play = document.querySelector(".playaudio")
let video = document.querySelector(".clicked")


function PlayAudio() {
    video.muted = true
    play.innerHTML = "Play Audio"
    let i = document.createElement("i")
    i.classList.add("fa-solid", "fa-volume-high")
    i.style.marginRight = "2px"
    play.prepend(i)

}

function CloseAudio() {
    video.muted = false
    play.innerHTML = "Close Audio"
    let ii = document.createElement("i")
    ii.classList.add("fa-solid", "fa-volume-xmark")
    ii.style.marginRight = "2px"
    play.prepend(ii)
}



play.addEventListener("click", function() {
    if (video.muted == true) {
        CloseAudio()

    } else {

        PlayAudio()
    }



})

let nav = document.querySelector(".positionn")

window.onscroll = function() {
    if (window.scrollY === 200) {
        nav.classList.add("positionn")
    }
}