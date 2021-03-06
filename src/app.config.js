export default {
  pages: [
    'pages/index/index',// 首页
    'pages/classify/index',// 分类
    'pages/buy/index',// 购物车
    'pages/userCenter/index',// 个人中心
    'pages/subModel/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fea314',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'white',
    // navigationStyle: 'custom',
  },
  tabBar: {
    color: '#555',
    selectedColor: '#fea314',
    list: [
      {
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'images/icon/home.png',
        selectedIconPath: 'images/icon/homeActive.png'
      },
      {
        pagePath: 'pages/classify/index',
        text: '分类',
        iconPath: 'images/icon/classify.png',
        selectedIconPath: 'images/icon/classifyActive.png'
      },
      {
        pagePath: 'pages/buy/index',
        text: '购物车',
        iconPath: 'images/icon/buy.png',
        selectedIconPath: 'images/icon/buyActive.png'
      },
      {
        pagePath: 'pages/userCenter/index',
        text: '我的',
        iconPath: 'images/icon/user.png',
        selectedIconPath: 'images/icon/userActive.png'
      },

    ]
  },
}
