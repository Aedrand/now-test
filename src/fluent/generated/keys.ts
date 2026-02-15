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
                    'x_1919665_now_test/main': {
                        table: 'sys_ux_lib_asset'
                        id: '742505103cef4bee82dbe4ac4e9a6b9d'
                    }
                    'x_1919665_now_test/main.js.map': {
                        table: 'sys_ux_lib_asset'
                        id: '045faf4a969d49669692511bf474f8a5'
                    }
                }
            }
        }
    }
}
