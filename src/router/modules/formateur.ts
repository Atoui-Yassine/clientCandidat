export default [
    {
        path: '/formateur',
        component: () => import('@/layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                name: 'formateur-dashboard',
                component: () => import('@/views/formateur/FormateurView.vue'),
            },
            {
                path: 'courses',
                name: 'formateur-courses',
                component: () => import('@/views/formateur/CourseView.vue'),
            }
        ]
    }
]
