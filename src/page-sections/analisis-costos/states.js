import { proxy, subscribe } from "valtio";

export const initialFilters = {
    tablePage: 0,
    rowsPerPage: 10,
    category: 99
}

export const resetPage = () => {
    costosStates.filters.tablePage = 0;
}

export const costosStates = proxy({
    items: [],
    filtered_items: [],
    rubros: [],
    filters: initialFilters,
    queryString: '',
    resetPage
})

export const handleCategoryChange = () =>
    subscribe(costosStates.filters, () => costosStates.filtered_items = costosStates.items.filter(item => {
        return item.category.id === costosStates.filters.category
    }))


export const parseUrlQueriesToState = (query) => {
    const dataParser = {
        rowsPerPage: parseInt(query.rowsPerPage),
        tablePage: parseInt(query.tablePage),
        search: query.search,
        category: parseInt(query.category)
    }

    for (let q in query) {
        costosStates.filters[q] = dataParser[q]
    }
}