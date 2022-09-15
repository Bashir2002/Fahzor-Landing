const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const navLinks = document.querySelector('.nav-links')
const anchor = document.querySelectorAll('.anchor')
const show = document.querySelectorAll('.show')

anchor.forEach((acc, i) => {
  acc.addEventListener('click', () => {
    show[i].classList.toggle('show')

    if (!show[i].classList.contains('show')) {
      acc.src = 'images/Icon/Vector.png'
    } else {
      acc.src = 'images/Vector.png'
    }
  })
})
// anchor.addEventListener('click', () => {
//   show.classList.toggle('show')

//   if (!show.classList.contains('show')) {
//     anchor.src = 'images/Icon/Vector.png'
//   } else {
//     anchor.src = 'images/Vector.png'
//   }
// })

menu.addEventListener('click', () => {
  navLinks.classList.add('show-links')
})
close.addEventListener('click', () => {
  navLinks.classList.remove('show-links')
})
