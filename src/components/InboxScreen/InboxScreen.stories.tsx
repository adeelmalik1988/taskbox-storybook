import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react'
import { PureInboxScreen, PureInboxScreenProps } from './InboxScreen'
import * as TaskListStories from '../TaskList/TaskList.stories';
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux';
import TaskStories from '../Task/Task.stories';
//import store from '../../lib/store'


const store = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args?.tasks,
        }
    },
    subscribe: () => 0,
    dispatch: action('dispatch')
}


export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store} >
        { story() }
    </Provider>]
} as Meta

const Template: Story<PureInboxScreenProps> = (args) => <PureInboxScreen {...args} />

export const Default = Template.bind({});
Default.args = {
    err: null as any
}

export const Error = Template.bind({})
Error.args = {
    err: 'Something'
}   