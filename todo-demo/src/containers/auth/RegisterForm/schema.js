import { object, string } from 'yup';

export default object().shape({
  email: string().email('Email is not correct.'),
  fullname: string().required('Fullname is required'),
  username: string().required('Username is required'),
  password: string().required('Password is required')
});
