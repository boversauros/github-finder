'use strict'

import SearchBar from './components/SearchBar'
import logic from './logic'

//create app element
const app = document.querySelector('#app')

//create logic search function
const searchGit = () => {
    const searchInput = document.querySelector('#search')
    logic.search(searchInput.value)
        .then(res => {
            console.log(res)
        })
}

const test = () => {
    console.log('hello test')
}

// add new search bar
const searchBar = new SearchBar(searchGit)
const finder = searchBar.render()
app.appendChild(finder)