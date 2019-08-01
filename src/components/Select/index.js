'use strict'

function Select(options) {
    if (typeof options !== 'object') throw Error(`${options} is not an Array `)
    if (options.length === 0) throw Error('Options array is empty')

    const select = document.createElement('select')
    options.forEach(({ value, text }) => {
        let option = document.createElement('option')
        option.value = value
        option.text = text
        select.appendChild(option)
    })
    return select
}

export default Select