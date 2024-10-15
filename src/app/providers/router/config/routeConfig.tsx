import { RouteProps } from 'react-router-dom';
import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const AppRoutes = {
    MAIN: 'main',
    ABOUT: 'about',
    NOT_FOUND: 'not_found',
} as const;

type AppRouteKeys = keyof typeof AppRoutes;

export const RoutePath: Record<AppRouteKeys, string> = {
    MAIN: '/',
    ABOUT: '/about',
    NOT_FOUND: '*',
};

export const routeConfig: Record<AppRouteKeys, RouteProps> = {
    MAIN: {
        path: RoutePath.MAIN,
        element: <MainPage />,
    },
    ABOUT: {
        path: RoutePath.ABOUT,
        element: <AboutPage />,
    },
    NOT_FOUND: {
        path: RoutePath.NOT_FOUND,
        element: <NotFoundPage />,
    },
};
