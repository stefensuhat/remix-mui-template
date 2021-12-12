import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required(),
  brand: yup.string().required(),
  price: yup.string().required(),
}).required();

export default schema;
