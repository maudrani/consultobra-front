import { Api, ApiRoutes } from "api";

const getRubros = async () => {
    const { rubros } = await Api('get', ApiRoutes.ITEMS_RUBROS)

    const parsedItem = (item) => ({
        id: item.Id,
        name: item.Nombre,
    })

    return await rubros.map(rubro => parsedItem(rubro))
}

export const RUBROS_STATES = {
    getRubros,
}