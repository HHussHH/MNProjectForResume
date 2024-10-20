import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'widgets/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: StoryFn) => {
    document.body.className = theme;
    return (
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent />
            </div>
        </ThemeProvider>
    );
};
