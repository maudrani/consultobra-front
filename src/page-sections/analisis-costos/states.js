import { proxy } from "valtio";
import { isEmpty } from "lodash";
import { compareTwoStrings } from 'string-similarity'

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

const stringForPairing = string => string.toLowerCase().trim().normalize("NFD").replace(/\p{Diacritic}/gu, "")

const querySearch = (item, query) => {
    if (!query.search) return true
    if (query.search === initialFilters.search) return true

    const searchByInclude = stringForPairing(item.name).includes(stringForPairing(query.search))

    const searchByProx = (prox) => compareTwoStrings(item.name, query.search) > prox

    return searchByInclude || searchByProx(0.12)
}

const itemMatches = {
    search: querySearch,
    category: queryCategory,
}


export const filterItemsByQuery = (items, query) => {
    if (isEmpty(query) || items.length === 0) return items

    let filteredItems = items.filter(item => {
        return (itemMatches.search(item, query) && itemMatches.category(item, query))
    })


    if (query.search) {
        filteredItems.sort((a, b) => {
            let maxLength = a.name.length > b.name.length ? a.name.length : b.name.length

            const filledString = str => str.padEnd(maxLength, '?')

            if(stringForPairing(a.name[0]) === stringForPairing(query.search[0])) {
                return -1
            } 

            if(stringForPairing(b.name[0]) === stringForPairing(query.search[0])) {
                return 1
            } 
 

            const proximityOf = str => compareTwoStrings(stringForPairing(filledString(str)), stringForPairing(query.search))

            return proximityOf(a.name) > proximityOf(b.name) ? -1 : 1
        })
    }

    return filteredItems
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