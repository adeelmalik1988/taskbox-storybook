import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react'
import { PureInboxScreen, PureInboxScreenProps } from './InboxScreen'
import * as TaskListStories from '../TaskList/TaskList.stories';
import { action } from '@storybook/addon-actions'
import { Provider } from 'react-redux';
import TaskStories from '../Task/Task.stories';
import store from '../../lib/store'
import { AnyAction, EnhancedStore, Store } from '@reduxjs/toolkit';
//import { AnyAction, } from 'redux';
import { TaskListProps } from '../TaskList/TaskList';
import configureStore from 'redux-mock-store' 
//import configureStore from 'redux-mock-store/dist/index-umd'
import { act } from 'react-dom/test-utils';


//const store: EnhancedStore<TaskListProps, AnyAction, [ThunkMiddleware<TaskListProps, AnyAction, null> | ThunkMiddleware<TaskListProps, AnyAction, undefined>]>
/*

const store: Store<any, AnyAction >
    = {
    getState: () => {
        return {
            tasks: TaskListStories.Default.args?.tasks,
        }
    },
    dispatch: () => action('dispatch'),
    subscribe: () => 0,
}
*/

/////Mock Store/////

//const { configureStore } = require('redux-mock-store') //CommonJS
//const configureMockStore = require('redux-mock-store');
/*
const middlewares: any = []
const mockStore = configureStore(middlewares)

const initialState: TaskListProps = { tasks: TaskListStories.Default.args?.tasks}
const store = mockStore({
    initialState,
    getState: () => {return initialState},
    dispatch: action('dispatch'),
    subscribe: () => 0,
    
}) 
*/
//const actionFunction= ()=> action('dispatch')


export default {
    component: PureInboxScreen,
    title: 'InboxScreen',
    decorators: [story => <Provider store={store} >
        {story()}
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