import Button from '../Button'
import githubApi from '../../github-api'

// add button
const button = new Button
const SearchButton = button.render()
SearchButton.innerHTML = 'search'

class SearchBar {
    searchButton = SearchButton

    search() {
        const searchInput = document.querySelector('#search')
        githubApi.searchUsers(searchInput.value)
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