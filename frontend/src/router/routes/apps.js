export default [
    {
        path: "/apps/calendar",
        name: "apps-calendar",
        component: () => import("@/views/apps/calendar/Calendar.vue")
    },

    // *===============================================---*
    // *--------- USER ---- ---------------------------------------*
    // *===============================================---*
    {
        path: "/users/list",
        name: "users-list",
        component: () => import("@/views/user/users-list/UsersList.vue")
    },

    {
        path: "/user/edit/:id",
        name: "user-edit",
        component: () => import("@/views/user/users-edit/UsersEdit.vue")
    },
    {
        path: "/user/view/:id",
        name: "user-view",
        component: () => import("@/views/user/users-view/UsersView.vue")
    },

    // *===============================================---*
    // *--------- CUSTOMER ---- ---------------------------------------*
    // *===============================================---*
    {
        path: "/customers/list",
        name: "customers-list",
        component: () =>
            import("@/views/customer/customers-list/CustomersList.vue")
    },
    {
        path: "/customer/edit/:id",
        name: "customer-edit",
        component: () => import("@/views/customer/users-edit/UsersEdit.vue")
    },
    {
        path: "/customer/view/:id",
        name: "customer-view",
        component: () => import("@/views/customer/users-view/UsersView.vue")
    },

    // *===============================================---*
    // *--------- Settings ---- ---------------------------------------*
    // *===============================================---*
    {
        path: "/inspection-types",
        name: "inspection-types",
        component: () => import("@/views/settings/list.vue")
    },
    {
        path: "/create-inspection-types",
        name: "create-inspection-types",
        component: () => import("@/views/settings/AddNew.vue")
    },
    {
        path: "/inspection/update/:id",
        name: "create-inspection-types",
        component: () => import("@/views/settings/update_inspection.vue")
    },

    {
        path: "/categories",
        name: "categories",
        component: () => import("@/views/settings/inspection-list/categories.vue")
    },
    {
        path: "/create-categories",
        name: "create-categories",
        component: () => import("@/views/settings/create_categories.vue")
    },
    {
        path: "/categories/update/:id",
        name: "update-categories",
        component: () => import("@/views/settings/update_categories.vue")
    },
    {
        path: "/options",
        name: "options",
        component: () => import("@/views/settings/options.vue")
    },
    {
        path: "/create-options",
        name: "create-options",
        component: () => import("@/views/settings/create_options.vue")
    },
    {
        path: "/options/update/:id",
        name: "update_options",
        component: () => import("@/views/settings/update_options.vue")
    },
    {
        path: "/status-group",
        name: "status-group",
        component: () => import("@/views/settings/status-group/status_group.vue")
    },
    {
        path: "/create-status-group",
        name: "create-status-group",
        component: () => import("@/views/settings/create_status_group.vue")
    },
    {
        path: "/status_group/update/:id",
        name: "update_status_group",
        component: () => import("@/views/settings/update_status_group.vue")
    },
    {
        path: "/status-list",
        name: "status-list",
        component: () => import("@/views/settings/status-list/status_list.vue")
    },
    {
        path: "/create-status-list",
        name: "create-status-list",
        component: () => import("@/views/settings/create_status_list.vue")
    },
    {
        path: "/status_list/update/:id",
        name: "update_status_list",
        component: () => import("@/views/settings/update_status_list.vue")
    },
    {
        path: "/email-template",
        name: "email-template",
        component: () => import("@/views/settings/email-template/email_template.vue")
    },
    {
        path: "/create-email-template",
        name: "create-email-template",
        component: () => import("@/views/settings/create_email_template.vue")
    },
    {
        path: "/email_template/update/:id",
        name: "update_email_template",
        component: () => import("@/views/settings/update_email_template.vue")
    },
    {
        path: "/vehicle-categories",
        name: "vehicle-categories",
        component: () => import("@/views/settings/vehicle-categories/vehicle_categories.vue")
    },
    {
        path: "/create-vehicle-categories",
        name: "create-vehicle-categories",
        component: () =>
            import("@/views/settings/create_vehicle_categories.vue")
    },
    {
        path: "/vehicle_categories/update/:id",
        name: "update_vehicle_categories",
        component: () =>
            import("@/views/settings/update_vehicle_categories.vue")
    },
    {
        path: "/services-settings",
        name: "services-settings",
        component: () => import("@/views/settings/services-settings-list/services-settings.vue")
    },
    {
        path: "/create-services-settings",
        name: "create-services-settings",
        component: () => import("@/views/settings/create_services_settings.vue")
    },
    {
        path: "/services_settings/user/view/:id",
        name: "update_services_settings",
        component: () => import("@/views/settings/view_services_settings.vue")
    },
    {
        path: "/services_settings/update/:id",
        name: "update_services_settings",
        component: () => import("@/views/settings/update_services_settings.vue")
    },
    {
        path: "/terminal",
        name: "terminal",
        component: () => import("@/views/settings/terminal/terminal.vue")
    },
    {
        path: "/create-terminal",
        name: "create-terminal",
        component: () => import("@/views/settings/create_terminal.vue")
    },
    {
        path: "/terminal/update/:id",
        name: "update_terminal",
        component: () => import("@/views/settings/update_terminal.vue")
    },

    // {
    //     path: "/inventory",
    //     name: "inventory",
    //     component: () => import("@/views/inv/int.vue")
    // },

    

    // *===============================================---*
    // *--------- INVENTORY ---- ---------------------------------------*
    // *===============================================---*
    {
        path: "/inventory/list",
        name: "inventory-list",
        component: () =>
            import("@/views/inventory/inventory-list/InventoryList.vue")
    },
    {
        path: "/inventory/view/:id",
        name: "inventory-view",
        props: true,
        component: () =>
            import("@/views/inventory/inventory-list/InventoryView.vue")
    },

    // *===============================================---*
    // *--------- EMAIL & IT'S FILTERS N LABELS -------------------------------*
    // *===============================================---*
    {
        path: "/apps/email",
        name: "apps-email",
        component: () => import("@/views/apps/email/Email.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "email-application"
        }
    },
    {
        path: "/apps/email/:folder",
        name: "apps-email-folder",
        component: () => import("@/views/apps/email/Email.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "email-application",
            navActiveLink: "apps-email"
        },
        beforeEnter(to, _, next) {
            if (
                ["sent", "draft", "starred", "spam", "trash"].includes(
                    to.params.folder
                )
            )
                next();
            else next({ name: "error-404" });
        }
    },
    {
        path: "/apps/email/label/:label",
        name: "apps-email-label",
        component: () => import("@/views/apps/email/Email.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "email-application",
            navActiveLink: "apps-email"
        },
        beforeEnter(to, _, next) {
            if (
                ["personal", "company", "important", "private"].includes(
                    to.params.label
                )
            )
                next();
            else next({ name: "error-404" });
        }
    },

    // *===============================================---*
    // *--------- TODO & IT'S FILTERS N TAGS ---------------------------------------*
    // *===============================================---*
    {
        path: "/apps/todo",
        name: "apps-todo",
        component: () => import("@/views/apps/todo/Todo.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "todo-application"
        }
    },
    {
        path: "/apps/todo/:filter",
        name: "apps-todo-filter",
        component: () => import("@/views/apps/todo/Todo.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "todo-application",
            navActiveLink: "apps-todo"
        },
        beforeEnter(to, _, next) {
            if (
                ["important", "completed", "deleted"].includes(to.params.filter)
            )
                next();
            else next({ name: "error-404" });
        }
    },
    {
        path: "/apps/todo/tag/:tag",
        name: "apps-todo-tag",
        component: () => import("@/views/apps/todo/Todo.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "todo-application",
            navActiveLink: "apps-todo"
        },
        beforeEnter(to, _, next) {
            if (
                ["team", "low", "medium", "high", "update"].includes(
                    to.params.tag
                )
            )
                next();
            else next({ name: "error-404" });
        }
    },

    // *===============================================---*
    // *--------- CHAT  ---------------------------------------*
    // *===============================================---*
    {
        path: "/apps/chat",
        name: "apps-chat",
        component: () => import("@/views/apps/chat/Chat.vue"),
        meta: {
            contentRenderer: "sidebar-left",
            contentClass: "chat-application"
        }
    },

    // *===============================================---*
    // *--------- ECOMMERCE  ---------------------------------------*
    // *===============================================---*
    {
        path: "/apps/e-commerce/shop",
        name: "apps-e-commerce-shop",
        component: () =>
            import("@/views/apps/e-commerce/e-commerce-shop/ECommerceShop.vue"),
        meta: {
            contentRenderer: "sidebar-left-detached",
            contentClass: "ecommerce-application",
            pageTitle: "Shop",
            breadcrumb: [
                {
                    text: "ECommerce"
                },
                {
                    text: "Shop",
                    active: true
                }
            ]
        }
    },
    {
        path: "/apps/e-commerce/wishlist",
        name: "apps-e-commerce-wishlist",
        component: () =>
            import(
                "@/views/apps/e-commerce/e-commerce-wishlist/ECommerceWishlist.vue"
            ),
        meta: {
            pageTitle: "Wishlist",
            contentClass: "ecommerce-application",
            breadcrumb: [
                {
                    text: "ECommerce"
                },
                {
                    text: "Wishlist",
                    active: true
                }
            ]
        }
    },
    {
        path: "/apps/e-commerce/checkout",
        name: "apps-e-commerce-checkout",
        component: () =>
            import(
                "@/views/apps/e-commerce/e-commerce-checkout/ECommerceCheckout.vue"
            ),
        meta: {
            pageTitle: "Checkout",
            contentClass: "ecommerce-application",
            breadcrumb: [
                {
                    text: "ECommerce"
                },
                {
                    text: "Checkout",
                    active: true
                }
            ]
        }
    },
    {
        path: "/apps/e-commerce/:slug",
        name: "apps-e-commerce-product-details",
        component: () =>
            import(
                "@/views/apps/e-commerce/e-commerce-product-details/ECommerceProductDetails.vue"
            ),
        meta: {
            pageTitle: "Product Details",
            contentClass: "ecommerce-application",
            breadcrumb: [
                {
                    text: "ECommerce"
                },
                {
                    text: "Shop",
                    active: true
                },
                {
                    text: "Product Details",
                    active: true
                }
            ]
        }
    },

    // *===============================================---*
    // *--------- USER ---- ---------------------------------------*
    // *===============================================---*
    {
        path: "/apps/users/list",
        name: "apps-users-list",
        component: () => import("@/views/apps/user/users-list/UsersList.vue")
    },
    {
        path: "/apps/users/view/:id",
        name: "apps-users-view",
        component: () => import("@/views/apps/user/users-view/UsersView.vue")
    },
    {
        path: "/apps/users/edit/:id",
        name: "apps-users-edit",
        component: () => import("@/views/apps/user/users-edit/UsersEdit.vue")
    },

    // Invoice
    {
        path: "/apps/invoice/list",
        name: "apps-invoice-list",
        component: () =>
            import("@/views/apps/invoice/invoice-list/InvoiceList.vue")
    },
    {
        path: "/apps/invoice/preview/:id",
        name: "apps-invoice-preview",
        component: () =>
            import("@/views/apps/invoice/invoice-preview/InvoicePreview.vue")
    },
    {
        path: "/apps/invoice/add/",
        name: "apps-invoice-add",
        component: () =>
            import("@/views/apps/invoice/invoice-add/InvoiceAdd.vue")
    },
    {
        path: "/apps/invoice/edit/:id",
        name: "apps-invoice-edit",
        component: () =>
            import("@/views/apps/invoice/invoice-edit/InvoiceEdit.vue")
    }
];
