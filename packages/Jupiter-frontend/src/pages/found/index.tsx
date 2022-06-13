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
import social from '../../../assets/social.png';

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
  const [events, setEvents] = React.useState([]);
  const [markers, setMarkers] = React.useState([]);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentLongitude, setCurrentLongitude] = React.useState(0);
  const [currentLatitude, setCurrentLatitude] = React.useState(0);
  const [temp, setTemp] = React.useState([]);

  const getEvents = () => {

    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`http://localhost:3000/jupiter/event/find/${currentLatitude}/${currentLongitude}`, init)
      .then(res => {
        res.text()
          .then(data => {
            const tempData = JSON.parse(data);
            const eventsData = tempData.hits.hits;
            let tempEvents = [];
            eventsData.forEach(event => {
              tempEvents.push(event._source);
            })
            // console.log(tempEvents);
            const temp =  tempEvents.map(event => {
              const start_date = new Date(event.start_time);
              const end_date = new Date(event.end_time);
              const start_day =start_date.getDate();
              const start_month = start_date.getMonth() + 1;
              let end_month = -1;
              let end_day = -1;
              if (event.end_time !== '0001-01-01T00:00:00Z') {
                end_day = end_date.getDate();
                end_month = end_date.getMonth() + 1;
              }
              let newTags = [];
              // console.log(event);
              // console.log('event: ' + event.tags);
              events.tags && event.tags.map(tag => {
                newTags.push(tag.name);
              })

              event.tags = newTags;
              return ({...event, start_time: `${start_month}.${start_day}`, end_time: `${end_month}.${end_day}`})
            });
            // console.log(temp);
            setEvents(temp);
            
          })
      })

  }

  // MOCK DATA
  // const getAllEvents = () => {
  //   const temp =  events.map(event => {
  //     const start_day = event.start_datetime.getDate();
  //     const start_month = event.start_datetime.getMonth() + 1;
  //     const end_day = event.end_datetime.getDate();
  //     const end_month = event.end_datetime.getMonth() + 1;
  //     return ({...event, start_datetime: `${start_month}.${start_day}`, end_datetime: `${end_month}.${end_day}`})
  //   });
  //   setEvents(temp);
  // }

  const createAllMarkers = () => {
    console.log(events);
    const temp = (events.map(event => {
        return ({longitude: event.coordinate.lon, latitude: event.coordinate.lat, width: 30 ,height: 30, iconPath: normalLocator})
      }))
    
    console.log(`temp: ${temp}`)
    setMarkers(temp);
  }

  React.useEffect(() => {
    createAllMarkers();
  }, [events])

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

  const getCurrentLocation = () => {
    Taro.getLocation({
      success(res) {
        setCurrentLatitude(res.latitude);
        setCurrentLongitude(res.longitude);
      }
    })
      // .then(res => {
      //   // console.log(res);
      //   setCurrentLatitude(res.latitude);
      //   setCurrentLongitude(res.longitude);
      // })
  }

  React.useEffect(() => {
    getCurrentLocation();
    getEvents();
    // // getAllEvents();
    setIsSelectorOpen(false);
    getNavigationBarData();
  }, [])

  

  React.useEffect(()=> {
    getEvents();
  }, [currentLongitude, currentLatitude])

  // when tap a marker on the map, the corresponing event will appear in the bottom
  const tapMarkerHandler = (markerId) => {
    let index = 0;
    events.length > 0 && events.map(event => {
      (parseInt(event.id) === parseInt(markerId)) ? (setCurrentIndex(index)) : (index++)
    })
    const temp = markers.map(marker => {
      if (parseInt(marker.id) === parseInt(markerId)) {
        setCurrentLatitude(marker.latitude);
        setCurrentLongitude(marker.longitude);
        return ({...marker, iconPath: selectedLocator, width: 40, height: 40})
      } else {
        return ({...marker, iconPath: normalLocator, width: 30, height: 30})
      }
      // return ((parseInt(marker.id) === parseInt(markerId)) ? ({...marker, iconPath: selectedLocator, width: 40, height: 40}) : ({...marker, iconPath: normalLocator, width: 30, height: 30}))
    }
    )
    setMarkers(temp);
  }

  const changeItemHandler = (id) => {
    tapMarkerHandler(id);
    Taro.vibrateShort();
  }

  const addEventHandler = () => {
    Taro.navigateTo({
      url: '/pages/createEvent/index'
    });
    Taro.vibrateShort();
  }

  const navigateToEvent = (uuid: string) => {
    Taro.navigateTo({
      url: `/pages/eventDetail/index`
    })
  }

  return (top !== 0) && (
    <View className='wrapper'>
      <Map
        className='map'
        longitude={currentLongitude}
        latitude={currentLatitude}
        markers={markers}
        showLocation={true}
        style={{top: `${top+height}px`, position: 'absolute'}}
        // onMarkerTap={(e) => tapMarkerHandler(e.detail.markerId)}
        onMarkerTap={(e) => console.log(e)}
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
        {/* {events.length > 0 && events.map(event => (
          <SwiperItem itemId={event.uuid} >
            <Event
              name={event.title}
              startDate={event.start_time}
              endDate={event.end_time}
              tags={event.tags}
              image = {social}
              distance={'10'}
              // image={event.image_url}
              // distance={event.distance}
            />
          </SwiperItem>
        ))} */}
      </Swiper>
      <View className='searchIcon'><Image src={search}/> </View>
      <View className='menuIcon'><FontAwesome family='solid' name='bars' size={30} /></View>
      <View className='addIcon' onClick={addEventHandler}><FontAwesome family='solid' name='plus' size={30} /></View>
      {/* <View className='addIcon'><IconFont name='add' color='black' /></View>  */}
    </View>
  )
}

export default Found;