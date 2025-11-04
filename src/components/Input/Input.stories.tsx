import type { Meta, StoryObj } from '@storybook/react';
import { action } from 'storybook/actions';

import Input from './Input';

const meta: Meta<typeof Input> = {
    title: 'UI/InputField',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Текстовое поле с поддержкой валидации, подсказками и различными состояниями. Используется для ввода пользовательских данных.',
            },
        },
        layout: 'padded',
    },
    argTypes: {
        label: {
            control: 'text',
            description: 'Заголовок поля ввода',
        },
        error: {
            control: 'text',
            description: 'Сообщение об ошибке валидации',
        },
        helperText: {
            control: 'text',
            description: 'Вспомогательный текст под полем',
        },
        required: {
            control: 'boolean',
            description: 'Обязательность заполнения',
        },
        placeholder: {
            control: 'text',
            description: 'Текст-подсказка внутри поля',
        },
        value: {
            control: 'text',
            description: 'Текущее значение поля',
        },
        type: {
            control: 'select',
            options: ['text', 'password', 'email'],
            description: 'Тип вводимых данных',
        },
        onChange: { action: 'value changed' },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
    args: {
        label: 'Фамилия и имя',
        placeholder: 'Иванов Иван',
        value: '',
        onChange: action('value changed'),
    },
};

export const ValidationError: Story = {
    args: {
        label: 'Электронная почта',
        error: 'Проверьте правильность email адреса',
        value: 'invalid-email',
        onChange: action('value changed'),
    },
};

export const HintText: Story = {
    args: {
        label: 'Создайте пароль',
        helperText: 'Должен содержать цифры и специальные символы',
        type: 'password',
        value: '',
        onChange: action('value changed'),
    },
};

export const MandatoryField: Story = {
    args: {
        label: 'Номер телефона',
        required: true,
        placeholder: '+7 (999) 999-99-99',
        value: '',
        onChange: action('value changed'),
    },
};

export const EmailInput: Story = {
    args: {
        label: 'Рабочая почта',
        type: 'email',
        placeholder: 'example@company.com',
        value: '',
        onChange: action('value changed'),
    },
};