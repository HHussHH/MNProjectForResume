import { FC, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from 'widgets/PageLoader/PageLoader';
import { routeConfig } from '../config/routeConfig';

export const AppRouter: FC = () => (
    <Suspense fallback={<PageLoader />}>
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={<div className="page-wrapper">{element}</div>}
                    path={path}
                />
            ))}
        </Routes>
    </Suspense>
);
