import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Image } from '@tarojs/components'
import { AtButton } from 'taro-ui'
import { add, minus, asyncAdd } from '../../actions/counter'
import buy from '../../images/buy.png'
import img2 from '../../images/2.jpg'
import img3 from '../../images/3.jpg'
import img4 from '../../images/4.jpg'

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
class Buy extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    const list = [
      {
        img: img2,
        name: '橙子'
      },
      {
        img: img3,
        name: '无花果'
      },
      {
        img: img4,
        name: '圣女果'
      },
    ]

    return (
      <View className='buy'>
        <View className='noBuyInfo'>
          <Image className='buyImgIco' src={buy} />
          <View className='boldTxt'>购物车空荡荡</View>
          <View className='extraTxt'>快买点干粮填饱肚子吧~</View>
          <AtButton size='small' className='goBtn'>去逛逛</AtButton>
        </View>
        <View className='recommendBox'>
          <View className='likeTxt'>猜你喜欢</View>
          <View className='recommendList'>
            {list.map(item => <View className='recommendItem'>
              <View className='innnerItem'>
                <View className='itemImgBox'>
                  <Image className='buyImgIco' src={item.img} />
                </View>
                <View className='itemName'>{item.name}</View>
              </View>
            </View>
            )}
          </View>
        </View>
      </View>
    )
  }
}

export default Buy

