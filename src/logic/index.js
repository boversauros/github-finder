'use strict'
import githubApi from '../github-api'

const logic = {
    search(text, type = 1) {
        const searchType = type === 1 ? githubApi.searchUsers : githubApi.searchRepos
        searchType(text)
            .then(res => console.log('logic', res))
    }
}

export default logic