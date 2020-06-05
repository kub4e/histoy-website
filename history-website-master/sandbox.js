const flagItems = document.querySelectorAll('.flag-item-wrapper')

flagItems.forEach(flagItem => {
    flagItem.addEventListener('mouseover', () => {
        flagItem.childNodes[1].classList.add('img-darken')
    })
})

flagItems.forEach(flagItem => {
    flagItem.addEventListener('mouseout', () => {
        flagItem.childNodes[1].classList.remove('img-darken')
    })
})
