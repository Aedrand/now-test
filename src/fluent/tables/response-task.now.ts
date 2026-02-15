import '@servicenow/sdk/global'
import { Table, StringColumn, ReferenceColumn, ChoiceColumn } from '@servicenow/sdk/core'

export const response_task = Table({
    name: 'x_1919665_now_test_response_task',
    extends: 'task',
    extensible: true,
    display: 'Response Task',
    auto_number: {
        prefix: 'RTSK',
        number: 1000,
        number_of_digits: 7,
    },
    schema: {
        response_team: ReferenceColumn({
            label: 'Response Team',
            referenceTable: 'sys_user_group',
            mandatory: false,
        }),
        severity: ChoiceColumn({
            label: 'Severity',
            mandatory: false,
            choices: {
                critical: { label: 'Critical' },
                high: { label: 'High' },
                medium: { label: 'Medium' },
                low: { label: 'Low' },
            },
        }),
        root_cause: StringColumn({
            label: 'Root Cause',
            maxLength: 1000,
            mandatory: false,
        }),
        resolution_notes: StringColumn({
            label: 'Resolution Notes',
            maxLength: 4000,
            mandatory: false,
        }),
    },
})
