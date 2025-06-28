import axiosInstance from '../axios';

export function getNotifications() {
  return axiosInstance
    .get('/notifications')
    .then(res => res.data)
    .catch(err => {
      throw new Error(err?.response?.data?.message);
    });
}
export function markNotificationAsRead(id: number) {
  return axiosInstance
    .patch(`/notifications/${id}/read`)
    .then(res => res.data)
    .catch(err => {
      throw new Error(err?.response?.data?.message);
    });
}
