/*
import {createStore} from 'redux'
import { task } from '../components/Task';
import { TaskListProps } from '../components/TaskList';

interface actionsType { 
    type?: 'ARCHIVE_TASK'| 'PIN_TASK'
    payload?: task
}

export const actions = {
    ARCHIVE_TASK: 'ARCHIVE_TASK',
    PIN_TASK: 'PIN_TASK',
}



export const archiveTask = (id: string) => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = (id: string) => ({ type: actions.PIN_TASK, id });

function taskStateReducer(taskState?: string) {
    return (state?: TaskListProps , action?: task) => {
        return {
            ...state,
            tasks: state?.tasks?.map(task =>
                task.id === action?.id ? { ...task, state: taskState } : task
            )
        }
    }
}

export const reducer = (state?: TaskListProps, action?: actionsType) => {
    switch (action?.type) {
        case actions.ARCHIVE_TASK:
            return taskStateReducer('TASK_ARCHIVED')(state, action?.payload);

        case actions.PIN_TASK:
            return taskStateReducer('TASK_PINNED')(state, action?.payload);
        default:
            return state;

    }

}



const defaultTasks = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

export default createStore(reducer , {tasks: defaultTasks});
*/



import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { task } from '../components/Task/Task';
import { TaskListProps } from '../components/TaskList/TaskList';



export const initialState: TaskListProps = {
    tasks: [
        { id: '1', title: 'Something', stateTask: 'TASK_INBOX' },
        { id: '2', title: 'Something more', stateTask: 'TASK_INBOX' },
        { id: '3', title: 'Something else', stateTask: 'TASK_INBOX' },
        { id: '4', title: 'Something again', stateTask: 'TASK_INBOX' },
    ]
}


function taskStateReducer(taskState: task['stateTask']) {
    return (state?: TaskListProps , action?: task['id']) => {
        return {
            ...state,
            tasks: state?.tasks?.map(task =>
                task.id === action ? { ...task, stateTask: taskState } : task
            )
        }
    }
}


const taskListSlice = createSlice({
    name: 'taskListSlice',
    initialState,
    reducers: {
        archiveTask: ( state: TaskListProps  , {payload}: PayloadAction<task['id']>) => {
            return taskStateReducer('TASK_ARCHIVED')(state, payload);
            
        },
        pinTask: (state, { payload }: PayloadAction<task['id']>) =>{
            return taskStateReducer('TASK_PINNED')(state, payload);

        }
    }
});

export const { archiveTask, pinTask } = taskListSlice.actions;


export default taskListSlice.reducer
