import { useEffect, useState } from 'react'
import getApi from '../helpers/getApi';
import PropTypes from 'prop-types'

const useFetchApi = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getApi(category)
            .then((response) => {
                setState({
                    data: response,
                    loading: false,
                })
            })
            .catch((error) => {
                console.warn(error)
            })
    }, [category])

    return state;
}


useFetchApi.propTypes = {
    category: PropTypes.string,
}

export default useFetchApi
