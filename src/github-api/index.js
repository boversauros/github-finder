'use strict'
const axios = require('axios')

const githubApi = {
    url: 'https://api.github.com',

    searchUsers(text) {
        axios.get(`${this.url}/search/users?q=${text}`)
            .then(res => {
                console.log(res)
            })
    }
}

export default githubApi