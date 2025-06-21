import AuthWatcher from '@/components/AuthWatcher';
import { Outlet } from 'react-router';

function MainLayout() {
  return (
    <div>
      <AuthWatcher />
      <Outlet />
    </div>
  );
}

export default MainLayout;
