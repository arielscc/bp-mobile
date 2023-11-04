import {Product} from '../../services/types';
import {ProductsState} from '../provider/ContextProvider';
import {ProductActions} from './types';

export const productsReducer = (
  state: ProductsState,
  action: ProductActions,
): ProductsState => {
  const actionMap: any = {
    setProducts: (state: ProductsState, action: ProductActions) => ({
      ...state,
      products: action.payload,
    }),

    addProduct: (state: ProductsState, action: ProductActions) => ({
      ...state,
      products: [action.payload, ...state.products],
    }),

    updateProduct: (state: ProductsState, action: {payload: Product}) => ({
      ...state,
      products: state.products.map(product =>
        product.id === action.payload.id ? action.payload : product,
      ),
      currentProduct: action.payload,
    }),

    deleteProduct: (state: ProductsState, action: ProductActions) => ({
      ...state,
      products: state.products.filter(product => product.id !== action.payload),
    }),

    getProduct: (state: ProductsState, action: ProductActions) => ({
      ...state,
      currentProduct: state.products.find(
        product => product.id === action.payload,
      ) as Product,
    }),

    setProduct: (state: ProductsState, action: ProductActions) => ({
      ...state,
      currentProduct: action.payload,
    }),
  };
  const handler = actionMap[action.type];

  return handler ? handler(state, action) : state;
};
