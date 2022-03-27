import React from 'react'
import PropTypes from 'prop-types'

export default function Gif({ url, title }) {
    return (
        <img className='image' src={url} alt={title} />
    )
}

Gif.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}