import Produto from "../../models/Produto";
import { Action } from "./Action";

export interface TokenState {
  token: string;
  id: string;

  produtos: Array<Produto>;
}

const initialState = {
  token: "",
  id: "",
  produtos: [],
};

export const tokenReducer = (
  state: TokenState = initialState,
  action: Action
) => {
  switch (action.type) {
    case "ADD_TOKEN": {
      return { ...state, token: action.payload };
    }
    case "ADD_ID": {
      return { ...state, id: action.payload };
    }
    case "ADD_TO_CART": {
      return {
        ...state,
        produtos: [...state.produtos, action.payload],
      };
    }
    case "REMOVE_ITEM": {
      return {
        ...state,
        produtos: [],
      };
    }
    case "REMOVE_TO_CART": {
      return {
        ...state,
        produtos: [...state.produtos.filter((item)=> item !== action.payload)],
      };
    }

    default:
      return state;
  }
};
