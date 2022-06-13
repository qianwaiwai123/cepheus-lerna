import React from 'react';
import { View, Text, Input, Picker, Radio, Textarea, Button, RadioGroup, Image } from '@tarojs/components';
import './index.css';
import { FontAwesome } from 'taro-icons';
import Taro from '@tarojs/taro';
import fetch from 'taro-fetch';

// Own components
import SaveDraft from '../../components/SaveDraft';
import SubmitEvent from '../../components/SubmitEvent';

const greyText = {
  color: '#A6A6A6',
  fontSize: '13px'
}

const blueText = {
  color: '#2A82E4',
  fontSize: '13px',
  marginBottom: '1rem'
}

const tempcategories = ['露营', '运动', '交友', '集市']

const tempToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJjZXBoZXVzLmF1dGgiLCJzdWIiOiIrODYxODY2Nzg4MTk1MCIsImV4cCI6MTY1NDg0MTY3NSwiaWF0IjoxNjU0NzU1Mjc1LCJqdGkiOiI3MDllOTk0MC0yN2NjLTQ3NmYtYjc1MC02Nzg5NWRiMzBhMjQiLCJpc3N1ZXJfaWQiOiI3MzVhNTVhZi1iYWY4LTRhNjgtYTM3Ny1jZTY3NzdjNTE5NGYiLCJ0eXBlIjowLCJzZXNzaW9uX3Rva2VuIjoiOVdQbUxmMnJwZEJnUng4bmw0ZHY1WHk4TGlBQlVZUjcifQ.0l9FiAvEpQhOAFzdQY3Aalh1vlEO5NT8WpexVwZCpRc';
const SERVER_PORT_NUMBER = 'http://localhost:3000'

const CreateEvent = () => {
  // Raw terms data from backend
  const [existCategories, setExistCategories] = React.useState<any>([]);
  const [existTags, setExistTags] = React.useState<any>([]);

  const [categories, setCategories] = React.useState<any>([]);
  const [isAddTagOpen, setIsAddTagOpen] = React.useState(false);
  const [isSaveDraft, setIsSaveDraft] = React.useState(false);
  const [isSubmitEvent, setIsSubmitEvent] = React.useState(false);
  const [fid, setFid] = React.useState<any>('');

  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(-1);
  const [tags, setTags] = React.useState<any>([]);
  const [tag, setTag] = React.useState<any>('');
  const [overviewImages, setOverviewImages] = React.useState<any>([]);
  const [detailImages, setDetailImages] = React.useState<any>([]);
  

  // create event dto
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [categoryUuid, setCategoryUuid] = React.useState('');
  const [date, setDate] = React.useState('');
  const [tagUuids, setTagUuids] = React.useState<any>([]);
  const [fids, setFids] = React.useState<any>([]);
  const [longitude, setLongitude] = React.useState('');
  const [latitude, setLatitude] = React.useState('');


  // when page first renders, get today's date
  const getCurrentDate = () => {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    const currentDate = yyyy + '-' + mm + '-' + dd;
    setDate(currentDate);
  }

  // get term information from backend
  const getTerm = () => {
    const init = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`${SERVER_PORT_NUMBER}/jupiter/term`, init)
      .then(res => {
        res.text()
          .then(data => {
            // console.log('terms: ' + data);
            const terms = JSON.parse(data);
            let tempCategories:any[] = [];
            let tempExistCategories: any[] = [];
            let tempExistTags: any[] = [];
            terms.map(item => {
              if (item.taxonomy === 'CATEGORY') {
                tempCategories.push(item.name);
                tempExistCategories.push(item);
                // setExistCategories([...existCategories, item]);
                // setCategories([...categories, item.name]);
              } else if (item.taxonomy === 'TAG') {
                tempExistTags.push(item);
                // setExistTags([...existTags, item]);
              }
            })
            setExistCategories(tempExistCategories);
            setCategories(tempCategories);
            setExistTags(tempExistTags);
          })
      })
  }

  React.useEffect(() => {
    getCurrentDate();
    getTerm();
  }, [])

  React.useEffect(() => {
    const name = categories[selectedCategoryIndex];
    const correspondingCategory = existCategories.filter(category => category.name === name);
    correspondingCategory.length > 0 && (setCategoryUuid(correspondingCategory[0].uuid))
  }, [selectedCategoryIndex])

  // upload event's overview images
  const uploadOverviewImageHandler = () => {
    Taro.chooseImage({
      sourceType: ['album', 'camera']
    })
      .then(res => {
        // console.log(res);
        res.tempFilePaths.map(image => {
          setOverviewImages([...overviewImages, image]);
        })
        
        // Taro.previewImage({
        //   urls: res.tempFilePaths
        // })
      })
  }

  // upload event's detailed images
  const uploadDetailImageHandler = () => {
    Taro.chooseImage({
      sourceType: ['album', 'camera']
    })
      .then(res => {
        // console.log(res);
        res.tempFilePaths.map(image => {
          setDetailImages([...detailImages, image]);
        })
        
        // Taro.previewImage({
        //   urls: res.tempFilePaths
        // })
      })
  }

  // 
  const backHandler = () => {
    Taro.vibrateShort();
    Taro.navigateBack();
  }

  const createTag = (name: string, description: string, taxonomy: number) => {
    const requestBody = {
      name: name,
      description: description,
      taxonomy: taxonomy
    }
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': tempToken
      },
      body: JSON.stringify(requestBody)
    }

    fetch(`${SERVER_PORT_NUMBER}/jupiter/term`, init)
      .then(res => {
        res.text()
          .then(data => {
            setTagUuids([...tagUuids, data]);
          })
      })
  }

  // after clicking the telegram icon, current tag in the text input bar will add to tags list
  const addTagHandler = () => {
    const temp = existTags.filter(item => item.name === tag);
    if (temp.length === 0) {
      createTag(tag, '' ,0);
    } else {
      setTagUuids([...tagUuids, temp[0].uuid]);
    }
    setTags([...tags, tag]);
    setIsAddTagOpen(false);
  }

  // the add tag popup will appear in the bottom of the page
  const clickAddTagHandler = () => {
    Taro.vibrateShort();
    setIsAddTagOpen(true);
  }

  // save draft modal
  const saveDraftHandler = () => {
    Taro.vibrateShort();
    setIsSaveDraft(true);
  }

  const uploadImage = () => {
    let temp:any = [];
    overviewImages.map(image => {
      Taro.uploadFile({
        url: 'https://cepheus-bff.beehomeplus.cn/media/upload',
        filePath: image,
        name: 'file',
        header: {
          'Authorization': tempToken
        },
        success(res) {
          const fid: string =(JSON.parse(res.data).file.fid);
          temp.push(fid);
          console.log(temp);
          setFids(temp);
        }
      })
        // .then(res => {
        //   const newFid =(JSON.parse(res.data).file.fid);
        //   setFid(newFid);
        // })
    })
  }

  React.useEffect(() => {
    setFids([...fids, fid]);
  }, [fid])

  const createEvent = () => {
    const requestBody = {
      title: title,
      description: description,
      address: address,
      category: categoryUuid,
      start_time: new Date(date),
      tags_list: tagUuids,
      coordinate: {
        lat: latitude,
        lon: longitude
      },
      image_fids_list: fids
    }
    console.log(requestBody);
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': tempToken
      },
      body: JSON.stringify(requestBody)
    }
    fetch(`${SERVER_PORT_NUMBER}/jupiter/event`, init)
      .then(res => {
        res.text()
        .then(data => console.log(data))
      })
  }
  // submit event modal
  const submitEventHandler = () => {
    uploadImage();
    createEvent();
    Taro.vibrateShort();
    setIsSubmitEvent(true);
  }

  // select event location
  const chooseLocationHandler = () => {
    Taro.vibrateShort();
    Taro.chooseLocation({
      success: (res) => {
        setAddress(res.address);
        setLongitude(res.longitude);
        setLatitude(res.latitude);
      }
    })
  }

  

  return (
    <View className='createWrapper'>
      <View className='formContainer'>
        <View className='item'>
          <Text>活动名称</Text>
          <Input
            type='text'
            value={title}
            className='textInput'
            placeholder='输入活动名称'
            onInput={(e) => setTitle(e.detail.value)}
          />
        </View>
        <Picker
          mode='date'
          value={date}
          onChange={(e) => setDate(e.detail.value)}
        >
          <View className='item'>
            <Text>时间<Text style={greyText}> (不选则默认即时发布)</Text></Text>
            <View className='selections'>
              <Text>{date}</Text>
              <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
            </View>
          </View>
        </Picker>
        <View className='item' onClick={chooseLocationHandler}>
          <Text style={{width: '100px'}}>地点</Text>
          <View className='selections'>
            <Text>{address} </Text>
          </View>
          <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
        </View>
        <RadioGroup className='option'>
          <Radio color='#2A82E4' >官方发起</Radio>
          <Radio color='#2A82E4' >个人发起</Radio>
        </RadioGroup>
        <Picker
          mode='selector'
          value={selectedCategoryIndex}
          range={categories}
          onChange={(e) => setSelectedCategoryIndex(e.detail.value as number)}
        >
          <View className='item'>
            <Text>活动类型</Text>
            <View className='selections'>
              {selectedCategoryIndex !== -1 && (<Text>{categories[selectedCategoryIndex]}</Text>)}
              <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
            </View>
          </View>
        </Picker>
        <View className='item'>
          <Text>上传照片</Text>
        </View>
        <View className='images'>
          {overviewImages.length > 0 && overviewImages.map(image => {
            // console.log('render' + image);
            return (<Image className='image' src={image} onClick={() => Taro.previewImage({urls: overviewImages})}/>)
          })}
          <View className='uploadImage' onClick={uploadOverviewImageHandler}>
            <FontAwesome family='solid' name='plus' color='#c4c4c4' size={20} />
            <Text style={greyText}>点击上传图片</Text>
          </View>
        </View>
        <View className='tagsContainer'>
          {tags.length > 0 && (tags.map(item => {
            return (<View className='addTag'>{item}</View>)
          }))}
          <View style={blueText} onClick={clickAddTagHandler}>添加活动标签</View>
        </View>
      </View>
      <View className='formContainer'>
        <View className='item'>
            <Text>填写详情<Text style={greyText}> (活动发布后自动生成群聊)</Text></Text>
        </View>
        <View className='images'>
          {detailImages.length > 0 && detailImages.map(item => (
            <Image className='image' src={item} onClick={() => Taro.previewImage({urls: detailImages})}/>
          ))}
          <View className='uploadImage' onClick={uploadDetailImageHandler}>
            <FontAwesome family='solid' name='plus' color='#c4c4c4' size={20} />
            <Text style={greyText}>点击上传图片</Text>
          </View>
        </View>
        <View className='item'>
          <Textarea
            placeholder='对活动进行一些描述吧'
            autoHeight={true}
            value={description}
            onInput={(e) =>setDescription(e.detail.value)} />
        </View>
      </View>
      <View className='formContainer'>
        <View className='item'>
          <Text>奖品奖励<Text style={greyText}> (选填)</Text></Text>
          <FontAwesome family='solid' name='angle-right' color='#c4c4c4' size={20} />
        </View>
        <View className='item'>
          <Text>优惠券</Text>
        </View>
        <View className='item'>
          <Text>实物奖品</Text>
          <Input
            type='text'
            className='textInput'
            onInput={(e) => console.log(e)}
          />
        </View>
      </View>
      <Text className='saveDraft' onClick={saveDraftHandler} >保存草稿</Text>
      <View className='buttons'>
        <Button
          className='exitButton'
          onClick={backHandler}
        >
          退出
        </Button>
        <Button className='submitButton' onClick={submitEventHandler}>提交</Button>
      </View>
      {isAddTagOpen && (
        <View className='addTagContainer'>
          <View className='greyLine' />
          <Text style={greyText}>最多添加5个标签</Text>
          <View className='addTagInputBar'>
            <Input
              className='searchBar'
              type='text'
              placeholder='自定义标签最多5个字'
              placeholderStyle='color: white' 
              onInput={(e) => setTag(e.detail.value)}
            />
            <View
              className='telegramIcon'
              onClick={addTagHandler}
            >
              <FontAwesome
                family='brands'
                name='telegram'
                size={40}
                color='#5680FA'
              />
            </View>
          </View>
        </View>
      )}
      {isSaveDraft && <SaveDraft />}
      {isSubmitEvent && <SubmitEvent />}
    </View>
  )
}

export default CreateEvent;