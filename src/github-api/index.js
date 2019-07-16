'use strict'
const axios = require('axios')

const githubApi = {
    url: 'https://api.github.com',

    searchUsers(query) {
        axios.get(`${this.url}/search/users?q=${query}`)
            .then(res => {
                console.log(res)
            })
    },

    searchRepos(query) {
        axios.get(`${this.url}/search/repositories?q=${query}`)
            .then(res => {
                console.log(res)
            })
    },

    getUser(username) {
        axios.get(`${this.url}/users/${username}`)
            .then(res => {
                console.log(res)
            })
    },

    getUserRepos(username) {
        axios.get(`${this.url}/users/${username}/repos`)
            .then(res => {
                console.log(res)
            })
    }
}

export default githubApi