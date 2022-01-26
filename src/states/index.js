import { proxy } from "valtio";
import { COSTOS_STATES } from "./costos";
import { RUBROS_STATES } from "./rubros";

export const globalStates = proxy({
    COSTOS: COSTOS_STATES,
    RUBROS: RUBROS_STATES
})