export const menuItemsData = [
    {
        title: 'About Us',
        url: '/about-us',
    },
    {
        title: 'Panchkarma',
        url: '/panchkarma',
    },
    {
        title: 'Treatments',
        url: '/Treatments',
        submenu: [
            {
                title: 'Web Design',
                url: '/web-design',
            },
            {
                title: 'Web Development',
                url: '/web-dev',
                submenu: [
                    {
                        title: 'Frontend',
                        url: '/frontend',
                    },
                    {
                        title: 'Backend',
                        url: '/backend',
                        // submenu: [
                        //     {
                        //         title: 'NodeJS',
                        //         url: '/node',
                        //     },
                        //     {
                        //         title: 'PHP',
                        //         url: '/php',
                        //     },
                        // ],
                    },
                ],
            },
            {
                title: 'SEO',
                url: '/seo',
            },
        ],
    },
    {
        title: 'About',
        url: '/about',
    },
];
