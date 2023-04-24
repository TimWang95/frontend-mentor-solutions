const ratingsDisplay = document.querySelector(".rating-container");
const form = document.querySelector('.form-container')
const thankyouCard = document.querySelector('.thankyou-container')
const userSelection = document.querySelector('.selected-paragraph')

function handleSubmitClick(e) {
  e.preventDefault()
  const rating = form.rating.value;
  // console.log(rating)

  if (rating === '') {
    return ;
  }

  userSelection.textContent = `You selected ${rating} out of 5`
  ratingsDisplay.classList.add('d-none')
  thankyouCard.classList.remove('d-none')
}

form.addEventListener('submit', handleSubmitClick)

