import { useEffect } from 'react';
import { isTokenValid, removeToken } from '@/utils/authWatcher';

const AuthWatcher = () => {
  useEffect(() => {
    const checkToken = () => {
      const valid = isTokenValid();
      if (!valid) {
        console.warn('Token expired. Logging out...');
        //removeToken();
        //window.location.href = '/login'; // Or use navigate() if inside router
      }
    };

    // ✅ Fire immediately
    checkToken();

    // 🔁 Then every 1 minute
    const interval = setInterval(checkToken, 60_000);

    return () => clearInterval(interval);
  }, []);

  return null; // no UI needed
};

export default AuthWatcher;
