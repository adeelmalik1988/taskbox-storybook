import React from 'react'
import ReactDom from 'react-dom'
import '@testing-library/jest-dom/extend-expect'

import {WithPinnedTasks} from './TaskList.stories'

it('renders pineed tasks at the start of the list', ()=>{
    const div = document.createElement('div')
    ReactDom.render(<WithPinnedTasks {...WithPinnedTasks.args} />, div);

    const lastTaskInput = div.querySelector('.list-item:nth-child(1) input[value = "Task 6 (pinned)"]');
    expect(lastTaskInput).not.toBe(null);

    ReactDom.unmountComponentAtNode(div)
})