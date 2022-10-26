import { useRouteError } from 'react-router-dom';

import MainNavigation from '../components/navbar/MainNavigation';

function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <MainNavigation />
      <main id="centered">
        <h1>Sección en construcción</h1>
        <p>{error.message}</p>
      </main>
    </>
  );
}

export default ErrorPage;