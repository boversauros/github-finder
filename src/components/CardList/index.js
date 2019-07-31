'use strict'

import Card from '../Card'
import './index.scss'

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

        userList = document.createElement('section')
        userList.classList.add('user-list')
        console.log(this.list)
        this.list.forEach(({ login, avatar_url }) => {
            let card = new Card({user: login, img: avatar_url })
            userList.appendChild(card)
        })

        return userList
    }
}

export default CardList