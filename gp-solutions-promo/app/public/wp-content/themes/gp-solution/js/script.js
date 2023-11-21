
let currentSlideIndex = 0;
const sliderList = document.querySelectorAll('.slide')
console.log(sliderList)
sliderList[currentSlideIndex].classList.add('current-slide')
sliderList[currentSlideIndex + 1].classList.add('next-slide')

const dots = document.querySelectorAll(".dot")
dots[currentSlideIndex].classList.add('active')

const slideList = document.getElementById('slider-list')

let sliderTranslation = 0;

function nextSlide() {
  if (currentSlideIndex < 3) {
    sliderTranslation -= 640;
    slideList.style.transform = `translateX(${sliderTranslation}px)`;
    sliderList[currentSlideIndex].classList.toggle('current-slide')
    sliderList[currentSlideIndex + 1].classList.toggle('next-slide')
    sliderList[currentSlideIndex + 1].classList.toggle('current-slide')
    sliderList[currentSlideIndex + 2].classList.toggle('next-slide')
    dots[currentSlideIndex].classList.toggle('active')
    dots[currentSlideIndex + 1].classList.toggle('active')
    currentSlideIndex += 1
  }
}

function prevSlide() {
  if (currentSlideIndex > 0) {
    sliderTranslation += 640;
    slideList.style.transform = `translateX(${sliderTranslation}px)`;
    sliderList[currentSlideIndex].classList.toggle('current-slide')
    sliderList[currentSlideIndex].classList.toggle('next-slide')
    sliderList[currentSlideIndex + 1].classList.toggle('next-slide')
    sliderList[currentSlideIndex - 1].classList.toggle('current-slide')
    dots[currentSlideIndex].classList.toggle('active')
    dots[currentSlideIndex - 1].classList.toggle('active')
    currentSlideIndex -= 1
  }
}

function currentSlide(index) {
  currentSlideIndex = index
  sliderTranslation = - (index * 640)
  slideList.style.transform = `translateX(${sliderTranslation}px)`;

  sliderList.forEach(element => {
    element.classList.remove('current-slide')
    element.classList.remove('next-slide')
  });
  sliderList[currentSlideIndex].classList.add('current-slide')
  sliderList[currentSlideIndex + 1].classList.add('next-slide')

  dots.forEach(element => {
    element.classList.remove('active')
  });

  dots[currentSlideIndex].classList.add('active')
}


