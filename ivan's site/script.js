const burger = document.querySelector('.burger')
const exit = document.querySelector('.exit')
const dropdownHeader = document.querySelector('.dropdownHeader')
burger.addEventListener('click', () => {
const dropDown = document.querySelector('.dropdown')
 dropDown.style.top = '0'
 dropdownHeader.style.display = 'flex'
})
exit.addEventListener('click', () => {
    const dropDown = document.querySelector('.dropdown')
     dropDown.style.top = '-100%'
     dropdownHeader.style.display = 'none'

    })

