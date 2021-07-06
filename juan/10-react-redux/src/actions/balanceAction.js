import { AGREGAR_DINERO } from "../types/types";

export const sumarBalance=()=>{
    return {
        type: AGREGAR_DINERO,
            payload:{
                monto:10,
                mensaje: 'Agregando 10 luquitas'
            }
    };
};