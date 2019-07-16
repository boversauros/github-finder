import Button from '../Button'
import logic from '../../logic'

// add button
const button = new Button
const SearchButton = button.render()
SearchButton.innerHTML = 'search'

class SearchBar {
    searchButton = SearchButton

    searchGit() {
        const searchInput = document.querySelector('#search')
        logic.search(searchInput.value)
    }

    render() {
        this.searchButton.addEventListener('click', this.searchGit)

        const searchinput = document.createElement('input')
        searchinput.setAttribute('type', 'text')
        searchinput.setAttribute('placeholder', 'Search...')
        searchinput.setAttribute('id', 'search')

        const SearchBar = document.createElement('div')
        SearchBar.appendChild(searchinput)
        SearchBar.appendChild(this.searchButton)

        return SearchBar
    }
}

export default SearchBar