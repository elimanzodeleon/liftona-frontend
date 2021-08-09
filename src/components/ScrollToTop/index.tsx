import { useEffect } from 'react';
import { useLocation, useRouteMatch } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return <></>;
};

export default ScrollToTop;
