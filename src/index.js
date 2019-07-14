import SearchBar from './components/SearchBar'

//create app element
const app = document.querySelector('#app')

// add new search bar
const searchBar = new SearchBar
const seeker = searchBar.render()
app.appendChild(seeker)