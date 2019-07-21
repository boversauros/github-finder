'use strict'
import githubApi from '../github-api'

const logic = {
    search(text, type = 1) {
        const searchType = type === 1 ? githubApi.searchUsers : githubApi.searchRepos
        return searchType(text)
            .then(({ data: { items } }) => items)
            // TODO: Throw error on new versions
            .catch(err => {
                throw Error(err.message)
            })
    }
}

export default logic