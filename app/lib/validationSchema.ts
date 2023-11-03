import * as Yup from 'yup';

export const validationSchema = Yup.object({
  id: Yup.string()
    .min(3, 'El id debe ser de 3 a 10 caracteres')
    .max(10, 'El id debe ser de 3 a 10 caracteres')
    .required('El id es requerido'),
  name: Yup.string()
    .required('El nombre del producto es requerido')
    .min(5, 'El nombre debe ser de 5 a 100 caracteres')
    .max(100, 'El nombre debe ser de 5 a 100 caracteres'),
  description: Yup.string()
    .required('La descripción del producto es requerida')
    .min(10, 'La descripción debe ser de 10 a 200 caracteres')
    .max(200, 'La descripción debe ser de 10 a 200 caracteres'),
  logo: Yup.string()
    .url('Debe ser una URL válida')
    .required('El logo es requerido'),
  date_release: Yup.date()
    .required('La fecha de lanzamiento es requerida')
    .min(
      new Date(),
      'La fecha de lanzamiento debe ser mayor a la fecha actual',
    ),
});
