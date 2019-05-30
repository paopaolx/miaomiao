export default{
  path: '/cinema',
  component: () => import('@/views/Cinema'),
  children: [  // 二级路由
    {
      path : 'city',
      component: () => import('@/components/City')
    },
    {
      path : 'nowPlaying',
      component: () => import('@/components/NowPlaying')
    },
    {
      path : 'comingSoon',
      component: () => import('@/components/ComingSoon')
    },
    {
      path : 'search',
      component: () => import('@/components/Search')
    },
    {
      path : '/cinema',
      redirect: '/cinema/nowPlaying'
    }
  ]
}

