import './index.scss'

class Button {
    render() {
        const button = document.createElement('button')
        button.classList.add('button')
        return button
    }
}

export default Button