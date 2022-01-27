export const generateUrlQuery = (query = {}, initialValues = {}) => {
    let queryString = '?'

    for (let q in query) {
        if (query[q] !== initialValues[q])
            queryString += `${q}=${query[q]}&`
    }

    return queryString.slice(0, -1)
}

export const compareQueries = (newQuery, oldQuery) => {
    if (!oldQuery) {
        return newQuery
    }

    let parsedQuery = {}

    const parsedString = string => parseInt(string) || string

    for (let q in newQuery) {
        if (parsedString(newQuery[q]) != parsedString(oldQuery[q])) {
            parsedQuery[q] = parsedString(newQuery[q])
        }
    }

    return parsedQuery
}

export const pushShallowQuery = (router, newQuery, oldQuery) => {
    const parsedQuery = compareQueries(newQuery, oldQuery)

    router.push({ query: { ...parsedQuery } }, undefined, { shallow: true })
}

export const pushShallowQueries = ({ Router, newValues, initialValues }) => {
    Router.push(generateUrlQuery(newValues, initialValues), undefined, { shallow: true })
}