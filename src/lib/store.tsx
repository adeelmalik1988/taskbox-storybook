import { combineReducers, configureStore } from '@reduxjs/toolkit'
import taskListSliceReducer from './redux'
import {initialState} from './redux'

const store = configureStore({
    reducer: taskListSliceReducer,
    preloadedState: initialState

});

export type TaskListDispatchType = typeof store.dispatch;
//export const useTasklistDispatch = () => useDispatch<TaskListDispatchType>();
export default store


export const rootReducer = combineReducers({
    taskListSliceReducer
});


export type RootState = ReturnType<typeof rootReducer>;
