const username = document.querySelector('[data-js="usernameInput"]')

username.addEventListener('input', (e) => {
  e.target.value = primeiraLetraMaiuscula(e.target.value)
})

const primeiraLetraMaiuscula = text => {
	return text.toLowerCase()
		.split(' ')
		.map((word) => {
      if(word !== "de"
      && word !== "da"
      && word !== "das"
      && word !== "do"
      && word !== "dos"
      ) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word
      }
		}).join(' ')
}


