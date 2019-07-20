import SearchBar from './components/SearchBar'

//create app element
const app = document.querySelector('#app')

const test = () => {
    console.log('hello test')
}

// add new search bar
const searchBar = new SearchBar(test)
const finder = searchBar.render(console.log('hello world'))
app.appendChild(finder)