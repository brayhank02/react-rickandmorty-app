import React from 'react'
import PropTypes from 'prop-types'

const GifGridItem = ({ title, url, species }) => {

    return (
        <div className="card">
            <img src={url} alt={title} />
            <div>
                <h2>{title}</h2>
                <p>{species}</p>
            </div>
            
            
           
        </div>
    )
}

GifGridItem.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default GifGridItem
