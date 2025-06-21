import { jwtDecode } from 'jwt-decode';

type JwtPayload = {
  exp: number; // expiration timestamp in seconds
  iat?: number;
  [key: string]: any;
};

export function getToken(): string | null {
  console.log('get token', localStorage.getItem('TOKEN_KEY'));
  return localStorage.getItem('TOKEN_KEY');
}

export function getUserFromToken(): JwtPayload | null {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded: JwtPayload = jwtDecode(token);
    console.log('Decoded token:', decoded);
    return decoded;
  } catch (err) {
    console.error('Invalid token:', err);
    return null;
  }
}
export function isTokenValid(): boolean {
  const user = getUserFromToken();
  if (!user || !user.exp) return false;

  const now = Math.floor(Date.now() / 1000); // current time in seconds
  const secondsLeft = user.exp - now;
  const minutesLeft = Math.floor(secondsLeft / 60);

  console.log(`Token valid: ${secondsLeft}s remaining (~${minutesLeft}m)`);

  return user.exp > now;
}

export function removeToken() {
  localStorage.removeItem('TOKEN_KEY');
}
