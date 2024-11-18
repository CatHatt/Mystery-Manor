const loadingScreen = document.querySelector('#loading-screen')!
const navbarContainer = document.querySelector(
    '#navbar-container'
) as HTMLDivElement
const main = document.querySelector('#parallax')! as HTMLElement
const maskCircle = document.querySelector('#mask-circle') as SVGCircleElement
const container = document.querySelector('#container') as HTMLDivElement

let savedMouse: MouseEvent = new MouseEvent('')

let currentPart = 0
const maxPart = 3

window.addEventListener('load', () => {
    loadingScreen.classList.add('fadeOut')
})

document.body.addEventListener('mousemove', updateCircleMask)

function updateCircleMask(event: MouseEvent | unknown) {
    if (!(event instanceof MouseEvent)) return updateCircleMask(savedMouse)

    const xPos = event.x
    const yPos = event.y

    maskCircle.setAttribute('cx', `${xPos}px`)
    maskCircle.setAttribute('cy', `${yPos}px`)
    // savedMouse krävs inte här, men jag har kvar den som en fallback
    savedMouse = event
}

type KeyFunctionsType = { key: string; function: Function }[]

document.addEventListener('keydown', (event) => {
    const keyFunctions: KeyFunctionsType = [
        {
            key: 'ArrowLeft',
            function: () => {
                changePage(-1)
            },
        },
        {
            key: 'ArrowRight',
            function: () => {
                changePage(1)
            },
        },
    ]

    const keys = keyFunctions.map((item) => item.key)
    const functions = keyFunctions.map((item) => item.function)

    if (!keys.includes(event.key)) return

    functions[keys.indexOf(event.key)]()

    container.style.setProperty('--part', currentPart.toString())
})

function limit(num: number, min: number, max: number = Infinity) {
    return num < min ? min : num > max ? max : num
}

function changePage(change: number = 1) {
    currentPart = limit(currentPart + change, 0, maxPart)
    updatePage()
}

function goToPage(pageNumber: number) {
    currentPart = limit(pageNumber, 0, maxPart)
    updatePage()
}

function updatePage() {}
