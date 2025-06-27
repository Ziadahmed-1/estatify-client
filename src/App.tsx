// src/App.tsx
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import NotFound from './pages/not-found/NotFound';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import { Toaster } from 'react-hot-toast';
import MainLayout from './pages/MainLayout';
import Home from './pages/Home';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-center" toastOptions={{ duration: 3000 }} />

      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected routes with layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<div>dashboard</div>} />
        </Route>

        {/* Catch all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
