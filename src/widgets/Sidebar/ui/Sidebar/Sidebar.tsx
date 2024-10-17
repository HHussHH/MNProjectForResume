import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import MainIcon from 'shared/assets/icons/MainIcon.svg';
import AboutIcon from 'shared/assets/icons/AboutIcon.svg';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onToggle}
                className={cls.collapsedBtn}
                square
                size={ButtonSize.XL}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>

                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.MAIN}>
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('Главная')}
                    </span>
                </AppLink>

                <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.ABOUT}>
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>
            <div className={classNames(
                cls.swithers,
                { [cls.swithersCollapsed]: collapsed },
                [],
            )}
            >
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
