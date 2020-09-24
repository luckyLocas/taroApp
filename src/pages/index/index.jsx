import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less';
import banner from '../../images/banner.png'


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
class Index extends Component {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <Swiper
          className='swiperContainer'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='swiperItem'>
              <Image src={banner} className='swiperImg' />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiperItem'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='swiperItem'>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}

export default Index

