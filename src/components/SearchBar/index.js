import Button from '../Button'
import logic from '../../logic'

class SearchBar {
    constructor(func) {
        this.search = func
    }

    searchButton = new Button('search')
    searchResults = []
    searchGit() {
        const searchInput = document.querySelector('#search')
        logic.search(searchInput.value)
            .then(res => {
                this.searchResults = res

            })
    }

    render() {
        this.searchButton.addEventListener('click', this.search)

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