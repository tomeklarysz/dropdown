const button = document.getElementById('menu')

button.addEventListener('click', () => {
  const dropdown = document.getElementById('visible')
  if (dropdown.style.visibility === '') {
    dropdown.style.visibility = 'visible'
  } else {
    dropdown.style.visibility = ''
  }
})