import { I18nextProvider } from 'react-i18next';
import i18n from 'shared/config/i18n/i18n';

import { StoryFn } from '@storybook/react';
import { Suspense } from 'react';

export const TranslationDecorator = (StoryComponent: StoryFn) => (
    <Suspense fallback="">
        <I18nextProvider i18n={i18n}>
            <StoryComponent />
        </I18nextProvider>
    </Suspense>
);
