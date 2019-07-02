import Button from './components/Button'

const app = document.querySelector('#app')

// add button
const button = new Button
const SearchButton = button.render()
SearchButton.innerHTML = 'search'

app.appendChild(SearchButton)