'use strict'

function Card(name) {
    const card = document.createElement('div')
    const title = document.createElement('h1')
    title.innerHTML = name
    card.appendChild(title)
    return card
}

export default Card