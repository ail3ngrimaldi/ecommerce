import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import './App.css';
import RootLayout from './pages/RootLayout';
import PageLayout from './pages/PageLayout';
import Products from './pages/Products';
import WelcomePage from './pages/WelcomePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="shop" element={<Products />}>
        {/* <Route index element={<BlogPostsPage />} loader={blogPostsLoader} /> */}
        {/* <Route
          path=":id"
          element={<PostDetailPage />}
          loader={blogPostLoader}
        /> */}
      </Route>
      {/* <Route
        path="/blog/new"
        element={<NewPostPage />}
        action={newPostAction}
      /> */}
    </Route>
  )
);


function App() {
    return <RouterProvider router={router} />;
}

export default App;
