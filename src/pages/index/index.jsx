import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Swiper, SwiperItem, Image, Text } from '@tarojs/components'
import { AtSearchBar, AtGrid } from 'taro-ui';
import Taro from '@tarojs/taro'

import { add, minus, asyncAdd } from '../../actions/counter'
import banner from '../../images/banner.png'
import linkImg from '../../images/link.png'

import './index.less';

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

  // 页面跳转
  gridLink = (item, index) => {
    console.log('item, index', item, index);
    Taro.navigateTo({
      url: '/pages/subModel/index'
    })
  }

  render() {
    const gridList = [
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
        value: <Text className='gridItem'>缤纷水果</Text>
      },
      {
        image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
        value: <Text className='gridItem'>新鲜蔬菜</Text>
      },
      {
        image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
        value: <Text className='gridItem'>肉禽蛋类</Text>
      },
      {
        image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
        value: <Text className='gridItem'>水场海鲜</Text>
      },
      {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: <Text className='gridItem'>米面粮油</Text>
      },
      {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: <Text className='gridItem'>熟食制品</Text>
      },
      {
        image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
        value: <Text className='gridItem'>酒水饮料</Text>
      },
      {
        image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
        value: <Text className='gridItem'>日用百货</Text>
      }
    ]

    return (
      <View className='index'>
        <AtSearchBar />
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
        <AtGrid className='gridItem' onClick={this.gridLink} data={gridList} hasBorder={false} columnNum={4} />
        <Image src={linkImg} className='linkImg' />
      </View>
    )
  }
}

export default Index

