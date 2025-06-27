import axiosInstance from '../axios';

export function getProperties(page: number = 1, count: number = 10) {
  return axiosInstance
    .get('/property?page=' + page + '&count=' + count)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err?.response?.data?.message);
    });
}
