// Extra funktioner för att göra matten lite lättare
const random = (min: number, max: number) => Math.random() * (max - min) + min
const floor = (num: number) => Math.floor(num)

window.addEventListener('load', nextSong)

const audioPlayer = document.getElementById('audioPlayer') as HTMLAudioElement
const text = document.getElementById('text') as HTMLHeadElement
const discIcon = document.getElementById('discIcon') as HTMLImageElement

// Väljer en ny låt när ljudspelaren är färdig
audioPlayer?.addEventListener('ended', () => {
    audioPlayer.currentTime = 0
    nextSong()
})

discIcon.addEventListener('click', () => {
    audioPlayer.currentTime = 0
    nextSong()
})

async function nextSong() {
    audioPlayer.pause()
    text.innerHTML = 'Loading...'
        .split('')
        .map(
            (letter, index) =>
                `<span style='animation-delay: ${
                    index * 100
                }ms' class='dot'>${letter}</span>`
        )
        .join('')
    const response = await fetch('/public/music.json')
    const music: { name: string; artist: string; path: string }[] =
        await response.json()
    const songIndex = floor(random(0, music.length))
    const song = music[songIndex]
    audioPlayer.src = song.path
    text.innerHTML = `${song.name} - ${song.artist}`
        .split('')
        .map(
            (letter, index) =>
                `<span style='animation-delay: ${index * 100 + 1000}ms, ${
                    index * 100 + 1000
                }ms, ${index * 100}ms' class='letter ${
                    letter == ' ' ? 'whitespace' : ''
                }'>${letter}</span>`
        )
        .join('')
    audioPlayer.play()
}
