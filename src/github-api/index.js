'use strict'
const axios = require('axios')

const githubApi = {
    url: 'https://api.github.com',

    searchUsers(query) {
        return axios.get(`${this.url}/search/users?q=${query}`)
            .then(res => res)
    },

    searchRepos(query) {
        return axios.get(`${this.url}/search/repositories?q=${query}`)
            .then(res => res)
    },

    getUser(username) {
        return axios.get(`${this.url}/users/${username}`)
            .then(res => res)
    },

    getUserRepos(username) {
        return axios.get(`${this.url}/users/${username}/repos`)
            .then(res => res)
    }
}

const { searchUsers, searchRepos, getUser, getUserRepos } = githubApi

githubApi.searchUsers = searchUsers.bind(githubApi)
githubApi.searchRepos = searchRepos.bind(githubApi)
githubApi.getUser = getUser.bind(githubApi)
githubApi.getUserRepos = getUserRepos.bind(githubApi)

export default githubApi