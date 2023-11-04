import {Product} from '../../services/types';

export type ProductActions =
  | {type: 'setProducts'; payload: Product[]}
  | {type: 'addProduct'; payload: Product}
  | {type: 'updateProduct'; payload: Product}
  | {type: 'deleteProduct'; payload: string}
  | {type: 'setProduct'; payload: Product | undefined}
  | {type: 'getProduct'; payload: string};
