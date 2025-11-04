import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/ClickButton',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Интерактивная кнопка с вариантами оформления, размерами и состояниями. Поддерживает все стандартные типы кнопок.',
            },
        },
        layout: 'centered',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger'],
            description: 'Цветовая схема кнопки',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'Габаритный размер',
        },
        disabled: {
            control: 'boolean',
            description: 'Блокировка взаимодействия',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'HTML-тип элемента',
        },
        onClick: { action: 'button clicked' },
        children: {
            control: 'text',
            description: 'Текст на кнопке',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Подтвердить',
        onClick: action('button clicked'),
    },
};

export const Alternative: Story = {
    args: {
        variant: 'secondary',
        size: 'md',
        children: 'Отмена',
        onClick: action('button clicked'),
    },
};

export const Warning: Story = {
    args: {
        variant: 'danger',
        size: 'md',
        children: 'Удалить',
        onClick: action('button clicked'),
    },
};

export const Inactive: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Неактивно',
        disabled: true,
        onClick: action('button clicked'),
    },
};

export const Compact: Story = {
    args: {
        variant: 'primary',
        size: 'sm',
        children: 'Маленькая',
        onClick: action('button clicked'),
    },
};

export const Expanded: Story = {
    args: {
        variant: 'primary',
        size: 'lg',
        children: 'Большая кнопка',
        onClick: action('button clicked'),
    },
};

export const SubmitAction: Story = {
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Отправить форму',
        type: 'submit',
        onClick: action('button clicked'),
    },
};