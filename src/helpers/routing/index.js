export const generateUrlQuery = (query = {}, initialValues = {}) => {
    let queryString = '?'

    for (let q in query) {
        if (query[q] !== initialValues[q])
            queryString += `${q}=${query[q]}&`
    }

    return queryString.slice(0, -1)
}

export const pushShallowQuery = (router, query, initialQuery) => {
    if (!initialQuery) {
        router.push({ query: { ...router.query, ...query } }, undefined, { shallow: true })
        return
    }

    let parsedQuery = {}

    for (let q in query) {
        delete router.query[q]
        if (query[q] != initialQuery[q]) {
            parsedQuery[q] = query[q]
        }
    }

    router.push({ query: { ...router.query, ...parsedQuery } }, undefined, { shallow: true })
}

export const pushShallowQueries = ({ Router, newValues, initialValues }) => {
    Router.push(generateUrlQuery(newValues, initialValues), undefined, { shallow: true })
}