const loadingScreen = document.getElementById('loading-screen')!
const navbar = document.querySelector('#navbar') as HTMLElement
const navbarContainer = document.querySelector(
    '#navbar-container'
) as HTMLDivElement
const main = document.querySelector('#parallax')! as HTMLElement

window.addEventListener('load', () => {
    loadingScreen.classList.add('fadeOut')
})

navbarContainer.addEventListener('wheel', (event) => {
    main.scrollTop += event.deltaY * 3
})

main.addEventListener('scroll', () => {
    const parallaxSections = main.querySelectorAll('.parallax-section')
    const mainPos = main.getBoundingClientRect()
    const mainScrollPos = main.scrollTop

    for (const parallaxSection of parallaxSections) {
        const sectionPos = parallaxSection.getBoundingClientRect()

        // this finds the relative position of the current element in the loop compared to the main element
        //                       ↓      ↓      ↓
        if (mainScrollPos > sectionPos.y + sectionPos.height * 2 - mainPos.y) {
            parallaxSection.classList.add('hide')
        } else {
            parallaxSection.classList.remove('hide')
        }
    }
})
