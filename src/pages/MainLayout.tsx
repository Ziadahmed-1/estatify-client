import AuthWatcher from '@/components/AuthWatcher';
import { useUIStore } from '@/zustand/UIStore';
import { useEffect } from 'react';
import { Outlet } from 'react-router';

function MainLayout() {
  const setWidth = useUIStore(state => state.setWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(window.innerWidth);

    updateWidth(); // set initial width
    window.addEventListener('resize', updateWidth);

    return () => window.removeEventListener('resize', updateWidth);
  }, [setWidth]);

  return (
    <div>
      <AuthWatcher />
      <Outlet />
    </div>
  );
}

export default MainLayout;
