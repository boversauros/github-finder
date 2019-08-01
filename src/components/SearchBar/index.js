'use strict'
import Button from '../Button'
import Select from '../Select'
import './index.scss'

class SearchBar {
    constructor(func) {
        this.search = func
    }

    searchButton = new Button('search')
    searchSelect = new Select([{ text: 'users', value: 1 },{ text: 'repos', value: 2 }])

    searchResults = []

    render() {
        this.searchButton.addEventListener('click', this.search)

        const searchinput = document.createElement('input')
        searchinput.setAttribute('type', 'text')
        searchinput.setAttribute('placeholder', 'Search...')
        searchinput.setAttribute('id', 'search')


        const SearchBar = document.createElement('div')
        SearchBar.classList.add('search-bar')
        SearchBar.appendChild(searchinput)
        SearchBar.appendChild(this.searchSelect)
        SearchBar.appendChild(this.searchButton)

        return SearchBar
    }
}

export default SearchBar