import '@/App.css';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { removeToken } from '@/utils/authWatcher';
import { useUIStore } from '@/zustand/UIStore';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Link, useNavigate } from 'react-router';
import Styles from './NavBar.module.css';
import logoImage from '@/assets/logo.png';
import Notifications from './Notifications';

function NavBar() {
  const isMobile = useUIStore(state => state.isMobile);
  function checkBaseUrl(url: string): boolean {
    return window.location.href.includes(url);
  }

  const navigate = useNavigate();
  const mainMenu = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      action: () => {
        navigate('/');
      },
    },

    {
      id: 2,
      name: 'Properties',
      path: '/properties',
      action: () => {
        navigate('/properties');
      },
    },
    {
      id: 3,
      name: 'Services',
      path: '/services',
      action: () => {
        navigate('/services');
      },
    },
    {
      id: 4,
      name: 'About Us',
      path: '/aboutus',
      action: () => {
        navigate('/aboutus');
      },
    },
  ];

  const userMenu = [
    {
      id: 5,
      name: 'Favorites',
      path: '/favorites',
      action: () => {
        navigate('/favorites');
      },
    },
    {
      id: 6,
      name: 'My Listings',
      path: '/mylistings',
      action: () => {
        navigate('/mylistings');
      },
    },
    {
      id: 7,
      name: 'Logout',
      path: '',
      action: () => {
        removeToken();
        navigate('/login');
      },
    },
  ];

  return (
    <nav className={Styles.navBar}>
      <div className={Styles.logoSection}>
        <img src={logoImage} alt="logo" style={{ width: '40px', height: '40px' }} />
        <span className={Styles.title}>Estatify</span>
      </div>
      {!isMobile && (
        <ul className={Styles.mainMenu}>
          {mainMenu.map(item => (
            <Link key={item.name} to={item.path}>
              <button className={checkBaseUrl(item.path) ? `glb-btn filled` : 'glb-btn'}>
                {item.name}
              </button>
            </Link>
          ))}
        </ul>
      )}
      <div className="flex gap-2 items-center">
        <Notifications />
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage className={Styles.avatar} src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {isMobile && (
              <>
                {/* <DropdownMenuLabel>Pages</DropdownMenuLabel>
              <DropdownMenuSeparator /> */}
                {mainMenu.map(item => (
                  <DropdownMenuItem key={item.name} onClick={() => item.action()}>
                    {item.name}
                  </DropdownMenuItem>
                ))}
              </>
            )}
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {userMenu.map(item => (
              <DropdownMenuItem key={item.name} onClick={() => item.action()}>
                {item.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>{' '}
      </div>
    </nav>
  );
}

export default NavBar;
