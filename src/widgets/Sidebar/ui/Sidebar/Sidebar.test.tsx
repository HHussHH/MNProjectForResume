import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Render test', () => {
    test('with only first param', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle test', () => {
        const SidebarWithTranslation = withTranslation()(Sidebar);
        componentRender(<SidebarWithTranslation />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
