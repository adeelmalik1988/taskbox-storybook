import React, { FC } from 'react';
import { connect } from 'react-redux';
import { PureTaskList } from '../TaskList/TaskList';


export interface PureInboxScreenProps {
    err?: string
}
export const PureInboxScreen: FC<PureInboxScreenProps> = ({err}) => {
    if (err) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad" />
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        )
    }
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <PureTaskList />
        </div>
    )
}

PureInboxScreen.defaultProps = {
    err: null as any,
  };


export default connect(({ err }: PureInboxScreenProps) => ({ err }))
    (PureInboxScreen);