const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/Index.vue') },
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: () => import('pages/PortfolioPage.vue'),
        children: [
          {
            path: ':portfolioItemTitle',
            name: 'PortfolioItem',
            component: () => import('components/Portfolio/PortfolioItem.vue'),
          },
        ],
      },
      {
        path: 'cv',
        name: 'CV',
        component: () => import('pages/CvPage.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('pages/Index.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('pages/Index.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
]

export default routes
