export default [
    {
        title: "User",
        icon: "UserIcon",
        route: "users-list"
    },
    {
        title: "Customer",
        icon: "UsersIcon",
        route: "customers-list"
    },
    {
        title: "Inventory",
        icon: "ShoppingCartIcon",
        route: "inventory-list"
    },

    {
        title: "Settings",
        icon: "ToolIcon",
        children: [
            // {
            //     title: "Inspection Types",
            //     route: "inspection-types"
            // },
            {
                title: "Inspection List",
                route: "categories"
            },
            // {
            //     title: "Options",
            //     route: "options"
            // },
            {
                title: "Status Group",
                route: "status-group"
            },
            {
                title: "Status List",
                route: "status-list"
            },
            {
                title: "Email Template",
                route: "email-template"
            },
            {
                title: "Vehicle Categories",
                route: "vehicle-categories"
            }
        ]
    },
    {
        title: "Service Settings",
        icon: "SettingsIcon",
        children: [
            {
                title: "Services",
                route: "services-settings"
            },
            {
                title: "Terminal",
                route: "terminal"
            },
            // {
            //     title: "Inventory",
            //     route: "inventory"
            // }
        ]
    }
    // {
    //   title: 'eCommerce',
    //   icon: 'ShoppingCartIcon',
    //   children: [
    //     {
    //       title: 'Shop',
    //       route: 'apps-e-commerce-shop',
    //     },
    //     {
    //       title: 'Details',
    //       route: { name: 'apps-e-commerce-product-details', params: { slug: 'apple-watch-series-5-27' } },
    //     },
    //     {
    //       title: 'Wishlist',
    //       route: 'apps-e-commerce-wishlist',
    //     },
    //     {
    //       title: 'Checkout',
    //       route: 'apps-e-commerce-checkout',
    //     },
    //   ],
    // },
    // {
    //   title: 'User',
    //   icon: 'UserIcon',
    //   children: [
    //     {
    //       title: 'List',
    //       route: 'apps-users-list',
    //     },
    //     {
    //       title: 'View',
    //       route: { name: 'apps-users-view', params: { id: 21 } },
    //     },
    //     {
    //       title: 'Edit',
    //       route: { name: 'apps-users-edit', params: { id: 21 } },
    //     },
    //   ],
    // },
    // {
    //   title: 'Pages',
    //   icon: 'FileIcon',
    //   children: [
    //     {
    //       title: 'Authentication',
    //       icon: 'CircleIcon',
    //       children: [
    //         {
    //           title: 'Login v1',
    //           route: 'auth-login-v1',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Login v2',
    //           route: 'auth-login-v2',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Register v1',
    //           route: 'auth-register-v1',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Register v2',
    //           route: 'auth-register-v2',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Forgot Password v1',
    //           route: 'auth-forgot-password-v1',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Forgot Password v2',
    //           route: 'auth-forgot-password-v2',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Reset Password v1',
    //           route: 'auth-reset-password-v1',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Reset Password v2',
    //           route: 'auth-reset-password-v2',
    //           target: '_blank',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Account Settings',
    //       route: 'pages-account-setting',
    //     },
    //     {
    //       title: 'Profile',
    //       route: 'pages-profile',
    //     },
    //     {
    //       title: 'Faq',
    //       route: 'pages-faq',
    //     },
    //     {
    //       title: 'Knowledge Base',
    //       route: 'pages-knowledge-base',
    //     },
    //     {
    //       title: 'Pricing',
    //       route: 'pages-pricing',
    //     },
    //     {
    //       title: 'Blog',
    //       children: [
    //         {
    //           title: 'List',
    //           route: 'pages-blog-list',
    //         },
    //         {
    //           title: 'Detail',
    //           route: { name: 'pages-blog-detail', params: { id: 1 } },
    //         },
    //         {
    //           title: 'Edit',
    //           route: { name: 'pages-blog-edit', params: { id: 1 } },
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Mail Templates',
    //       children: [
    //         {
    //           title: 'Welcome',
    //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
    //         },
    //         {
    //           title: 'Reset Password',
    //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
    //         },
    //         {
    //           title: 'Verify Email',
    //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
    //         },
    //         {
    //           title: 'Deactivate Account',
    //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
    //         },
    //         {
    //           title: 'Invoice',
    //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
    //         },
    //         {
    //           title: 'Promotional',
    //           href: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Miscellaneous',
    //       icon: 'CircleIcon',
    //       children: [
    //         {
    //           title: 'Coming Soon',
    //           route: 'misc-coming-soon',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Not Authorized',
    //           route: 'misc-not-authorized',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Under Maintenance',
    //           route: 'misc-under-maintenance',
    //           target: '_blank',
    //         },
    //         {
    //           title: 'Error',
    //           route: 'misc-error',
    //           target: '_blank',
    //         },
    //       ],
    //     },
    //   ],
    // },
];
