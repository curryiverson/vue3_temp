export const routes = [
  {
    path: '/login',
    component: () => import('@/view/login/index.vue'),
    name: 'login',
    meta: {
      desc: '登录',
      hidden: true
    },
  },
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    meta: {
      desc: 'layout',
      hidden: false
    },
    children: [
      {
        path: '/home',
        component: () => import('@/view/home/index.vue'),
        name: 'home',
        meta: {
          desc: '首页',
          hidden: false,
          icon:'HomeFilled'
        },
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/view/scream/index.vue'),
    name: 'login',
    meta: {
      desc: '数据大屏',
      hidden: false,
      icon:"Platform"
    },
  },
  {
    path: '/acl',
    component: () => import('@/layout/index.vue'),
    name: 'Acl',
    meta: {
      desc: '权限管理',
      hidden: false,
      icon:"Lock"
    },
    children: [
      {
        path: '/acl/user',
        component: () => import('@/view/acl/user/index.vue'),
        name: 'User',
        meta: {
          desc: '用户管理',
          hidden: false,
          icon:'Avatar'
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/view/acl/role/index.vue'),
        name: 'Role',
        meta: {
          desc: '角色管理',
          hidden: false,
          icon:'UserFilled'
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/view/acl/permission/index.vue'),
        name: 'Permission',
        meta: {
          desc: '菜单管理',
          hidden: false,
          icon:'Grid'
        },
      },
    ],
  },
  {
    path: '/404',
    component: () => import('@/view/404/index.vue'),
    name: '404',
    meta: {
      desc: '404',
      hidden: true
    },
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   redirect: '/404',
  //   name: 'Any',
  //   meta: {
  //     desc: '任意路由',
  //     hidden: true
  //   },
  // },
]
