import {create} from 'apisauce';

export const productInstance = create({
  baseURL:
    'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipf-msa-productosfinancieros',
  headers: {
    'Content-Type': 'application/json',
    authorId: 'arielscc',
  },
});
