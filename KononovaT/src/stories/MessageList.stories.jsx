import React from 'react';
import MessageList from '../components/MessageList';

export default {
    title: 'Chats/Components',
    component: MessageList,
};

const Template = args => <MessageList {...args} />;

export const Base = Template.bind({});
Base.args = {
    messages: [{ id: 1, author: 'Pog', message: 'Hello Storybook' }],
    activeMessages: [],
};