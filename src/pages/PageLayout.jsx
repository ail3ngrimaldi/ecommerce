import { Outlet } from 'react-router-dom';

import ProductActions from '../components/ProductActions';

function PageLayout() {
  return (
    <>
      <ProductActions />
      <Outlet />
    </>
  );
}

export default PageLayout;