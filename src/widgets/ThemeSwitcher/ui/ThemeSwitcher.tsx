import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import DarkThemeIcon from 'shared/assets/icons/DarkThemeIcon.svg';
import NormalThemeIcon from 'shared/assets/icons/NormalThemeIcon.svg';
import { Theme, useTheme } from 'widgets/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={toggleTheme}
            className={classNames('', {}, [className])}
        >

            {theme === Theme.LIGHT ? <NormalThemeIcon /> : <DarkThemeIcon />}
        </Button>
    );
};
