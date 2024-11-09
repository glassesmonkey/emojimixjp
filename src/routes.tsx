import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import MediaCoverage from './pages/MediaCoverage';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

console.log("🛣️ Routes - Creating router configuration");

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'media',
        element: <MediaCoverage />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
    ],
  },
]); 