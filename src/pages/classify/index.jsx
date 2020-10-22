import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image, Text } from '@tarojs/components'
import { AtTabs, AtTabsPane, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add() {
    dispatch(add())
  },
  dec() {
    dispatch(minus())
  },
  asyncAdd() {
    dispatch(asyncAdd())
  }
}))
class Classify extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      current: 0,
      tabHeight: this.getWindowHeight(),
    }

  }
  handleClick(value) {
    this.setState({
      current: value
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  getWindowHeight = (showTabBar = true) => {
    const NAVIGATOR_HEIGHT = 44
    const TAB_BAR_HEIGHT = 50
    const info = Taro.getSystemInfoSync()
    const { windowHeight, statusBarHeight, titleBarHeight } = info
    const tabBarHeight = showTabBar ? TAB_BAR_HEIGHT : 0

    if (process.env.TARO_ENV === 'rn') {
      return windowHeight - statusBarHeight - NAVIGATOR_HEIGHT - tabBarHeight
    }

    if (process.env.TARO_ENV === 'h5') {
      return `${windowHeight - tabBarHeight}px`
    }

    if (process.env.TARO_ENV === 'alipay') {
      // NOTE 支付宝比较迷，windowHeight 似乎是去掉了 tabBar 高度，但无 tab 页跟 tab 页返回高度是一样的
      return `${windowHeight - statusBarHeight - titleBarHeight + (showTabBar ? 0 : TAB_BAR_HEIGHT)}px`
    }

    return `${windowHeight}px`
  }


  render() {
    const tabList = [
      { title: '缤纷水果' }, { title: '新鲜蔬菜' }, { title: '肉禽蛋类' },
      { title: '水场海鲜' }, { title: '米面粮油' }, { title: '熟食制品' },
      { title: '酒水饮料' }, { title: '日用百货' },
    ]
    const newArr = new Array(20).fill(1)

    return (
      <View className='classify'>
        <AtTabs
          height={this.state.tabHeight}
          className='tabsBox'
          tabDirection='vertical'
          current={this.state.current}
          tabList={tabList}
          onClick={this.handleClick.bind(this)}
        >
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0} >
            <View className='tabView'>
              {
                newArr.map(item => <View className='itemView'>
                  <Image className='itemImg' src='http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg' />
                  <View className='itemRight'>
                    <Text className='itemHeader'>千禧果3斤</Text>
                    <Text className='extra'>自然成熟,香甜多汁</Text>
                    <View className='itemBottom'>
                      <Text className='money'>￥12.80</Text>
                      <AtIcon value='add-circle' size='30' color='#fea314' size='20'></AtIcon>
                    </View>
                  </View>
                </View>
                )
              }
            </View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View className='tabView'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View className='tabView'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Classify

