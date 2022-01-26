import { proxy } from "valtio";

export const initialFilters = {
    filters: {},
    tablePage: 0,
    rowsPerPage: 10
}

export const costosStates = proxy({
    items: [],
    filtered_items: [],
    rubros: [],
    ...initialFilters
})

const tableFilters = {
    category: 'category',
    search: 'search',
}

export const resetPage = () => {
    costosStates.tablePage = 0;
}

export const handleCategoryChange = (items) => {
    costosStates.filtered_items = items.filter(item => {
        return item.category.id === costosStates.filters.category
    })
}

export const parseUrlQueriesToState = (query) => {
    const dataParser = {
        rowsPerPage: parseInt(query.rowsPerPage),
        tablePage: parseInt(query.tablePage),
        search: query.search,
        category: parseInt(query.category)
    }

    for (let q in query) {
        if (tableFilters[q]) {
            costosStates.filters[q] = dataParser[q]
        } else {
            costosStates[q] = dataParser[q]
        }
    }
}

