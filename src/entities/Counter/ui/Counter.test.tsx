import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { screen } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
    test('with only first param', () => {
        componentRender(<Counter />, {
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    });

    test('increment', () => {
        componentRender(<Counter />, {});
        userEvent.click(screen.getByTestId('increment-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('decrement', () => {
        componentRender(<Counter />, {});
        userEvent.click(screen.getByTestId('decrement-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('-1');
    });
});
