import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'
import { response_task } from '../tables/response-task.now'
import { responseTaskUser } from '../roles/response-task-user.now'

export const responseTaskMenu = ApplicationMenu({
    $id: Now.ID['response-task-app-menu'],
    title: 'Response Tasks',
    description: 'Manage response tasks',
    roles: [responseTaskUser],
    active: true,
})

Record({
    table: 'sys_app_module',
    $id: Now.ID['response-tasks-list-module'],
    data: {
        title: 'All Response Tasks',
        active: true,
        application: responseTaskMenu.$id,
        link_type: 'LIST',
        name: response_task.name,
        order: 100,
    },
})
