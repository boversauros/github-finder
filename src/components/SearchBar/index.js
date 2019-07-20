'use strict'
import Button from '../Button'

class SearchBar {
    constructor(func) {
        this.search = func
    }

    searchButton = new Button('search')
    searchResults = []

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