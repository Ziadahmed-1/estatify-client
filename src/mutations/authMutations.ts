import { login, register } from '@/api/auth/authAPI';
import ShowOneError from '@/utils/ShowFirstError';
import type { loginData } from '@/pages/auth/Login';
import type { registerData } from '@/pages/auth/Register';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

export function authMutations() {
  const navigate = useNavigate();

  const loginMutation = useMutation<void, Error, loginData>({
    mutationKey: ['login'],
    mutationFn: data => login(data.email, data.password),
    onSuccess: res => {
      toast.success('Login successful', { id: 'login' });
      localStorage.setItem('TOKEN_KEY', res?.access_token);
      setTimeout(() => {
        navigate('/');
      }, 500);
    },
    onMutate: () => toast.loading('Logging in...', { id: 'login' }),
    onError: error => toast.error(ShowOneError(error.message), { id: 'login' }),
  });

  // const logoutMutation = useMutation({
  //   mutationKey: ['logout'],
  //   mutationFn: () => logout(),
  //   onSuccess: () => toast.success('Logout successful'),
  //   onMutate: () => toast.loading('Logging out...'),
  //   onError: error => toast.error((error as Error).message),
  // });

  const registerMutation = useMutation<void, Error, registerData>({
    mutationKey: ['register'],
    mutationFn: data => register(data.name, data.email, data.password),
    onSuccess: () => {
      toast.success('Registration successful', { id: 'register' });
      setTimeout(() => {
        navigate('/auth/login');
      }, 500);
    },
    onMutate: () => toast.loading('Registering...', { id: 'register' }),
    onError: error => {
      console.log('from toase', JSON.stringify(error));
      toast.error(ShowOneError(error.message), { id: 'register' });
    },
  });
  return {
    loginMutation,
    registerMutation,
  };
}
