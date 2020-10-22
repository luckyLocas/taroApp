import React, { Component } from 'react'
import { connect } from 'react-redux'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View, Text, } from '@tarojs/components'
import {
  AtAvatar, AtBadge, AtIcon,
  AtList, AtListItem, AtButton,
  AtModal, AtModalHeader, AtModalContent, AtModalAction
} from 'taro-ui'

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
class Usercenter extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      modalOpen: false,
      userInfo: null
    }
  }

  componentWillMount() {
    // this.gotologin();
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() {
    this.checkUserInfo()
  }

  checkUserInfo = () => {
    const that = this;
    Taro.getStorage({
      key: "userinfo"
    }).then(res => {
      that.setState({
        modalOpen: false
      })
    }).catch(error => {
      that.setState({
        modalOpen: true
      })
    })
  }

  componentDidHide() { }

  tobegin = (res) => {
    console.log('res', res)
    // 保存用户信息微信登录
    Taro.setStorage({
      key: "userinfo",
      data: res.detail.userInfo
    });
    this.setState({
      modalOpen: false,
      userInfo: res.detail.userInfo
    })
  }


  render() {
    const { modalOpen, userInfo } = this.state;
    return (
      <View className='userCenter'>
        <AtModal isOpened={modalOpen}>
          <AtModalHeader>登录提示</AtModalHeader>
          <AtModalContent className='modalContent'>
            请您先授权登录
          </AtModalContent>
          <AtModalAction>
            <AtButton size='small' full onClick={() => {
              this.setState({
                modalOpen: false
              })
            }}>取消</AtButton>
            <AtButton
              className='loginButto'
              type="primary"
              size='small'
              full
              openType="getUserInfo"
              onGetUserInfo={this.tobegin}
            >
              确定
          </AtButton>
          </AtModalAction>
        </AtModal>
        <View className='userTop'>
          <View className='userInfo'>
            <AtAvatar circle image={userInfo ? userInfo.avatarUrl : 'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'} size='large'></AtAvatar>
            <Text className='userName'>{userInfo ? userInfo.nickName : '只要开始,虽晚不迟'}</Text>
            <AtBadge dot>
              <AtIcon value='message' size='26' color='#888'></AtIcon>
            </AtBadge>
          </View>
          <View className='membersView'>
            <Text className='membersHeader'>会员特权</Text>
            <View className='membersItem'>
              <Text className='firstItem'><AtIcon value='sketch' size='30' color='rgb(221, 147, 9)' size='18'></AtIcon> 会员价</Text>
              <Text className='centerItem'><AtIcon value='calendar' size='30' color='rgb(221, 147, 9)' size='18'></AtIcon> 会员日</Text>
              <Text className='openBtn'>
                立即开通
                <AtIcon value='chevron-right' size='30' color='#222' size='14'></AtIcon>
              </Text>
            </View>
            <View className='membersItem'>
              <Text className='firstItem'><AtIcon value='phone' size='30' color='rgb(221, 147, 9)' size='18'></AtIcon> 在线客服</Text>
              <Text className='centerItem'><AtIcon value='tags' size='30' color='rgb(221, 147, 9)' size='18'></AtIcon> 敬请期待</Text>
            </View>
          </View>
        </View>
        <AtList>
          <AtListItem title='我的订单' arrow='right' />
          <AtListItem title='我的优惠券' arrow='right' />
          <AtListItem title='收货地址' arrow='right' />
          <AtListItem title='在线客服' arrow='right' />
          <AtListItem title='设置' arrow='right' />
        </AtList>
      </View>
    )
  }
}

export default Usercenter

