'use strict'

import './index.scss'

function Card({ user, img }) {
    const card = document.createElement('article')
    //create media card
    const user_img = document.createElement('img')
    user_img.setAttribute('src', img)
    user_img.setAttribute('alt', `${user} avatar github image`)
    //create info card
    const div = document.createElement('div')
    div.classList.add('user-card__info')
    const title = document.createElement('p')
    title.classList.add('user-card__title')
    div.appendChild(title)
    title.innerHTML = user

    // add elements
    card.appendChild(user_img)
    card.appendChild(div)
    card.classList.add('user-card')
    return card
}

export default Card