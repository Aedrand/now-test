import '@servicenow/sdk/global'
import { Role } from '@servicenow/sdk/core'

export const responseTaskUser = Role({
    name: 'x_1919665_now_test.response_task_user',
    description: 'Can access and manage response tasks',
})
