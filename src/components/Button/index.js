import './index.scss'

function Button(name) {
    this.buttonName = name
    const button = document.createElement('button')
    button.classList.add('button')
    button.innerHTML = this.buttonName
    return button
}

export default Button