import PropTypes from 'prop-types'

const getApi = async (category) => {

    const url_api = `https://rickandmortyapi.com/api/character?name=${encodeURI(category)}`;
    const response = await fetch(url_api);
    const { results } = await response.json();

    const api = results.map(({ id, name, species, image }) => {
        return {
            id,
            title: name,
            species,
            url: image,
        }
    });

    return api;
}

getApi.propTypes = {
    category: PropTypes.string,
}

export default getApi
