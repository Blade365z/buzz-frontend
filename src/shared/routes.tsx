import React from 'react';
import Home from '../home/Home';
const About = React.lazy(() => import('../about/About'));

type Route = {
  path: string;
  element: JSX.Element;
  exact?: boolean;
  cacheExpirySeconds?: number;
  isABEnabled?: boolean;
};

type Routes = Route[];

export const paths = {
  HOME: '/',
  ABOUT: '/about',
};

export const routes: Routes = [
  {
    path: paths.HOME,
    element: <Home />,
  },
  {
    path: paths.ABOUT,
    element: <About />,
  },
];
