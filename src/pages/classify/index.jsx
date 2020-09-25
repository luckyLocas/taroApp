import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'

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

  render() {
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }, { title: '标签页3' }]
    return (
      <View className='classify'>
        <AtTabs height='600px' className='tabsBox' tabDirection='vertical' current={this.state.current} tabList={tabList} onClick={this.handleClick.bind(this)}>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={0} >
            <View className='tabsView'>标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
            <View className='tabsView'>标签页二的内容</View>
          </AtTabsPane>
          <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
            <View className='tabsView'>标签页三的内容</View>
          </AtTabsPane>
        </AtTabs>
      </View>
    )
  }
}

export default Classify

