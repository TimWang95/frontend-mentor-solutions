const btn = document.querySelector('.icon-share')
const iconGroup = document.querySelector('.icon-group__wrapper')

btn.addEventListener('click', () => {
  iconGroup.classList.toggle('hidden')
})