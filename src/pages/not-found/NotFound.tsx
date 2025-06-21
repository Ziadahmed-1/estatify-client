import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router';
import Styles from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div className={Styles.notFoundPage}>
      <p className={Styles.title}>404 Page Not Found</p>
      <p className={Styles.subTitle}> Sorry, we couldn't find the page you're looking for.</p>
      <Button size={'lg'} onClick={() => navigate('/')}>
        Return to website
      </Button>
    </div>
  );
}

export default NotFound;
