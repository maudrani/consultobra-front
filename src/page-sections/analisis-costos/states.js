import { proxy, subscribe } from "valtio";

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


const handleCategory = (item) => {
    if (costosStates.filters.category === initialFilters.category) return true
    return item.category.id === costosStates.filters.category
}
const handleSearch = (item) => {
    if (costosStates.filters.search === initialFilters.search) return true
    const stringForPairing = string => string.toLowerCase().trim()
    return stringForPairing(item.name).includes(stringForPairing(costosStates.filters.search))
}

const itemMatches = {
    search: handleSearch,
    category: handleCategory
}


export const handleFilters = () =>
    subscribe(costosStates.filters, () => costosStates.filtered_items = costosStates.items.filter(item => {
        costosStates.resetPage()
        return (itemMatches.category(item) && itemMatches.search(item))
    }))

export const parseUrlQueriesToState = (query) => {
    const parsedQuery = {
        filters: {
            search: query.search,
            category: parseInt(query.category)
        },
        tableValues: {
            rowsPerPage: parseInt(query.rowsPerPage),
            tablePage: parseInt(query.tablePage),
        }
    }

    costosStates.filters = parsedQuery.filters
    costosStates.tableValues = parsedQuery.tableValues
}