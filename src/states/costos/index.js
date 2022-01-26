import { Api, ApiRoutes } from "api";

const isItemActive = isActive => {
    const parser = { SI: true, NO: false }
    return !!parser[isActive.toUpperCase()]
}

const parseItem = (item) => ({
    id: item.Id,
    active: isItemActive(item.Activo),
    name: item.Nombre,
    comment: item.Comentario,
    unit: item.Unidad,
    category: {
        name: item.Nombre_Rubro || '',
        id: item.RubroId
    },
    values: {
        materials: item.Materiales,
        manufacture: item.Obreros,
        social_charges: item.Cargas_sociales,
        tools: item.Herramental
    },
})

const getItemsCostos = async () => {
    const { items } = await Api('get', ApiRoutes.ITEMS_COSTOS)
    return await items.map(item => parseItem(item))
}

const getItemsByRubro = async (idRubro) => {
    const { items } = await Api('get', ApiRoutes.BUSCAR_ITEMS_RUBRO, { idRubro })
    return await items.map(item => parseItem(item))
}

export const COSTOS_STATES = {
    getItemsCostos,
    getItemsByRubro
}