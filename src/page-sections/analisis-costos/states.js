import { proxy } from "valtio";
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
    rubros: [],
    filters: {},
    tableValues: initialTableValues,
    resetPage
})



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
    search: querySearch,
    category: queryCategory,
}

export const filterItemsByQuery = (items, query) => {
    if (isEmpty(query)) return items

    return items.filter(item => {
        return (itemMatches.search(item, query) && itemMatches.category(item, query))
    })
}

export const queryToState = (initialQuery) => {
    // Filters
    if (parseInt(initialQuery.category))
        costosStates.filters.category = parseInt(initialQuery.category)

    if (initialQuery.search)
        costosStates.filters.search = initialQuery.search

    // Table
    if (parseInt(initialQuery.tablePage))
        costosStates.tableValues.tablePage = parseInt(initialQuery.tablePage)

    if (parseInt(initialQuery.rowsPerPage))
        costosStates.tableValues.rowsPerPage = parseInt(initialQuery.rowsPerPage)
}