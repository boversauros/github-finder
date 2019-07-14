import Button from '../Button'

// add button
const button = new Button
const SearchButton = button.render()
SearchButton.innerHTML = 'search'

class SearchBar {
    searchButton = SearchButton

    search() {
        const searchInput = document.querySelector('#search')
        console.log(searchInput.value)
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