import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {className?: string;}

export const Loader: FC<LoaderProps> = ({ className }) => (
    <div className={classNames('lds-ripple', {}, [className])}>
        <div />
        <div />
    </div>
);
