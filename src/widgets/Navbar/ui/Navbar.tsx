import { FC, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/Modal/Modal';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModel = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <Button onClick={onToggleModel} theme={ButtonTheme.CLEAR_INVERTED} className={cls.links}>
                {t('Войти')}
            </Button>

            <Modal isOpen={isAuthModal} onClose={onToggleModel}>
                {t('Lorem ipsum dolor sit amet,\n'
                    + '                consectetur adipisicing elit.\n'
                    + '                Aliquam amet aperiam dolore esse\n'
                    + '                fugit maxime quaerat quis sapiente voluptas. Reiciendis!')}
            </Modal>
        </div>
    );
};
