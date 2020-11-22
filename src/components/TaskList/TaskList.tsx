import React from 'react'
import Task, { task} from '../Task/Task'
import { useDispatch} from 'react-redux'
//import { connect} from 'react-redux'
//import { TaskListDispatchType } from '../../lib/store'
//import { archiveTask, pinTask } from '../../lib/redux'
import {useSelector} from 'react-redux'





export interface TaskListProps {
    loading?: boolean,
    tasks?: task[],
    onPinTask?: typeof useDispatch;
    onArchiveTask?: typeof useDispatch;

}


export const PureTaskList = ({ loading, onPinTask, onArchiveTask }: TaskListProps) => {
    const events = {
        onPinTask,
        onArchiveTask
    }

    const  tasks  = useSelector((state: TaskListProps) => state.tasks)
    
    
    console.log(tasks)

    const LoadingRow = (
        <div className='loading-item' >
            <span className="glow-checkbox" />
            <span className='glow-text' >
                <span>Loading</span> <span>cool</span> <span>stateTask</span>
            </span>

        </div>
    )

   // const TaskListDispatch = useDispatch<TaskListDispatchType>()

    if (loading) {
        return (<div className='list-items' >
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            {LoadingRow}
            </div>)

    }

    if (tasks?.length === 0) {
        return (
        <div className='list-items' >
            <div className='wrapper-message' >
                <span className='icon-check' />
                <div className='title-message' >You have no tasks</div>
                <div className='subtitle-message' >Sit back and relax</div>

            </div>

        </div>
        )
    }
    const tasksInOrder = [
        ...tasks!.filter(t => t.stateTask === 'TASK_PINNED' ), 
        ...tasks!.filter(t => t.stateTask !== 'TASK_PINNED' ), 
    ]

    return (
        <div className='list-items' >{
            tasksInOrder.map(task => (
                <Task key={task?.id} task={task} {...events} />
            )
            )
        }</div>
    )
    
}


PureTaskList.defaultProps = {
    loading: false,
};


//const TaskListDispatch = useDispatch<TaskListDispatchType>()

/*
const mapStateToProps= ({ tasks }: TaskListProps) => ({
    tasks: tasks?.filter(t => t.stateTask === 'TASK_INBOX' || t.stateTask === 'TASK_PINNED'),
})


const mapDispatchToProps = (dispatch: TaskListDispatchType  ) => (   
{
   
    onArchiveTask: (selectedTask: task['id']) => dispatch(archiveTask(selectedTask)),
    onPinTask: (selectedTask: task['id'])  => dispatch(pinTask(selectedTask)),
}
)

export default connect(
    (mapStateToProps),
    (mapDispatchToProps))
    (PureTaskList);
*/