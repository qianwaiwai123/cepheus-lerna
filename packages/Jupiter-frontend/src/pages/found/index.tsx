import React from 'react';
import { View, Map, Swiper, SwiperItem, Image, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';
import fetch from 'taro-fetch';
import './index.css';

// Icons
import IconFont from '../../../iconfont';
import { FontAwesome } from 'taro-icons';
import search from '../../../assets/searchPain.png';
import locationOrange from '../../../assets/location-orange.png';

// locators with different categories
import normalLocator from '../../../assets/normal-location.png';
import selectedLocator from '../../../assets/selected-location.png'
import dinnerLocator from '../../../assets/dinner-locator.png';
import bazzarLocator from '../../../assets/bazzar-locator.png';
import campingLocator from '../../../assets/camping-locator.png';

// Own components
import Event from '../../components/Event';
import Selector from '../../components/Selector';

// mock data
import Events from '../../mock/events';

// const tempMarkers = [
//   {
//     longitude: 121.54,
//     latitude: 29.82,
//     iconPath: dinnerLocator,
//     id: 1,
//     width: 41.47,
//     height: 50
//   },
//   {
//     longitude: 110.34,
//     latitude: 29.82,
//     iconPath: bazzarLocator,
//     id: 2,
//     width: 41.47,
//     height: 50
//   }
// ]

type Temp =  {
  start_datetime: string;
  end_datetime: string;
  id: string;
  title: string;
  description: string;
  address: string;
  category: string;
  tags: string[];
  image_url: any;
  coordinate: number[];
  distance: string;
}


const Found = () => {
  const [height, setHeight] = React.useState(0);
  const [top, setTop] = React.useState(0);
  const [isSelectorOpen, setIsSelectorOpen] = React.useState(false);
  const [events, setEvents] = React.useState(Events);
  const [markers, setMarkers] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // !!!!!!!! DO NOT REMOVE !!!!!!!!!
  // REAL DATA - CALLING API
  // const getAllevents = () => {
  //   const init = {
  //     methods: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   }
  //   fetch('http://localhost:3000/event', init)
  //     .then(res => {
  //       res.text()
  //         .then(data => {
  //           const tempData = JSON.parse(data);
  //           setEvents(tempData.event);
  //         })
  //     })
  // }

  // MOCK DATA
  const getAllEvents = () => {
    const temp =  events.map(event => {
      const start_day = event.start_datetime.getDate();
      const start_month = event.start_datetime.getMonth() + 1;
      const end_day = event.end_datetime.getDate();
      const end_month = event.end_datetime.getMonth() + 1;
      return ({...event, start_datetime: `${start_month}.${start_day}`, end_datetime: `${end_month}.${end_day}`})
    });
    setEvents(temp);
  }

  const createAllMarkers = () => {
    const temp = events.map(event => {
      return ({longitude: event.coordinate[0], latitude: event.coordinate[1], id: parseInt(event.id), width: 30 ,height: 30, iconPath: normalLocator})
    })
    setMarkers(temp);
  }


  const getNavigationBarData = () => {
    Taro.getSystemInfo()
      .then(res => {
        const statusBarHeight = res.statusBarHeight as number;
        const capsuleHeight = Taro.getMenuButtonBoundingClientRect().height;
        const capsuleTopPosition = Taro.getMenuButtonBoundingClientRect().top;
        setHeight((capsuleTopPosition - statusBarHeight) * 2 + capsuleHeight)
        setTop(statusBarHeight);
      })

  }

  React.useEffect(() => {
    getAllEvents();
    createAllMarkers();
    setIsSelectorOpen(false);
    getNavigationBarData();
  }, [])

  // when tap a marker on the map, the corresponing event will appear in the bottom
  const tapMarkerHandler = (markerId) => {
    let index = 0;
    events.map(event => {
      (parseInt(event.id) === parseInt(markerId)) ? (setCurrentIndex(index)) : (index++)
    })
    const temp = markers.map(marker => {
      return ((parseInt(marker.id) === parseInt(markerId)) ? ({...marker, iconPath: selectedLocator, width: 40, height: 40}) : ({...marker, iconPath: normalLocator, width: 30, height: 30}))
    }
    )
    setMarkers(temp);
  }

  const changeItemHandler = (id) => {
    tapMarkerHandler(id);
    Taro.vibrateShort();
  }

  return (top !== 0) && (
    <View className='wrapper'>
      <Map
        className='map'
        longitude={121.53778}
        latitude={29.81762}
        markers={markers}
        showLocation={true}
        style={{top: `${top+height}px`, position: 'absolute'}}
        onMarkerTap={(e) => tapMarkerHandler(e.detail.markerId)}
      />
      <View className='navigationBar' style={{height: `${top+height}px`}}>
      <Text style={{marginLeft: '0.5rem', fontSize: '22px', fontWeight: 'bold'}}>发现</Text>
        <View className='location'>
          <Image src={locationOrange} style={{width: '20px', height: '20px'}}/>
          <Text onClick={() => setIsSelectorOpen(!isSelectorOpen)}>东论运动中心世纪东方</Text>
        </View>
      </View>
      {isSelectorOpen && (
        <View className='selector'>
          <Selector />
        </View>
      )}
      <Swiper
        className='events'
        previousMargin={'60px'}
        circular={true}
        nextMargin={'60px'}
        current={currentIndex}
        onChange={(e) => changeItemHandler(e.detail.currentItemId)}
      >
        {events && events.map(event => (
          <SwiperItem itemId={event.id}>
            <Event
              name={event.title}
              startDate={event.start_datetime}
              endDate={event.end_datetime}
              tags={event.tags}
              image={event.image_url}
              distance={event.distance}
            />
          </SwiperItem>
        ))}
      </Swiper>
      <View className='searchIcon'><Image src={search}/> </View>
      <View className='menuIcon'><FontAwesome family='solid' name='bars' size={30} /></View>
      <View className='addIcon'><FontAwesome family='solid' name='plus' size={30} /></View>
      {/* <View className='addIcon'><IconFont name='add' color='black' /></View>  */}
    </View>
  )
}

export default Found;