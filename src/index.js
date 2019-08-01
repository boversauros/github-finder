'use strict'
import logic from './logic'

// compo
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'

// styles
import './assets/scss/app.scss'

//create app element
const app = document.querySelector('#app')

//create logic search function
const searchGit = () => {
    const searchInput = document.querySelector('#search')
    if (searchInput.value.length === 0) {
        const cardList = new CardList([])
        return cardList.render()
    }

    logic.search(searchInput.value)
        .then(res => {
            const cardList = new CardList(res)
            const userList = cardList.render()
            app.appendChild(userList)
        })
        .catch(error => {
            console.error(error.message)
        })
}

// add new search bar
const searchBar = new SearchBar(searchGit)
const finder = searchBar.render()
app.appendChild(finder)