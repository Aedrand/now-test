import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ffac751a7cb748a8b82bc9fb15bb719c'
                    }
                    'incident-manager-page': {
                        table: 'sys_ui_page'
                        id: '177732e043a0493d8f5dadfb0b9f16d4'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '89e845fef55b48d2ac5ea174e99ed2bd'
                    }
                    'response-task-app-menu': {
                        table: 'sys_app_application'
                        id: '8f0d403fd18f49fbb5dbe9749f9c87d9'
                    }
                    'response-tasks-list-module': {
                        table: 'sys_app_module'
                        id: '13a5f509d8c44ae080886caa037127a7'
                    }
                    'x_1919665_now_test/main': {
                        table: 'sys_ux_lib_asset'
                        id: '742505103cef4bee82dbe4ac4e9a6b9d'
                    }
                    'x_1919665_now_test/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '045faf4a969d49669692511bf474f8a5'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '03a18fce66e64953b502a1a3d9c17511'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'resolution_notes'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '15f4d18d9b974646b69ebd2f8fc2ee6a'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '19a0f992e8154e78ab4f902fe1ccde88'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '37ab6dae41b64419aa1c7ae0b5bbb4df'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'resolution_notes'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '4a65f4dacecb4f139ba85ff33ae6c67e'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'response_team'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '4b04865e07e94ea697067aac3f0beb9a'
                        key: {
                            category: 'x_1919665_now_test_response_task'
                            prefix: 'RTSK'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '607c57901382495a875050c260b627a0'
                        key: {
                            name: 'x_1919665_now_test.response_task_user'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '61a22cea9dd74f09964961f17da8840e'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'root_cause'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6c886305c1b044bea85a3bfd4aeb8d60'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '89b07910367847fcbcd5f0a70a3d6880'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '9f5128dfff7f40f6a0ec6eec54aea198'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c65e5d54b528469b8cc5e96de60991ab'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                            value: 'high'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd22241e6cd8a4b6aa6b55ad8b93acc99'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'root_cause'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd5151ca72c0642e79a71898d3f6eb362'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                            value: 'medium'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'd5b243dfb343440fb3bde9650d62c81b'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'dc296fa206dc44ad85730ef8a9c4c57b'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                            value: 'low'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'edc561f5f5c448cdb3b5d22a489220d9'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'severity'
                            value: 'critical'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ee6ceb9d79d74bffbb12024d6069972f'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f6b741d49f4b4e81b4a83303fdbc875c'
                        key: {
                            name: 'x_1919665_now_test_response_task'
                            element: 'response_team'
                        }
                    },
                ]
            }
        }
    }
}
