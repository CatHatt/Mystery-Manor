const loadingScreen = document.getElementById('loading-screen')!
const navbar = document.querySelector('#navbar') as HTMLElement
const navbarContainer = document.querySelector(
    '#navbar-container'
) as HTMLDivElement
const parallax = document.querySelector('#parallax')! as HTMLElement

window.addEventListener('load', () => {
    loadingScreen.classList.add('fadeOut')
})

navbarContainer.addEventListener('wheel', (event) => {
    parallax.scrollTop += event.deltaY * 3
})
