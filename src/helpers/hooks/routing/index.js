export const generateUrlQuery = (query = {}, initialValues = {}) => {
    let queryString = '?'

    for (let q in query) {
        if (query[q] !== initialValues[q])
            queryString += `${q}=${query[q]}&`
    }

    return queryString.slice(0, -1)
}

export const generateShallowQuery = (route, query) => (
    {
        pathname: route,
        query: generateUrlQuery(query)
    },
    undefined, { shallow: true }
)