const upBtn = document.querySelector(".up-button")

const downBtn = document.querySelector(".down-button")

const sidebar = document.querySelector('.sidebar')

const container = document.querySelector(".container")
const mainSlide = document.querySelector(".main-slide")
const slideCount = mainSlide.querySelectorAll('div').length
console.log('mainSlide', slideCount)

let activeSliderIndex = 0

sidebar.style.top = `-${(slideCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction) {           // direction (направление) - это 'up' или 'down'
if (direction === 'up') {
    activeSliderIndex = activeSliderIndex + 1
    if (activeSliderIndex === slideCount) {
        activeSliderIndex = 0
    }
} else if (direction === 'down') {
    activeSliderIndex = activeSliderIndex - 1
    if (activeSliderIndex < 0) {
        activeSliderIndex = slideCount - 1
    }
  }

  const height = container.clientHeight
// console.log('height', height)
// mainSlide.style.transform = `translateY(-881px)`
mainSlide.style.transform = `translateY(-${height * activeSliderIndex}px)`

sidebar.style.transform = `translateY(${height * activeSliderIndex}px)`

}