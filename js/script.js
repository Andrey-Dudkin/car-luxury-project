const burgerBtn = document.querySelector('.burger-menu__btn')
const burgerIcon = document.querySelector('.burger-menu__icon')
const menuLinks = document.querySelectorAll('.menu__link').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('menu--open')
    burgerIcon.classList.remove('burger-menu__icon-active')
  })
})
const menu = document.querySelector('.menu')
burgerBtn.addEventListener('click', function () {
  burgerIcon.classList.toggle('burger-menu__icon-active')
  menu.classList.toggle('menu--open')
})

// *video
const videoBtn = document.querySelector('.video-play')
const videoFile = document.querySelector('#video')
const videoOverlay = document.querySelector('.video__overlay')
const videoPlayText = document.querySelector('.video-play__text')
videoBtn.addEventListener('click', () => {
  videoPlayText.innerText = 'Stop showreel'
  if (videoFile.paused) {
      videoFile.play()
      videoPlayText.innerText = 'Stop showreel'
    videoOverlay.onmouseleave = () => {
      console.log('Увёл мышь')
      videoOverlay.classList.add('video__overlay--hidden')
      // videoBtn.style.opacity = "0"
    }
    videoOverlay.onmouseenter = () => {
      console.log('Навёл мышь')
      videoOverlay.classList.remove('video__overlay--hidden')
      // videoBtn.style.opacity = "1"
    }
  } else {
    videoFile.pause()
    videoPlayText.innerText = 'Play showreel'
    videoOverlay.onmouseleave = () => null
    videoOverlay.onmouseenter = () => null
  }
})

// box.onmouseleave = () => {
//   console.log('Увёл мышь')
// }
// box.onmouseenter = () => {
//   console.log('Навёл мышь')
// }
