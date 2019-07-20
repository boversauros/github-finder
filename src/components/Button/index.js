import './index.scss'

function Button(name) {
    if (typeof name !== 'string') throw Error(`${name} is not a string `)
    const button = document.createElement('button')
    button.classList.add('button')
    button.innerHTML = name
    return button
}

export default Button