'use strict'

import Card from '../Card'

class CardList {
    constructor(userList) {
        this.list = userList
    }

    container = document.createElement('div')

    render() {
        this.list.forEach(({ login }) => {
            let card = new Card(login)
            this.container.appendChild(card)
        })

        return this.container
    }
}

export default CardList