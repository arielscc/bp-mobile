import React, {FC, createContext, useReducer} from 'react';
import {Product} from '../../services/types';
import {productsReducer} from '../reducer/ProductsReducer';

export interface ProductsState {
  products: Product[];
  currentProduct: Product | undefined;
}

export const productsInitialState: ProductsState = {
  products: [],
  currentProduct: undefined,
};

export interface ProductContextProps {
  productsState: ProductsState;
  setProducts: (products: Product[]) => void;
  addProduct: (product: Product) => void;
  updateProduct: (product: Product) => void;
  deleteProduct: (productId: string) => void;

  setProduct: (product?: Product) => void;
  getProduct: (productId: string) => void;
}

export const ProductsContext = createContext({} as ProductContextProps);
ProductsContext.displayName = 'ProductsContext';

export const ProductsProvider: FC<{
  children: React.ReactNode;
}> = ({children}) => {
  const [productsState, dispatch] = useReducer(
    productsReducer,
    productsInitialState,
  );

  const setProducts = (products: Product[]) => {
    dispatch({type: 'setProducts', payload: products});
  };

  const addProduct = (product: Product) => {
    dispatch({type: 'addProduct', payload: product});
  };

  const updateProduct = (product: Product) => {
    dispatch({type: 'updateProduct', payload: product});
  };

  const deleteProduct = (productId: string) => {
    dispatch({type: 'deleteProduct', payload: productId});
  };

  //
  const setProduct = (product?: Product) => {
    dispatch({type: 'setProduct', payload: product});
  };

  const getProduct = (productId: string) => {
    dispatch({type: 'getProduct', payload: productId});
  };

  return (
    <ProductsContext.Provider
      value={{
        productsState,
        setProducts,
        addProduct,
        deleteProduct,
        updateProduct,
        setProduct,
        getProduct,
      }}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  const ctx = React.useContext(ProductsContext);
  if (!ctx) {
    throw new Error(
      'useProductsContext must be used within a ProductsProvider',
    );
  }
  return {
    products: ctx.productsState.products,
    setProducts: ctx.setProducts,
    getProduct: ctx.getProduct,
    deleteProduct: ctx.deleteProduct,
    updateProduct: ctx.updateProduct,
    addProduct: ctx.addProduct,
    setProduct: ctx.setProduct,
    product: ctx.productsState.currentProduct,
  };
};
