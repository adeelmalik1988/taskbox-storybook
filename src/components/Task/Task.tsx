import React, { FC } from 'react'
import { useDispatch} from 'react-redux'
import { archiveTask, pinTask } from '../../lib/redux'
import { TaskListDispatchType } from '../../lib/store'


export interface task {
    id?: string;
    title?: string;
    stateTask?: "TASK_INBOX" | "TASK_ARCHIVED" | "TASK_PINNED";

}


export interface TaskPorps {
    task?: task;
    onArchiveTask?: TaskListDispatchType;
    onPinTask?: TaskListDispatchType;
}



const Task: FC<TaskPorps> = ({task ,onArchiveTask,onPinTask}) => {

    onArchiveTask = useDispatch()
    onPinTask = useDispatch()
 console.log(task)
    return (
        <div className={`list-item ${task?.stateTask}`} >
            <label className='checkbox' >
                <input
                    type="checkbox"
                    defaultChecked={task?.stateTask === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                   
                    
                />
                <span className='checkbox-custom' onClick={() => onArchiveTask!(archiveTask(task?.id)) } />
            </label>
            <div className="title" >
                <input type='text' value={task?.title} readOnly={true} placeholder='Input title'  ></input>

            </div>
            <div className='action' onClick={event => event.stopPropagation()} >
                {task?.stateTask !== 'TASK_ARCHIVED' && (
                    <div onClick={() => onPinTask!(pinTask(task!.id))} >
                        <span className='icon-star' />
                    </div>
                )}

            </div>
        </div>

    )

}
export default Task