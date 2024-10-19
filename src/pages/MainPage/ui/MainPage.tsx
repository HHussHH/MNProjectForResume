import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';
import { Input } from 'shared/Input/Input';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная страница')}

        </div>
    );
};

export default MainPage;
