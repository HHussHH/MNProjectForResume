import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'widgets/ThemeProvider';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet,consectetur adipisicing elit.'
        + ' Aliquam amet aperiam dolore esse fugit maxime quaerat quis sapiente voluptas. Reiciendis!',
};

export const Primary__DARK = Template.bind({});
Primary__DARK.args = {
    isOpen: true,
    children: ' Lorem ipsum dolor sit amet,consectetur adipisicing elit.'
        + ' Aliquam amet aperiam dolore esse fugit maxime quaerat quis sapiente voluptas. Reiciendis!',
};
Primary__DARK.decorators = [ThemeDecorator(Theme.DARK)];
