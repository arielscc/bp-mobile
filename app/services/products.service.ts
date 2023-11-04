import {ApiResponse} from 'apisauce';
import {data} from './data';
import {productInstance} from './instance';
import {Product} from './types';

export const fetchData = async (): Promise<Product[] | undefined> => {
  try {
    const products = data;
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const fetchProducts = async (): Promise<Product[] | undefined> => {
  try {
    const response: ApiResponse<Product[]> = await productInstance.get(
      '/bp/products',
    );

    if (!response.ok) {
      throw new Error(response.problem);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveProduct = async (
  product: Product,
): Promise<Product | undefined> => {
  try {
    const response: ApiResponse<Product> = await productInstance.post(
      '/bp/products',
      product,
    );

    if (!response.ok) {
      throw new Error(response.problem);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProduct = async (
  product: Product,
): Promise<Product | undefined> => {
  try {
    const response: ApiResponse<Product> = await productInstance.put(
      `/bp/products`,
      product,
    );

    if (!response.ok) {
      throw new Error(response.problem);
    }

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteProduct = async (id: string): Promise<void> => {
  try {
    const params = {id};
    const response: ApiResponse<void> = await productInstance.delete(
      `/bp/products`,
      {
        params,
      },
    );

    if (!response.ok) {
      throw new Error(response.problem);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
