import axiosInstance from '../axios';

export function login(email: string, password: string) {
  return axiosInstance
    .post('/auth/login', { email, password })
    .then(res => res.data as { access_token: string })
    .catch(err => {
      throw new Error(err?.response?.data?.message);
    });
}

export function register(name: string, email: string, password: string) {
  return axiosInstance
    .post('/auth/register', { name, email, password })
    .then(res => {
      console.log('succ:', res.data);
      return res.data;
    })
    .catch(err => {
      throw new Error(err.response.data.message);
    });
}
