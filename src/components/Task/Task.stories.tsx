import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react'
import Task, {TaskPorps} from './Task'

export default {
    component: Task,
    title: 'Task',
  
} as Meta

const Template: Story<TaskPorps> = (args) => <Task {...args} />

export const Default = Template.bind({});
 Default.args = {
     task: {
        id: '1',
        title: 'Test Task',
        stateTask: 'TASK_INBOX',
       // updatedAt: new Date(2018, 0, 1, 9, 0),
     },
 }


 export const Pinned = Template.bind({});
 Pinned.args = {
    task: { id: "1", title: "Pinned Task", stateTask: "TASK_PINNED" },
  };


 export const Archived = Template.bind({});
Archived.args = {
    task: {
        id: '1',
        title: 'Archived Task',
       
        stateTask: 'TASK_ARCHIVED'
    }
}
