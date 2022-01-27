import { proxy, subscribe } from "valtio";
import { isEmpty } from "lodash";

export const initialFilters = {
    category: 99,
    search: ''
}

export const initialTableValues = {
    tablePage: 0,
    rowsPerPage: 10,
}

export const resetPage = () => {
    costosStates.tableValues.tablePage = 0;
}

export const costosStates = proxy({
    items: [],
    filtered_items: [],
    rubros: [],
    filters: initialFilters,
    tableValues: initialTableValues,
    resetPage
})


const proxyCategory = (item) => {
    if (costosStates.filters.category === initialFilters.category) return true
    return item.category.id === costosStates.filters.category
}
const proxySearch = (item) => {
    if (costosStates.filters.search === initialFilters.search) return true
    if (!item.name || !costosStates.filters.search) return true
    const stringForPairing = string => string.toLowerCase().trim()
    return stringForPairing(item.name).includes(stringForPairing(costosStates.filters.search))
}

const queryCategory = (item, query) => {
    if (!query.category) return true
    if (parseInt(query.category) === initialFilters.category) return true
    return item.category.id === parseInt(query.category)
}
const querySearch = (item, query) => {
    if (!query.search) return true
    if (query.search === initialFilters.search) return true
    const stringForPairing = string => string.toLowerCase().trim()
    return stringForPairing(item.name).includes(stringForPairing(query.search))
}

const itemMatches = {
    proxySearch: proxySearch,
    proxyCategory: proxyCategory,
    querySearch: querySearch,
    queryCategory: queryCategory,
}


export const handleFilters = () =>
    subscribe(costosStates.filters, () => costosStates.filtered_items = costosStates.items.filter(item => {
        costosStates.resetPage()
        return (itemMatches.proxyCategory(item) && itemMatches.proxySearch(item))
    }))

export const filterITemsByQuery = (items, query) => {
    if (isEmpty(query)) return items

    return items.filter(item => {
        return (itemMatches.queryCategory(item, query) && itemMatches.querySearch(item, query))
    })
}

export const parseUrlQueriesToState = (query) => {
    let parsedQuery = {
        filters: {
            search: query.search,
            category: parseInt(query.category)
        },
        tableValues: {
            rowsPerPage: parseInt(query.rowsPerPage),
            tablePage: parseInt(query.tablePage),
        }
    }

    const deleteUndefinedKeys = (group) => {
        for (let q in parsedQuery[group]) {
            if (!parsedQuery[group][q]) delete parsedQuery[group][q]
        }
    }

    deleteUndefinedKeys('filters')
    deleteUndefinedKeys('tableValues')

    costosStates.filters = { ...costosStates.filters, ...parsedQuery.filters }
    costosStates.tableValues = { ...costosStates.tableValues, ...parsedQuery.tableValues }
}