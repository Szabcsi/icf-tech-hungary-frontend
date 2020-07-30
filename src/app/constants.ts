import { Role } from './role';

export const menu = {
    sidebarDemoLinks: [
        {
            label: 'Administration',
            icon: 'open_with',
            items: [
                {
                    label: 'System Configuration',
                    link: '/dashboard/systemconfiguration',
                    roles: [Role.Admin],
                    visibility : false
                },
                {
                    label: 'Submodule Configuration',
                    link: '/dashboard/submoduleconfiguration',
                    roles: [Role.Admin],
                    visibility : false
                },
                {
                    label: 'Daily Task Administration',
                    link: '/dashboard/dailytaskadministration',
                    roles: [Role.Admin],
                    visibility : false
                }
            ]
        },
        {
            label: 'Content Management',
            icon: 'verified_user',
            items: [
                {
                    label: 'New Content',
                    link: '/dashboard/newcontent',
                    roles: [Role.Admin, Role.Editor],
                    visibility : false
                },
                {
                    label: 'Edit Content',
                    link: '/dashboard/editcontent',
                    roles: [Role.Admin, Role.Editor],
                    visibility : false
                },
                {
                    label: 'Delete Content',
                    link: '/dashboard/deletecontent',
                    roles: [Role.Admin, Role.Editor],
                    visibility : false
                }
            ]
        },
        {
            label: 'Clients',
            icon: 'settings',
            items: [
                {
                    label: 'List Clients',
                    link: '/dashboard/clientlist',
                    roles: [Role.Admin, Role.Browser],
                    visibility : false
                },
                {
                    label: 'Manage Active Clients',
                    link: '/dashboard/manageactiveclients',
                    roles: [Role.Admin, Role.Browser],
                    visibility : false
                }
            ]
        }
    ],
    sidebarConfigurations: {
        paddingAtStart: true,
        interfaceWithRoute: true,
        collapseOnSelect: true,
        highlightOnSelect: true,
        rtlLayout: false
    },
};
