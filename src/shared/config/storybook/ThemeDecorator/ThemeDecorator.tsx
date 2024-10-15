import { StoryFn } from '@storybook/react';
import { Theme } from 'widgets/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => (
    <div className={`app ${theme}`}>
        <StoryComponent />
    </div>
);
