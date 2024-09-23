const loadingScreen = document.querySelector('#loading-screen')!
const navbarContainer = document.querySelector(
    '#navbar-container'
) as HTMLDivElement
const main = document.querySelector('#parallax')! as HTMLElement
const maskCircle = document.querySelector('#mask-circle') as SVGCircleElement
const riddleSection = document.querySelector('.riddle') as HTMLElement
let savedMouse: MouseEvent = new MouseEvent('')

window.addEventListener('load', () => {
    loadingScreen.classList.add('fadeOut')
})

navbarContainer.addEventListener('wheel', (event) => {
    main.scrollTop += event.deltaY * 3
})

main.addEventListener('scroll', updateCircleMask)

document.body.addEventListener('mousemove', updateCircleMask)

function updateCircleMask(event: MouseEvent | unknown) {
    if (!(event instanceof MouseEvent)) return updateCircleMask(savedMouse)

    const xPos = event.x - riddleSection.getBoundingClientRect().x
    const yPos = event.y - riddleSection.getBoundingClientRect().y

    maskCircle.setAttribute('cx', `${xPos}px`)
    maskCircle.setAttribute('cy', `${yPos}px`)
    savedMouse = event
}
