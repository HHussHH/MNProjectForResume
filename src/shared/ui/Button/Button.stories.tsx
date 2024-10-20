import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'widgets/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Text',
    disabled: true,
    theme: ButtonTheme.OUTLINE,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR,
};

export const Clear_Inverted = Template.bind({});
Clear_Inverted.args = {
    children: 'Text',
    theme: ButtonTheme.CLEAR_INVERTED,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND,
};

export const BACKGROUND_INVERTE_Dark = Template.bind({});
BACKGROUND_INVERTE_Dark.args = {
    children: 'Text',
    theme: ButtonTheme.BACKGROUND_INVERTED,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.M,
};

export const Square_L = Template.bind({});
Square_L.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.L,
};

export const Square_XL = Template.bind({});
Square_XL.args = {
    children: '>',
    theme: ButtonTheme.BACKGROUND,
    square: true,
    size: ButtonSize.XL,
};
