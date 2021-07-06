//import {Action} from "redux";

import { AGREGAR_DINERO, MODIFICAR_MENSAJE, RESTAR_DINERO } from "../types/types";

/**
 {
     balance: 0,
     mensaje:""
 }
 */

export const balanceReducer = (state = { balance:0, mensaje:''}, action) => {
  switch (action.type) {
    case AGREGAR_DINERO:
      return {
        balance: state.balance + action.payload.monto,
        mensaje: action.payload.mensaje,
      };
      case RESTAR_DINERO:
        return {
          balance: state.balance - action.payload.monto,
          mensaje: action.payload.mensaje,
        };

        case MODIFICAR_MENSAJE:
            return {
             //balance: state.balance,
             ...state,
              mensaje: action.payload.mensaje
            };
      //en el caso de que ninguna action coincida con un ation
      //específico, se retornará al estado
      default:
          return state;
  }
};
