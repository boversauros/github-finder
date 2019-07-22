'use strict'

import Card from '../Card'

class CardList {
    constructor(userList) {
        this.list = userList
    }

    render() {
        let userList
        if (document.querySelector('.userList')) {
            const userList = document.querySelector('.userList')
            userList.parentNode.removeChild(userList)
        }

        userList = document.createElement('div')
        userList.classList.add('userList')

        this.list.forEach(({ login }) => {
            let card = new Card(login)
            userList.appendChild(card)
        })

        return userList
    }
}

export default CardList