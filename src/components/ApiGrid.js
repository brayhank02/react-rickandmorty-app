import React from 'react'
import PropTypes from 'prop-types'
import useFetchApi from '../hooks/useFetchApi'
import ApiGridItem from '../components/ApiGridItem'

const ApiGrid = ({category}) => {

    const { data: images, loading } = useFetchApi(category)

    return (
        <>
            <h3>{ category }</h3>
            { loading && <p className="">loading...</p> }
            
            <div className="card-grid animate__animated animate__headShake">
                {
                    images.map((image) => (
                        <ApiGridItem
                            key={image.id} 
                            {...image}
                        />
                    ))
                }
            </div>
        </>
    )
}

ApiGrid.propTypes = {
    category: PropTypes.string.isRequired,
}

export default ApiGrid
