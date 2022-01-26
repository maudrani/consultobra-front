import axios from "axios";
import { MAIN_CONFIG } from "config";


export const ApiRoutes = {
    API_URL: 'https://database-test-mysql.herokuapp.com',
    ITEMS_COSTOS: '/buscarItems',
    ITEMS_RUBROS: '/buscarRubros',
    BUSCAR_ITEMS_RUBRO: '/buscarItemsPorRubro'
}

export const Api = async (action = 'get', route, params) => {
    try {
        const result = await axios[action](`${MAIN_CONFIG.API_URL}${ApiRoutes[route.toUpperCase()] || route}`, { data: params})
        const data = result.data;
        return data
    } catch (err) {
        return err
    }
}
