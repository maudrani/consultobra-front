export const ROUTE_NAMES = {
    HOME: '/home',
    ANALISIS_COSTOS: '/analisis-costos'
}

export const ROUTE_TYPES = {
    APP: 'APP',
    NORMAL: 'NORMAL'
}

export const GET_ROUTE_TYPE = ({
    [ROUTE_NAMES.HOME]: ROUTE_TYPES.NORMAL,
    [ROUTE_NAMES.ANALISIS_COSTOS]: ROUTE_TYPES.APP
})