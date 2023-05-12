import { Outlet } from 'react-router-dom';

import ProductActions from '../components/ProductActions';

console.log(typeof(Outlet))

function PageLayout() {
  return (
    <>
      <ProductActions />
      <Outlet />
    </>
  );
}

export default PageLayout;