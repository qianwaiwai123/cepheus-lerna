import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import './Event.css';
import clock from '../../assets/clock.png';

type Props = {
  name: string;
  startDate: string;
  endDate: string;
  tags: string[];
  image: string;
  distance: string;
}

const titleStyle = {color: 'white', zIndex: '100', fontWeight: 'light', fontSize: '15px'};
const dateStyle = {color: 'white', zIndex: '1000', fontWeight: 'bold', opacity: '1'};
const imageStyle = {width: '20px', height: '20px', marginLeft: '5px'};

const Event = (props: Props) => {
  return (
    <View className='eventWrapper'>
      <View className='container'>
        <Image src={props.image}/>
        <View className='shadow' />
        <View className='distance'>{`${props.distance}km`}</View>
        <View className='info'>
          <Text style={titleStyle}>{props.name}</Text>
          <View className='time'>
            <Image src={clock} style={imageStyle} />
            <Text style={dateStyle}>{`${props.startDate} - ${props.endDate}`}</Text>
          </View>
          <View className='tags'>
            {props.tags.map(tag => <View className='tag'>{tag}</View>)}
          </View>
        </View>
      </View>  
    </View>
  )
}

export default Event;