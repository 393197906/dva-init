import dynamic from 'dva/dynamic';

const dynamicWrap = (app, models = [], component = null) => {
  return dynamic({
    app,
    models: () => models.map(m => import(`./models/${m}.js`)),
    component
  })
};

export default app => [
  // {
  //   name: '登录',
  //   path: '/login',
  //   component: dynamicWrap(app, [], () => import("./routes/Login")),
  // },
  // {
  //   name: '忘记密码',
  //   path: '/forgetpwd',
  //   component: dynamicWrap(app, [], () => import("./routes/ForgetPwd")),
  // },
  {
    name: '主页',
    path: '/',
    component: dynamicWrap(app, [], () => import("./routes/IndexPage")),
    children: [
      {
        name: '商品',
        path: '/goods',
        component: dynamicWrap(app, [], () => import("./routes/Goods")),
      }
    ]
  }
]
